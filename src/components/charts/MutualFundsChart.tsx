import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { monthNames } from '#utils/data/charts';
import { useMutualFunds } from '#utils/hooks/mutualFunds';
import { useTheme } from '#utils/hooks/themeController';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

export default function MutualFundsChart () {
	const { thisYear, lastYear } = useMutualFunds();
	const { isDarkMode } = useTheme();

	const chartData = {
		labels: monthNames,
		datasets: [
			{
				label: 'This year',
				data: thisYear.map((point) => ({ x: point.date, y: point.nav })),
				fill: '+1',
				borderColor: isDarkMode ? '#C6C7F8' : '#1C1C1C',
				tension: 0.4,
				borderWidth: 1,
				pointRadius: 0,
			},
			{
				label: 'Last Year',
				data: lastYear.map((point) => ({ x: point.date, y: point.nav })),
				fill: '+1',
				borderColor: '#A8C5DA',
				tension: 0.4,
				borderWidth: 1,
				pointRadius: 0,
				borderDash: [5, 5],
			},
		],
	};

	const chartOptions = {
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

	return <Line data={chartData} options={chartOptions} />;
}
