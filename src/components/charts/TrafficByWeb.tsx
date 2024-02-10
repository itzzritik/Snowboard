import { useEffect, useState } from 'react';

import { trafficsByWeb } from '#utils/data/charts';

import styles from './trafficByWeb.module.scss';

export default function TrafficByWeb () {
	const [localTraffic, setLocalTraffic] = useState(trafficsByWeb.map((v) => ({ ...v, value: 40 })));

	useEffect(() => {
		setTimeout(() => setLocalTraffic(trafficsByWeb), 1000);
	}, []);

	return (
		<div className={styles.trafficByWeb}>
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
