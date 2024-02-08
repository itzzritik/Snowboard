/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import styles from './user.module.scss';

export default function User ({ className, avatar, name }: TUser) {

	return (
		<div className={clsx(styles.user, className)}>
			<img src={avatar} alt='avatar' />
			<p>{name}</p>
		</div>
	);
}

type TUser = {
	className?: string
	avatar: string,
	name: string
}
