import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CaribeCraft | Custom Millwork for Island Living',
  description:
    'CaribeCraft specializes in custom millwork including cabinetry, hotel bars, retail displays, and architectural millwork in St. Thomas, USVI.',
  keywords: [
    'custom millwork',
    'cabinetry',
    'St. Thomas',
    'USVI',
    'hotel bars',
    'retail displays',
    'built-ins',
  ],
  authors: [{ name: 'CaribeCraft' }],
  creator: 'CaribeCraft',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://caribecraft.com',
    title: 'CaribeCraft | Custom Millwork for Island Living',
    description:
      'Premium custom millwork, cabinetry, and architectural designs for homes and hospitality in USVI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaribeCraft | Custom Millwork for Island Living',
    description:
      'Premium custom millwork, cabinetry, and architectural designs for homes and hospitality in USVI.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
