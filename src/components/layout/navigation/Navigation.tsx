'use client';

import clsx from 'clsx';

import { useAvatar } from '#utils/data/userData';

import User from '../User';

import styles from './navigation.module.scss';

export default function Navigation ({ className }: {className?: string}) {
	const avatar = useAvatar(24);

	return (
		<div className={clsx(styles.navigation, className)}>
			<User avatar={avatar} name='ByeWind' />
		</div>
	);
}
