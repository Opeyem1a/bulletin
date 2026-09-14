import { ReactNode } from 'react';
import { COLORS, FONT_STACK, textColorClass } from '@/app/(config)/theme';

interface TextProps {
    children: ReactNode;
}

const Heading = ({ children }: TextProps) => {
    return (
        <h2
            className={textColorClass('ink')}
            style={{
                margin: '14px 0 0',
                fontFamily: FONT_STACK,
                fontSize: '22px',
                lineHeight: '28px',
                fontWeight: 600,
                letterSpacing: '-0.3px',
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
                fontSize: '16px',
                lineHeight: '26px',
                color: COLORS.body,
            }}
        >
            {children}
        </p>
    );
};

const Em = ({ children }: TextProps) => {
    return <em>{children}</em>;
};

interface LinkProps {
    href: string;
    children: ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
    return (
        <a
            href={href}
            target="_blank"
            className={textColorClass('ink')}
            style={{ color: COLORS.ink, textDecoration: 'underline' }}
        >
            {children}
        </a>
    );
};

export { Heading, Paragraph, Em, Link };
