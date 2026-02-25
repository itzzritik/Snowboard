import { RefObject, useEffect, useState } from 'react';

let timeOut: NodeJS.Timeout;
export const useIsResizing = (ref: RefObject<HTMLDivElement | null>) => {
	const [resizing, setResizing] = useState(false);

	const resizeHandler = () => {
		if (timeOut) clearTimeout(timeOut);
		setResizing(true);
		timeOut = setTimeout(() => setResizing(false), 200);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const observeTarget = ref.current;
			const resizeObserver = new ResizeObserver(resizeHandler);

			if (observeTarget) resizeObserver.observe(observeTarget);
			window.addEventListener('resize', resizeHandler);

			return () => {
				if (timeOut) clearTimeout(timeOut);
				if (observeTarget) resizeObserver.unobserve(observeTarget);
				window.removeEventListener('resize', resizeHandler);
			};
		}
	}, [ref]);

	return resizing;
};
