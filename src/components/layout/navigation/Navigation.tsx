'use client';

import { useState } from 'react';

import clsx from 'clsx';

import { dashboards, pages } from '#utils/data/nav';
import { useAvatar } from '#utils/data/userData';

import User from '../User';

import Favorite from './Favorite';
import NavList from './NavList';
import styles from './navigation.module.scss';

export default function Navigation ({ className }: {className?: string}) {
	const [active, setActive] = useState(dashboards[0].label);
	const avatar = useAvatar(24);

	return (
		<div className={clsx(styles.navigation, className)}>
			<User avatar={avatar} name='ByeWind' />
			<Favorite />
			<NavList title='Dashboards' active={active} setActive={setActive} data={dashboards} />
			<NavList title='Pages' active={active} setActive={setActive} data={pages} />
		</div>
	);
}
