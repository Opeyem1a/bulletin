'use client';

import { useEffect, useRef } from 'react';
import { createRandom, getCoverLayout } from '@/utils/cover-layout';
import { Edition } from '@/utils/types';
import styles from '@/app/(signup)/signup.module.css';

/** Seconds the glow takes to mostly settle into a new arrangement. */
const GLIDE_SECONDS = 0.45;

/** How far each point wanders while idle, as a fraction of the glow. */
const DRIFT = 0.05;

const MAX_POINTS = 16;
const TAU = Math.PI * 2;

const VERTEX_SHADER = `
attribute vec2 position;

void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}`;

// The same gradient as src/utils/cover.ts, drawn per pixel on the GPU. Keep the
// two in step.
const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 resolution;
uniform int count;
uniform vec2 points[${MAX_POINTS}];
uniform vec3 colors[${MAX_POINTS}];
uniform vec4 warp;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    float u = gl_FragCoord.x / resolution.x;
    float v = 1.0 - gl_FragCoord.y / resolution.y;
    u += sin(v * warp.y + warp.z) * 0.08;
    v += sin(u * warp.x + warp.w) * 0.12;

    vec3 color = vec3(0.0);
    float totalWeight = 0.0;
    for (int i = 0; i < ${MAX_POINTS}; i++) {
        if (i >= count) break;
        float dx = (u - points[i].x) * 2.0;
        float dy = v - points[i].y;
        float weight = 1.0 / pow(dx * dx + dy * dy + 0.002, 1.7);
        color += colors[i] * weight;
        totalWeight += weight;
    }

    float grain = (noise(gl_FragCoord.xy) - 0.5) * 12.0 / 255.0;
    gl_FragColor = vec4(color / totalWeight + grain, 1.0);
}`;

/**
 * Turns typed text into a cover seed (FNV-1a), so the same email always draws
 * the same glow.
 */
function seedFromText(text: string) {
    let hash = 0x811c9dc5;
    for (const char of text) {
        hash ^= char.codePointAt(0) ?? 0;
        hash = Math.imul(hash, 0x01000193);
    }
    return hash >>> 0;
}

function approach(current: number, target: number, amount: number) {
    return current + (target - current) * amount;
}

/** Like approach, but turns the short way round the circle. */
function approachAngle(current: number, target: number, amount: number) {
    const delta = ((((target - current) % TAU) + TAU * 1.5) % TAU) - Math.PI;
    return current + delta * amount;
}

function createProgram(gl: WebGLRenderingContext) {
    const program = gl.createProgram();
    if (!program) return null;
    const shaders = [
        [gl.VERTEX_SHADER, VERTEX_SHADER],
        [gl.FRAGMENT_SHADER, FRAGMENT_SHADER],
    ] as const;
    for (const [type, source] of shaders) {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        gl.attachShader(program, shader);
    }
    gl.linkProgram(program);
    return gl.getProgramParameter(program, gl.LINK_STATUS) ? program : null;
}

interface GlowProps {
    cover: Edition['cover'];
    /** The email being typed. Each one rearranges the glow. */
    text: string;
    /** Grows and brightens the glow, for a finished signup. */
    bloom: boolean;
}

/**
 * A cover that drifts slowly and rearranges itself to the email being typed.
 * Starts as the still cover (/glow.jpg), which is also all that shows with
 * reduced motion or without WebGL.
 */
const Glow = ({ cover, text, bloom }: GlowProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // Read by the animation each frame, so typing doesn't restart it.
    const textRef = useRef(text);

    useEffect(() => {
        textRef.current = text;
    }, [text]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;
        const gl = canvas && !reduceMotion && canvas.getContext('webgl');
        const program = gl && createProgram(gl);
        if (!canvas || !gl || !program) return;

        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        // One triangle that covers the whole canvas.
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 3, -1, -1, 3]),
            gl.STATIC_DRAW
        );
        const position = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

        const pointsUniform = gl.getUniformLocation(program, 'points');
        const warpUniform = gl.getUniformLocation(program, 'warp');
        const resolutionUniform = gl.getUniformLocation(program, 'resolution');
        const layoutFor = (seed: number) =>
            getCoverLayout(
                cover.colors.slice(0, MAX_POINTS / 2),
                createRandom(seed)
            );

        const current = layoutFor(cover.seed);
        let target = current;
        let targetText = '';
        const pointCount = current.points.length;
        const pointData = new Float32Array(pointCount * 2);

        gl.uniform1i(gl.getUniformLocation(program, 'count'), pointCount);
        gl.uniform3fv(
            gl.getUniformLocation(program, 'colors'),
            current.points.flatMap((point) => point.rgb.map((c) => c / 255))
        );

        let elapsed = 0;
        let last = 0;
        let frame = 0;
        let onScreen = true;
        let contextLost = false;

        const draw = (now: number) => {
            const delta = Math.min((now - last) / 1000, 0.1);
            last = now;
            elapsed += delta;

            const typed = textRef.current.trim().toLowerCase();
            if (typed !== targetText) {
                targetText = typed;
                target = layoutFor(typed ? seedFromText(typed) : cover.seed);
            }

            const amount = 1 - Math.exp(-delta / GLIDE_SECONDS);
            current.points.forEach((point, i) => {
                point.x = approach(point.x, target.points[i].x, amount);
                point.y = approach(point.y, target.points[i].y, amount);
                pointData[i * 2] =
                    point.x + Math.sin(elapsed * 0.13 + i * 1.7) * DRIFT;
                pointData[i * 2 + 1] =
                    point.y + Math.cos(elapsed * 0.11 + i * 2.3) * DRIFT;
            });
            current.warpX = approach(current.warpX, target.warpX, amount);
            current.warpY = approach(current.warpY, target.warpY, amount);
            current.phaseX = approachAngle(
                current.phaseX,
                target.phaseX,
                amount
            );
            current.phaseY = approachAngle(
                current.phaseY,
                target.phaseY,
                amount
            );

            gl.uniform2fv(pointsUniform, pointData);
            gl.uniform4f(
                warpUniform,
                current.warpX,
                current.warpY,
                current.phaseX + elapsed * 0.07,
                current.phaseY + elapsed * 0.05
            );
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            canvas.dataset.ready = '';
            frame = requestAnimationFrame(draw);
        };

        // Only animate while someone can see it.
        const pause = () => {
            cancelAnimationFrame(frame);
            frame = 0;
        };
        const resume = () => {
            if (frame || !onScreen || document.hidden || contextLost) return;
            last = performance.now();
            frame = requestAnimationFrame(draw);
        };

        const resize = () => {
            // offsetWidth ignores the bloom's scale, unlike getBoundingClientRect.
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
        };
        const onContextLost = () => {
            contextLost = true;
            pause();
            delete canvas.dataset.ready;
        };
        const onVisibilityChange = () => (document.hidden ? pause() : resume());

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);
        const intersectionObserver = new IntersectionObserver(([entry]) => {
            onScreen = entry.isIntersecting;
            if (onScreen) {
                resume();
            } else {
                pause();
            }
        });
        intersectionObserver.observe(canvas);
        document.addEventListener('visibilitychange', onVisibilityChange);
        canvas.addEventListener('webglcontextlost', onContextLost);
        resize();
        resume();

        return () => {
            pause();
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            document.removeEventListener(
                'visibilitychange',
                onVisibilityChange
            );
            canvas.removeEventListener('webglcontextlost', onContextLost);
        };
    }, [cover]);

    return (
        <div
            className={styles.glow}
            data-bloom={bloom || undefined}
            aria-hidden
        >
            <div className={styles.glowFade}>
                {/* A plain img: it has to line up exactly with the canvas. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/glow.jpg" alt="" className={styles.glowLayer} />
                <canvas
                    ref={canvasRef}
                    className={`${styles.glowLayer} ${styles.glowCanvas}`}
                />
            </div>
        </div>
    );
};

export { Glow };
