import {CSSProperties, ReactNode} from "react";

interface UrlBadgeProps {
    children: ReactNode;
    url: string;
    variant: UrlBadgeVariant;
}

type UrlBadgeVariant = keyof typeof URL_BADGE_VARIANTS

const URL_BADGE_VARIANTS = {
    primary: {
        anchorStyles: {color: "#F4F1ED", textDecoration: "none"},
        spanStyles: {padding: "4px 8px", backgroundColor: "#185B6A", borderRadius: "8px"},
    },
    secondary: {
        anchorStyles: {color: "#F4F1ED", textDecoration: "none"},
        spanStyles: {padding: "4px 8px", backgroundColor: "#185B6A", borderRadius: "8px"},
    },
} satisfies Record<string, Record<string, CSSProperties>>

const UrlBadge = ({ url, children, variant }: UrlBadgeProps) => {
    return (
        <a href={url} target="_blank" style={URL_BADGE_VARIANTS[variant].anchorStyles}>
            <span style={URL_BADGE_VARIANTS[variant].spanStyles}>{children}</span>
        </a>
    )
}

export { UrlBadge }
export type { UrlBadgeVariant }