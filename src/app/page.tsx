import { CSSProperties } from 'react';
import { NAME, SIGNUP_COVER } from '@/app/(config)/constants';
import {
    COLORS,
    DARK_COLORS,
    DARK_MODE_CSS,
    FONT_STACK,
    SECTION_COLORS,
} from '@/app/(config)/theme';
import { getLatestSentEdition } from '@/app/(email-content)/editions';
import { SampleEdition } from '@/app/(signup)/sample-edition';
import { Signup } from '@/app/(signup)/signup';
import styles from '@/app/(signup)/signup.module.css';

const toCustomProperties = (colors: Record<string, string>) =>
    Object.entries(colors)
        .map(([token, value]) => `--${token}: ${value};`)
        .join(' ');

/**
 * The page takes its colours from theme.ts as custom properties. The sample
 * edition keeps the email's own dark-mode classes and responsive padding.
 *
 * Coral is too light to read on the page colour, so the headline uses a deeper
 * one in light mode.
 */
const PAGE_CSS = `
:root { color-scheme: light dark; ${toCustomProperties(COLORS)} --headline-accent: #E5504B; }
body { margin: 0; background: var(--page); font-family: ${FONT_STACK}; -webkit-font-smoothing: antialiased; }
@media (prefers-color-scheme: dark) {
    :root { ${toCustomProperties(DARK_COLORS)} --headline-accent: var(--coral); }
${DARK_MODE_CSS}
}
@media (max-width: 620px) {
    .px { padding-left: 22px !important; padding-right: 22px !important; }
}
`;

const PARTS = [
    { label: 'notes', color: SECTION_COLORS.notes },
    { label: 'a changed mind', color: SECTION_COLORS['changed-mind'] },
    { label: 'things I found', color: SECTION_COLORS.found },
    { label: 'one question', color: 'var(--coral)' },
];

/** Staggers the entrance: each step starts a little after the one before. */
const order = (step: number) => ({ '--order': step }) as CSSProperties;

export default function SignupPage() {
    const edition = getLatestSentEdition();

    return (
        <main className={styles.page}>
            <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
            <p
                className={`${styles.wordmark} ${styles.enter}`}
                style={order(0)}
            >
                {NAME}
            </p>
            <div className={styles.intro}>
                <h1
                    className={`${styles.headline} ${styles.enter}`}
                    style={order(1)}
                >
                    Big thoughts,
                    <br />
                    <span className={styles.accent}>small cool things.</span>
                </h1>
                <p
                    className={`${styles.pitch} ${styles.enter}`}
                    style={order(2)}
                >
                    A letter I write every so often to work through the big
                    thoughts, see past the dread, and choose to get excited
                    about the small cool things.
                </p>
                <ul
                    className={`${styles.parts} ${styles.enter}`}
                    style={order(3)}
                >
                    {PARTS.map(({ label, color }) => (
                        <li
                            key={label}
                            className={styles.part}
                            style={{ '--bar': color } as CSSProperties}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
            <Signup cover={SIGNUP_COVER}>
                {edition && <SampleEdition edition={edition} />}
            </Signup>
        </main>
    );
}
