import { ReactNode } from 'react';

import { inter } from '#utils/font';

import './globals.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Snow Dashboard',
	description: 'Snow Dashboard clone created by Ritik Srivastava originally by https://snowui.framer.website',
};

export default function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='en' data-theme-scheme='system' suppressHydrationWarning>
			<body className={inter.variable} suppressHydrationWarning>
				{children}
			</body>
		</html>
	);
}
