interface EmojiProps {
    icon: keyof typeof EMOJIS;
}

type EmojiUnicodeEntity = `&#${number};`;

/**
 * @see https://www.compart.com/en/unicode/
 */
const EMOJIS = {
    '🌐': '&#127760;',
    '🎵': '&#127925;',
    '📎': '&#128206;',
    '👀': '&#128064;',
} satisfies Record<string, EmojiUnicodeEntity>;

/**
 * Ensures that emojis are included in the final built HTML as unicode entities and not as raw symbols.
 * Google App Scripts doesn't play nice with 🌐, but can send &#127760; just fine.
 */
const Emoji = ({ icon }: EmojiProps) => {
    return (
        <span
            dangerouslySetInnerHTML={{
                __html: EMOJIS[icon],
            }}
        />
    );
};

export { Emoji };
