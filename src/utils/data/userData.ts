import { useEffect, useState } from 'react';

export const getAvatarUrl = (size: number) => encodeURI(`https://source.unsplash.com/random/${size}×${size}/?portrait`);

export const useAvatar = (size: number = 300) => {
	const [avatar, setAvatar] = useState<string>('');

	useEffect(() => {
		fetch(getAvatarUrl(size), { method: 'HEAD' })
			.then((response) => {
				const finalUrl = response.url ?? response.headers.get('location');
				console.log(finalUrl);
				setAvatar(finalUrl ?? '');
			})
			.catch((error) => console.error('Error:', error));
	}, [size]);

	return avatar;
};
