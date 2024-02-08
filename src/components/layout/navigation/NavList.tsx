import Collapsible from '#components/base/Collapsible';
import { TNavItem } from '#utils/data/nav';

import styles from './navList.module.scss';

export default function NavList ({ active, setActive, title, data }: TNavList) {
	return (
		<div className={styles.navList}>
			<h2>{title}</h2>
			{
				data?.map((v, i) =>
					<Collapsible active={active} setActive={setActive} data={v} key={i} />,
				)
			}
		</div>
	);
}

type TNavList = {
	active?: string,
	setActive?: (active: string) => void,
	title: string,
	data: TNavItem[]
}
