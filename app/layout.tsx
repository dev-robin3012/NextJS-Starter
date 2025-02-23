import '@/styles/index.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import Footer from './_layout/footer';
import AppHeader from './_layout/header';
import RootProvider from './provider';

const inter = Inter({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'NextJS Project Starter',
  description: 'Generated by create-next-app and tailwind',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootProvider>
          <AppHeader />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
