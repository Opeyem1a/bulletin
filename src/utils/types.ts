import { ReactNode } from 'react';

type NonEmptyArray<T> = [T, ...T[]];

type HexColor = `#${string}`;

interface Edition {
    number: number;
    /** A few words under the masthead naming the mood of this edition. */
    vibe: string;
    /** 2–4 colours, drawn left to right as the gradient line under the masthead. */
    colors: NonEmptyArray<HexColor>;
    content: ReactNode;
}

export type { NonEmptyArray, HexColor, Edition };
