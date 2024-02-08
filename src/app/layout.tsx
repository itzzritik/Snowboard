import { ReactNode } from 'react';

import { Inter } from 'next/font/google';

import './globals.scss';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Snow Dashboard',
	description: 'Snow Dashboard clone created by Ritik Srivastava originally by https://snowui.framer.website',
};

export default function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='en' data-theme-scheme='system'>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
