import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { trafficsByLocation } from '#utils/data/charts';
import { useTheme } from '#utils/hooks/useTheme';

import styles from './trafficByLocation.module.scss';

ChartJS.register(
	CategoryScale,
	LinearScale,
	ArcElement,
	Title,
	Tooltip,
	Legend,
);

export default function TrafficByLocation ({ resizing } : {resizing: boolean}) {
	const { isDarkMode } = useTheme();
	const colorList = trafficsByLocation.map((v) =>
		(isDarkMode ? v.colorDark : v.colorLight),
	);

	const data = {
		labels: trafficsByLocation.map((v) => v.location),
		datasets: [
			{
				data: trafficsByLocation.map((v) => v.traffic),
				backgroundColor: colorList,
				borderWidth: 3,
				borderColor: isDarkMode ? '#272727' : '#F7F9FB',
				borderRadius: 6,
			},
		],
	};

	const options = {
		layout: {
			padding: { left: 5, right: 5, top: 5, bottom: 5 },
		},
		cutoutPercentage: 50,
		responsive: true,
		hoverOffset: 10,
		maintainAspectRatio: true,
		animation: {
			animateScale: true,
			animateRotate: true,
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
	};

	return (
		<div className={styles.trafficByLocation}>
			<p>Traffic by Location</p>
			{
				!resizing &&
				<div className={styles.chartWrapper}>
					<div className={styles.donut}>
						<Doughnut data={data} options={options} />
					</div>
					<div className={styles.legend}>
						{trafficsByLocation.map(
							({ location, traffic, colorLight, colorDark }, i) => (
								<div className={styles.legendItem} key={i}>
									<span
										style={{
											background: isDarkMode
												? colorDark
												: colorLight,
										}}
									/>
									<p className={styles.location}>{location}</p>
									<p className={styles.traffic}>{traffic}%</p>
								</div>
							),
						)}
					</div>
				</div>
			}
		</div>
	);
}
