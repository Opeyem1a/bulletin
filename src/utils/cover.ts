import { encode } from 'jpeg-js';
import { createRandom, getCoverLayout } from '@/utils/cover-layout';
import { Edition } from '@/utils/types';

const WIDTH = 1200;
const HEIGHT = 600;

/**
 * Draws a soft gradient as a 1200×600 JPEG: coloured points blended by inverse
 * distance, gently warped so the colour edges curve, with a little grain. The
 * signup page's glow draws the same gradient in a shader
 * (src/app/(signup)/glow.tsx), so keep the two in step.
 */
function generateCover({ seed, colors }: Edition['cover']): Buffer {
    const random = createRandom(seed);
    const { points, warpX, warpY, phaseX, phaseY } = getCoverLayout(
        colors,
        random
    );

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
