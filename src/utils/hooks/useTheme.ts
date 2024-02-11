import { useEffect, useState } from 'react';

const schemes = ['system', 'light', 'dark'] as const;
type TSchemes = typeof schemes[number]

export const schemeIcon = {
	system: 'f390',
	light: 'e28f',
	dark: 'f755',
} as const;

export const useTheme = () => {
	const [themeScheme, setThemeScheme] = useState<TSchemes>(schemes[0]);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const setTheme = (value: TSchemes) => {
		if (schemes.includes(value))
			document.documentElement.setAttribute('data-theme-scheme', value);
	};
	const toggleTheme = () => {
		const currentIndex = schemes.indexOf(themeScheme);
		const nextIndex = (currentIndex + 1) % schemes.length;
		setTheme(schemes[nextIndex]);
	};

	useEffect(() => {
		const currentScheme = document.documentElement.getAttribute('data-theme-scheme')as TSchemes;
		if (schemes.includes(currentScheme)) setThemeScheme(currentScheme);

		const observer = new MutationObserver((mutationsList) => {
			const schemeAttr = mutationsList.find((mutation) => mutation.attributeName === 'data-theme-scheme');

			if (schemeAttr) {
				const updatedValue = (document.documentElement.getAttribute('data-theme-scheme') ?? schemes[0]) as TSchemes;
				if (schemes.includes(updatedValue)) setThemeScheme(updatedValue);
			}
		});
		observer.observe(document.documentElement, { attributes: true });

		return () => { observer.disconnect(); };
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

			const handleColorSchemeChange = (event: MediaQueryListEvent) => {
				setIsDarkMode(themeScheme === 'system' ? event.matches : themeScheme === 'dark');
			};
			setIsDarkMode(themeScheme === 'system' ? darkModeMediaQuery.matches : themeScheme === 'dark');
			darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);

			return () => {
				darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange);
			};
		}
	}, [themeScheme]);

	return { schemeIcon: schemeIcon[themeScheme], themeScheme, isDarkMode, setTheme, toggleTheme };
};
