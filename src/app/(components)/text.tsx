import { CSSProperties, ReactNode } from 'react';

interface TextProps {
    children: ReactNode;
    variant: keyof typeof TEXT_VARIANTS;
}

const TEXT_VARIANTS = {
    header: {
        fontSize: '16px',
        lineHeight: 1,
        fontWeight: 600,
        textDecoration: 'underline',
        color: '#185B6A',
    },
    base: {
        fontSize: '16px',
        lineHeight: 1.65,
        color: '#374151',
    },
    aside: {
        fontSize: '12px',
        lineHeight: 1.65,
        color: '#374151',
        opacity: 0.8,
    },
} satisfies Record<string, CSSProperties>;

const Text = ({ children, variant }: TextProps) => {
    return <p style={TEXT_VARIANTS[variant]}>{children}</p>;
};

const Aside = ({ children }: Omit<TextProps, 'variant'>) => {
    return (
        <span style={TEXT_VARIANTS['aside']}>
            <i>{children}</i>
        </span>
    );
};

export { Text, Aside };
