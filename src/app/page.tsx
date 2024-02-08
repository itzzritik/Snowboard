import Navigation from '#components/layout/navigation/Navigation';
import Notification from '#components/layout/notification/Notification';

import styles from './page.module.scss';

export default function Home () {
	return (
		<main className={styles.main}>
			<Navigation className={styles.nav} />
			<div className={styles.content} />
			<div className={styles.sidebar}>
				<Notification />
			</div>
		</main>
	);
}
