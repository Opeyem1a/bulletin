import { ReactNode } from 'react';

type NonEmptyArray<T> = [T, ...T[]];

type HexColor = `#${string}`;

interface Edition {
    number: number;
    /** A few words under the masthead naming the mood of this edition. */
    vibe: string;
    /** Drives the generated gradient cover. Change the seed to rearrange the same colours. */
    cover: { seed: number; colors: NonEmptyArray<HexColor> };
    /** The edition's one question, as it appears on WDYT. */
    question: { id: number; text: string; tags: string[] };
    content: ReactNode;
}

export type { NonEmptyArray, HexColor, Edition };
