import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	TimeScale,
	TimeSeriesScale,
	Ticks,
} from 'chart.js';
import 'chartjs-adapter-moment';
import moment from 'moment';
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
	TimeScale,
	TimeSeriesScale,
);
let current = '';
export default function MutualFundsChart () {
	const { merged, thisYear, lastYear } = useMutualFunds();
	const { isDarkMode } = useTheme();

	const chartData = {
		labels: merged.map((point) => point.date),
		datasets: [
			{
				label: 'This Year',
				data: thisYear.map((point) => ({ x: point.date, y: point.nav })),
				fill: false,
				borderColor: isDarkMode ? '#C6C7F8' : '#1C1C1C',
				tension: 0.4,
				borderWidth: 2,
				pointRadius: 0,
			},
			{
				label: 'Last Year',
				data: lastYear.map((point) => ({ x: point.date, y: point.nav })),
				fill: false,
				borderColor: '#A8C5DA',
				tension: 0.4,
				borderWidth: 1,
				pointRadius: 0,
				borderDash: [8, 2],
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
			tooltip: {
				callbacks: {
					title: function (context: { dataset: { label: number; }; }[]) {
						return context?.[0].dataset.label;
					},
					label: function (context: { parsed: { x: number; y: number; }; }) {
						const { x, y } = context.parsed;

						const date = moment(x).format('DD MMM');
						return ` ${Number(y).toFixed(2)} on ${date}`;
					},
				},
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
				type: 'timeseries',
				time: {
					unit: 'month',
					parser: (value: Date) => moment(value, 'YYYY-MM'),
					displayFormats: {
						month: 'MMM',
					},
				},
				ticks: {
					autoSkip: true,
					callback: function (value: moment.MomentInput) {
						const mon = moment(value).format('MMM');
						const val = current === mon ? null : mon;
						current = mon;
						return val;
					},
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
