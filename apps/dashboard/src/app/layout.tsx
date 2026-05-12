import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'DEV.ECOM — Merchant Dashboard',
  description: 'Manage Shopify templates, orders, and downloads.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!publishableKey) {
    return (
      <html lang="en" className={inter.variable}>
        <body className="font-sans">{children}</body>
      </html>
    );
  }

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <ClerkProvider publishableKey={publishableKey}>{children}</ClerkProvider>
      </body>
    </html>
  );
}
