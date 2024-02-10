import { useEffect, useState } from 'react';

import { traffics } from '#utils/data/charts';

import styles from './traffic.module.scss';

export default function Traffic () {
	const [localTraffic, setLocalTraffic] = useState(traffics.map((v) => ({ ...v, value: 40 })));

	useEffect(() => {
		setTimeout(() => setLocalTraffic(traffics), 1000);
	}, []);

	return (
		<div className={styles.traffic}>
			<h3>Traffic by Website</h3>
			<div className={styles.charts}>
				<div className={styles.services}>
					{
						localTraffic.map(({ service }, i) => (
							<p key={i}>{service}</p>
						))
					}
				</div>
				<div className={styles.bar}>
					{
						localTraffic.map(({ value }, i) => (
							<div style={{ width: `${value}%` }} key={i}><span /><span /><span /></div>
						))
					}
				</div>
			</div>
		</div>
	);
}
