import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const updateScreenWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', updateScreenWidth);

		return () => {
			window.removeEventListener('resize', updateScreenWidth);
		};
	}, []);

	return screenWidth;
};
