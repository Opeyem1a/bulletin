import { CSSProperties, ReactNode } from 'react';

interface CalloutProps {
    children: ReactNode;
    variant: keyof typeof CALLOUT_VARIANTS;
}

const CALLOUT_VARIANTS = {
    base: {
        backgroundColor: '#FFFFFF',
        color: '#185B6A',
        border: '2px solid #185B6A',
        fontWeight: 500,
    },
} satisfies Record<string, CSSProperties>;

const Callout = ({ children, variant }: CalloutProps) => {
    return (
        <div
            style={{
                borderRadius: '8px',
                padding: '16px 24px',
                margin: '16px 0',
                ...CALLOUT_VARIANTS[variant],
            }}
        >
            <p
                style={{
                    maxWidth: '32ch',
                    margin: '0',
                    fontSize: '16px',
                }}
            >
                {children}
            </p>
        </div>
    );
};

export { Callout };
