import { useLayoutEffect, useState } from 'react';

export const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState<number>(980);

	useLayoutEffect(() => {
		if (typeof window !== 'undefined') {
			const updateScreenWidth = () => {
				setScreenWidth(window.innerWidth);
			};

			setScreenWidth(window.innerWidth);

			window.addEventListener('resize', updateScreenWidth);

			return () => {
				window.removeEventListener('resize', updateScreenWidth);
			};
		}
	}, []);

	return screenWidth;
};
