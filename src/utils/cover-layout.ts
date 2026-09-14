import { HexColor } from '@/utils/types';

type Rgb = [number, number, number];

interface CoverLayout {
    points: { x: number; y: number; rgb: Rgb }[];
    warpX: number;
    warpY: number;
    phaseX: number;
    phaseY: number;
}

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

function hexToRgb(hex: string): Rgb {
    const value = parseInt(hex.slice(1), 16);
    return [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
}

/**
 * Where a cover's coloured points sit and how its colour edges warp. Shared by
 * the JPEG cover and the animated glow on the signup page, so both draw the same
 * cover from the same seed. Takes the random source because the JPEG keeps
 * drawing from it for grain.
 */
function getCoverLayout(colors: HexColor[], random: () => number): CoverLayout {
    const rgbs = colors.map(hexToRgb);
    const points = Array.from(
        { length: Math.max(6, rgbs.length * 2) },
        (_, i) => ({
            x: random() * 1.3 - 0.15,
            y: random() * 1.3 - 0.15,
            rgb: rgbs[i % rgbs.length],
        })
    );
    return {
        points,
        warpX: 1.5 + random() * 2,
        warpY: 1.5 + random() * 2,
        phaseX: random() * 6.28,
        phaseY: random() * 6.28,
    };
}

export { createRandom, getCoverLayout };
export type { CoverLayout };
