import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'swiper/css';
import 'swiper/css/effect-fade';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'CarpTravel',
  description: 'Website for CarpTravel travel agency',
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-dark.png',
        href: '/images/icon-dark.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon-light.png',
        href: '/images/icon-light.png',
      },
    ],
  },
  openGraph: {
    type: 'website',
    url: `${baseUrl}`,
    title: 'CarpTravel',
    description: 'Website for CarpTravel travel agency',
    siteName: 'CarpTravel',
    images: [
      {
        url: '/ogp/og-image.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
