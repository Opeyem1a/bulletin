import { encode } from 'jpeg-js';
import { Edition } from '@/utils/types';

const WIDTH = 1200;
const HEIGHT = 600;

/**
 * Deterministic random numbers, so the same seed always draws the same cover.
 */
function createRandom(seed: number) {
    let state = seed >>> 0;
    return () => {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        return state / 4294967296;
    };
}

function hexToRgb(hex: string): [number, number, number] {
    const value = parseInt(hex.slice(1), 16);
    return [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
}

/**
 * Draws a soft gradient as a 1200×600 JPEG: coloured points blended by inverse
 * distance, gently warped so the colour edges curve, with a little grain.
 */
function generateCover({ seed, colors }: Edition['cover']): Buffer {
    const random = createRandom(seed);
    const rgbs = colors.map(hexToRgb);

    const points = Array.from(
        { length: Math.max(6, rgbs.length * 2) },
        (_, i) => ({
            x: random() * 1.3 - 0.15,
            y: random() * 1.3 - 0.15,
            rgb: rgbs[i % rgbs.length],
        })
    );
    const warpX = 1.5 + random() * 2;
    const warpY = 1.5 + random() * 2;
    const phaseX = random() * 6.28;
    const phaseY = random() * 6.28;

    const data = Buffer.alloc(WIDTH * HEIGHT * 4);
    for (let py = 0; py < HEIGHT; py++) {
        for (let px = 0; px < WIDTH; px++) {
            let u = px / WIDTH;
            let v = py / HEIGHT;
            u += Math.sin(v * warpY + phaseX) * 0.08;
            v += Math.sin(u * warpX + phaseY) * 0.12;

            let r = 0;
            let g = 0;
            let b = 0;
            let totalWeight = 0;
            for (const point of points) {
                const dx = (u - point.x) * 2;
                const dy = v - point.y;
                const weight = 1 / Math.pow(dx * dx + dy * dy + 0.002, 1.7);
                r += point.rgb[0] * weight;
                g += point.rgb[1] * weight;
                b += point.rgb[2] * weight;
                totalWeight += weight;
            }

            const grain = (random() - 0.5) * 12;
            const i = (py * WIDTH + px) * 4;
            data[i] = Math.max(0, Math.min(255, r / totalWeight + grain));
            data[i + 1] = Math.max(0, Math.min(255, g / totalWeight + grain));
            data[i + 2] = Math.max(0, Math.min(255, b / totalWeight + grain));
            data[i + 3] = 255;
        }
    }

    return encode({ data, width: WIDTH, height: HEIGHT }, 80).data;
}

export { generateCover };
