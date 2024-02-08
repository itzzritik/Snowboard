/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { activities } from '#utils/data/sidebar';
import { useAvatar } from '#utils/data/userData';

import styles from './activities.module.scss';

const ActivityCard = ({ data }: {data: { title: string, time: string }}) => {
	const avatar = useAvatar(24);

	return (
		<div className={styles.card}>
			<div className={styles.avatar}>
				<img src={avatar} />
			</div>
			<div className={styles.desc}>
				<h3>{data.title}</h3>
				<p>{data.time}</p>
			</div>
		</div>
	);
};

export default function Activities () {
	return (
		<div className={styles.activities}>
			<h3>Activities</h3>
			<div className={styles.content}>
				{activities.map((data, i) => (
					<ActivityCard data={data} key={i} />
				))}
			</div>
		</div>
	);
}
