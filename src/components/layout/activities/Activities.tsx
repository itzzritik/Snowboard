/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { activities } from '#utils/data/sidebar';
import { getAvatarUrl } from '#utils/hooks/userData';

import styles from './activities.module.scss';

const ActivityCard = ({ data, index }: {data: { title: string, time: string }, index: number}) => {
	const avatar = getAvatarUrl(24, index + 30);

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
					<ActivityCard data={data} index={i} key={i} />
				))}
			</div>
		</div>
	);
}
