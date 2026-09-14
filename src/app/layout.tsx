import type { Metadata } from 'next';
import { NAME } from '@/app/(config)/constants';

export const metadata: Metadata = {
    title: NAME,
    description:
        'A letter every so often about big thoughts and small cool things.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/*
                  The same Manrope stylesheet the email loads, rather than
                  next/font, which renames the family: the sample edition's
                  inline styles ask for "Manrope" by name. This is the root
                  layout, so the lint rule's warning about loading a font on a
                  single page doesn't apply.
                */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
