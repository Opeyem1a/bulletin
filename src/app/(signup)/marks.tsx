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
        <span className="mark">
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
                viewBox="0 0 120 10"
                preserveAspectRatio="none"
                aria-hidden
            >
                <path d="M2 6 Q 8 1, 14 6 T 26 6 T 38 6 T 50 6 T 62 6 T 74 6 T 86 6 T 98 6 T 110 6 T 118 5" />
            </svg>
        </span>,
        then
    );
};

interface NotedProps extends MarkProps {
    note: string;
}

/** A scribbled note above the words (after them on phones). Read as an aside. */
const Noted = ({ children, note, then }: NotedProps) => {
    return keepWith(
        <span className="mark noted">
            {children}
            <span className="note"> {note}</span>
        </span>,
        then
    );
};

interface HighlightedProps extends MarkProps {
    /** Which section of the email, for its colour. */
    section: 'notes' | 'changed-mind' | 'found' | 'question';
}

/** A highlighter stroke, in the colour of one of the email's sections. */
const Highlighted = ({ children, section, then }: HighlightedProps) => {
    return keepWith(
        <span className={`highlight highlight-${section}`}>{children}</span>,
        then
    );
};

const Struck = ({ children, then }: MarkProps) => {
    return keepWith(<span className="struck">{children}</span>, then);
};

export { Circled, Squiggled, Noted, Highlighted, Struck };
