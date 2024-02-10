import clsx from 'clsx';

import { dashboards, pages } from '#utils/data/nav';
import { useAvatar } from '#utils/hooks/userData';

import User from '../User';

import Favorite from './Favorite';
import NavList from './NavList';
import styles from './navigation.module.scss';

export default function Navigation ({ className, active, setActive }: TNavigation) {
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

type TNavigation = {
	className?: string,
	active?: string,
	setActive?: (active: string) => void,
}
