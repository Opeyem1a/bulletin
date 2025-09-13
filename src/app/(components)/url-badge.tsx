import { CSSProperties, ReactNode } from 'react';

interface UrlBadgeProps {
    children: ReactNode;
    url: string;
    variant: UrlBadgeVariant;
}

type UrlBadgeVariant = keyof typeof URL_BADGE_VARIANTS;

const URL_BADGE_VARIANTS = {
    site: {
        anchorStyles: { color: '#F4F1ED', textDecoration: 'none' },
        spanStyles: {
            padding: '4px 8px',
            backgroundColor: '#050505',
            borderRadius: '8px',
        },
    },
    article: {
        anchorStyles: { color: '#F4F1ED', textDecoration: 'none' },
        spanStyles: {
            padding: '4px 8px',
            backgroundColor: '#185B6A',
            borderRadius: '8px',
        },
    },
    /**
     * @deprecated - Use "media" instead
     */
    music: {
        anchorStyles: { color: '#F4F1ED', textDecoration: 'none' },
        spanStyles: {
            padding: '4px 8px',
            backgroundColor: '#2D81FF',
            borderRadius: '8px',
        },
    },
    media: {
        anchorStyles: { color: '#F4F1ED', textDecoration: 'none' },
        spanStyles: {
            padding: '4px 8px',
            backgroundColor: '#2D81FF',
            borderRadius: '8px',
        },
    },
} satisfies Record<string, Record<string, CSSProperties>>;

const UrlBadge = ({ url, children, variant }: UrlBadgeProps) => {
    return (
        <a
            href={url}
            target="_blank"
            style={URL_BADGE_VARIANTS[variant].anchorStyles}
        >
            <span style={URL_BADGE_VARIANTS[variant].spanStyles}>
                {children}
            </span>
        </a>
    );
};

export { UrlBadge };
export type { UrlBadgeVariant };
