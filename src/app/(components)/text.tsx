import { ReactNode } from 'react';
import {
    COLORS,
    FONT_STACK,
    highlightStroke,
    textColorClass,
} from '@/app/(config)/theme';

interface TextProps {
    children: ReactNode;
}

const Heading = ({ children }: TextProps) => {
    return (
        <h2
            className={textColorClass('ink')}
            style={{
                margin: 0,
                fontFamily: FONT_STACK,
                fontSize: '24px',
                lineHeight: '31px',
                fontWeight: 700,
                letterSpacing: '-0.5px',
                color: COLORS.ink,
            }}
        >
            {children}
        </h2>
    );
};

const Paragraph = ({ children }: TextProps) => {
    return (
        <p
            className={textColorClass('body')}
            style={{
                margin: '12px 0 0',
                fontFamily: FONT_STACK,
                fontSize: '17px',
                lineHeight: '28px',
                fontWeight: 500,
                letterSpacing: '-0.1px',
                color: COLORS.body,
            }}
        >
            {children}
        </p>
    );
};

/** For how a word sounds when read aloud. Use Highlight for what matters. */
const Em = ({ children }: TextProps) => {
    return <em>{children}</em>;
};

interface LinkProps {
    href: string;
    children: ReactNode;
}

/**
 * Every link gets the coral squiggle, and nothing else in the email is
 * underlined. Inline it's a straight coral border, which Gmail keeps; the
 * `link` class upgrades it to a wavy underline where that's supported (see
 * render-email.tsx). Outlook on Windows ignores borders on inline text, so it
 * gets a plain underline instead.
 */
const Link = ({ href, children }: LinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className={`link ${textColorClass('ink')}`}
            style={{
                color: COLORS.ink,
                textDecoration: 'none',
                borderBottom: `2px solid ${COLORS.coral}`,
            }}
        >
            {children}
        </a>
    );
};

/**
 * The homepage's highlighter, for the phrase that matters most. It's a
 * gradient, so render-email.tsx swaps it for dark mode and gives Outlook on
 * Windows, which can't draw gradients, a flat highlight instead.
 */
const Highlight = ({ children }: TextProps) => {
    return (
        <span
            className="highlight"
            style={{
                backgroundImage: highlightStroke(COLORS.highlight),
                padding: '0 2px',
                // Pad every line of a highlight that wraps, not just the ends.
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone',
            }}
        >
            {children}
        </span>
    );
};

const Struck = ({ children }: TextProps) => {
    return (
        <s
            className={textColorClass('struck')}
            style={{ color: COLORS.struck }}
        >
            {children}
        </s>
    );
};

/**
 * A quieter aside, like "(sorry)". Write the parentheses yourself. Muted rather
 * than coral: coral text this small is too faint on the page colour.
 */
const Aside = ({ children }: TextProps) => {
    return (
        <span
            className={textColorClass('muted')}
            style={{ fontSize: '14px', color: COLORS.muted }}
        >
            {children}
        </span>
    );
};

export { Heading, Paragraph, Em, Link, Highlight, Struck, Aside };
