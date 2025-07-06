import {CSSProperties, ReactNode} from "react";

interface TextProps {
    children: ReactNode
    variant: keyof typeof TEXT_VARIANTS
}

const TEXT_VARIANTS = {
    header: {
        fontSize: "16px",
        lineHeight: 1,
        fontWeight: 600,
        textDecoration: "underline",
        color: "#185B6A",
    },
    base: {
        fontSize: "16px",
        lineHeight: 1.65,
        color: "#374151",
    },
} satisfies Record<string, CSSProperties>

const Text = ({ children, variant }: TextProps) => {
    return (
        <p style={TEXT_VARIANTS[variant]}>
            {children}
        </p>
    )
}

export { Text }
