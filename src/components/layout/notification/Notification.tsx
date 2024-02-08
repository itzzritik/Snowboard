import { Icon } from '#components/base/Icon';
import { notifications } from '#utils/data/sidebar';

import styles from './notification.module.scss';

export default function Notification () {
	return (
		<div className={styles.notification}>
			<h3>Notifications</h3>
			<div className={styles.content}>
				{
					notifications.map((data, i) => (
						<div className={styles.card} key={i}>
							<div className={styles.icon}>
								<Icon code={data.icon} size={14} />
							</div>
							<div className={styles.desc}>
								<h3>{data.title}</h3>
								<p>{data.time}</p>
							</div>
						</div>
					))
				}
			</div>
		</div>
	);
}
