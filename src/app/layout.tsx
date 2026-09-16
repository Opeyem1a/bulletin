import type { Metadata } from 'next';
import { Caveat, Manrope } from 'next/font/google';
import { NAME } from '@/app/(config)/constants';

// Self-hosted at build, so the page makes no requests to Google.
const manrope = Manrope({
    subsets: ['latin'],
    weight: ['500', '700'],
    variable: '--font-manrope',
});
const caveat = Caveat({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-caveat',
});

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
        <html lang="en" className={`${manrope.variable} ${caveat.variable}`}>
            <body>{children}</body>
        </html>
    );
}
