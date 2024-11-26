import { cn } from '@/shared/lib/utils';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import React from 'react';

import './globals.css';

const geistSans = localFont({
  src: '../shared/fonts/GeistVF.woff',
  variable: '--font-geist-sans',

  weight: '100 900',
});

const geistMono = localFont({
  src: '../shared/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'KSLT',
  description: 'Кыргызское сообщество любителей тенниса!',
  icons: [
    {
      rel: 'icon',
      url: '/kslt.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('antialiased', geistSans.variable, geistMono.variable)}>{children}</body>
    </html>
  );
}
