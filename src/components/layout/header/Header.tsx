import { Icon } from '#components/base/Icon';
import { useTheme } from '#utils/data/themeController';

import styles from './header.module.scss';

export default function Header ({ activePage }: {activePage?: string}) {
	const { schemeIcon, toggleTheme } = useTheme();
	return (
		<div className={styles.header}>
			<Icon code='f0db' size={14} />
			<Icon code='f005' size={14} />
			<p className={styles.page}>Dashboards</p>
			<p className={styles.separator}>/</p>
			<p className={styles.subPage}>{activePage}</p>
			<div className={styles.search} />
			<Icon code={schemeIcon} size={14} onClick={toggleTheme} />
			<Icon code='f1da' size={14} />
			<Icon code='f0f3' size={14} />
			<Icon code='f0db' size={14} />
		</div>
	);
}
