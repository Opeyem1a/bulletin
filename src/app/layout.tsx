import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Email template',
    description: 'Email template page for live previewing designs',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
