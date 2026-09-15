import { ReactNode } from 'react';

/**
 * Hand-drawn marks over words in the signup paragraph. The drawings are
 * decorative, so screen readers only get the words.
 */

interface MarkProps {
    children: ReactNode;
    /** Punctuation right after the mark, kept on its line so it can't wrap alone. */
    then?: string;
}

const keepWith = (mark: ReactNode, then?: string) =>
    then ? (
        <span className="nowrap">
            {mark}
            {then}
        </span>
    ) : (
        mark
    );

const Circled = ({ children, then }: MarkProps) => {
    return keepWith(
        <span className="mark circled">
            {children}
            <svg
                className="drawing circle"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                aria-hidden
            >
                <path d="M20 34 C 18 12, 120 2, 178 16 C 206 24, 196 50, 120 55 C 60 59, 8 52, 12 32 C 15 20, 40 12, 64 9" />
            </svg>
        </span>,
        then
    );
};

const Squiggled = ({ children, then }: MarkProps) => {
    return keepWith(
        <span className="mark">
            {children}
            <svg
                className="drawing squiggle"
                viewBox="0 0 120 12"
                preserveAspectRatio="none"
                aria-hidden
            >
                <path d="M1 7 C 6 1, 10 1, 15 6 S 23 12, 29 6 S 38 0, 44 6 S 52 12, 58 6 S 67 1, 72 6 S 80 11, 86 6 S 95 1, 100 6 S 108 11, 113 6 S 118 3, 119 4" />
            </svg>
        </span>,
        then
    );
};

interface NotedProps extends MarkProps {
    note: string;
}

/** A scribbled note, raised just after the words. Read as an aside. */
const Noted = ({ children, note, then }: NotedProps) => {
    return keepWith(
        <span className="mark noted">
            {children}
            <span className="note"> {note}</span>
        </span>,
        then
    );
};

/** A highlighter stroke, in the accent colour. */
const Highlighted = ({ children, then }: MarkProps) => {
    return keepWith(<span className="highlight">{children}</span>, then);
};

const Struck = ({ children, then }: MarkProps) => {
    return keepWith(<span className="struck">{children}</span>, then);
};

/**
 * Makes the marks and the note wobble like hand-drawn animation ("line boil"): noise nudges
 * each stroke, and the noise is re-rolled a few times a second. signup.css
 * applies it only when reduced motion isn't requested. Render once per page.
 */
const ScribbleFilter = () => {
    return (
        <svg className="scribble-filter" aria-hidden focusable="false">
            <filter id="scribble" x="-20%" y="-50%" width="140%" height="200%">
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.015"
                    numOctaves={1}
                    seed="1"
                >
                    <animate
                        attributeName="seed"
                        values="1;7;13;21"
                        dur="0.5s"
                        calcMode="discrete"
                        repeatCount="indefinite"
                    />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" scale="4" />
            </filter>
        </svg>
    );
};

export { Circled, Squiggled, Noted, Highlighted, Struck, ScribbleFilter };
