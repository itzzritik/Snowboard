/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { TBar } from '#utils/data/charts';
import { useTheme } from '#utils/hooks/useTheme';

import styles from './trafficByDevice.module.scss';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export default function TrafficByDevice ({ resizing, title, data } : TTrafficByDevice) {
	const { isDarkMode } = useTheme();
	const colorList = data.map((v) => (isDarkMode ? v.colorDark : v.colorLight));
	const chartData = {
		labels: data.map((d) => d.x),
		datasets: [
			{
				label: title,
				data: data.map((d) => d.y / 1000),
				backgroundColor: colorList,
				borderWidth: 0,
				barThickness: 32,
			},
		],
	};
	const options = {
		indexAxis: 'x',
		elements: {
			bar: {
				borderWidth: 0,
				borderRadius: 8,
				borderSkipped: false,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
		scales: {
			x: {
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
			},
			y: {
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
			},
		},
	};

	return (
		<div className={styles.trafficByDevice}>
			<p>{title}</p>
			{!resizing && <Bar data={chartData} options={options} />}
		</div>
	);
}

type TTrafficByDevice = {
	resizing:boolean
	title: string,
	data: TBar[]
}
