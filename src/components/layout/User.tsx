/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import styles from './user.module.scss';

export default function User ({ className, avatar, name }: IUser) {

	return (
		<div className={clsx(styles.user, className)}>
			<img src={avatar} alt='avatar' />
			<p>{name}</p>
		</div>
	);
}

type IUser = {
	className?: string
	avatar: string,
	name: string
}
