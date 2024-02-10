export const Trends = [
	{
		title: 'Views',
		value: '7265',
		percent: 11.02,
	},
	{
		title: 'Visits',
		value: '3671',
		percent: -0.03,
	},
	{
		title: 'New Users',
		value: '156',
		percent: 15.03,
	},
	{
		title: 'Active Users',
		value: '2318',
		percent: 6.08,
	},
];

export const monthNames = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

export const trafficsByWeb = [
	{ service: 'Google', value: 40 },
	{ service: 'YouTube', value: 80 },
	{ service: 'Instagram', value: 50 },
	{ service: 'Pinterest', value: 100 },
	{ service: 'Facebook', value: 30 },
	{ service: 'Twitter', value: 60 },
];

export const trafficsByDevice: TBar[] = [
	{
		x: 'Linux',
		y: 14391,
		colorLight: '#95A4FC',
		colorDark: '#95A4FC',
	},
	{
		x: 'Mac',
		y: 27575,
		colorLight: '#BAEDBD',
		colorDark: '#BAEDBD',
	},
	{
		x: 'iOS',
		y: 19381,
		colorLight: '#1C1C1C',
		colorDark: '#C6C7F8',
	},
	{
		x: 'Windows',
		y: 19381,
		colorLight: '#B1E3FF',
		colorDark: '#B1E3FF',
	},
	{
		x: 'Android',
		y: 10022,
		colorLight: '#A8C5DA',
		colorDark: '#A8C5DA',
	},
	{
		x: 'Others',
		y: 22996,
		colorLight: '#A1E3CB',
		colorDark: '#A1E3CB',
	},
];

export const trafficsByLocation = [
	{
		location: 'United States',
		traffic: 52.1,
		colorLight: '#1C1C1C',
		colorDark: '#C6C7F8',
	},
	{
		location: 'Mexico',
		traffic: 22.8,
		colorLight: '#B1E3FF',
		colorDark: '#B1E3FF',
	},
	{
		location: 'Canada',
		traffic: 13.9,
		colorLight: '#BAEDBD',
		colorDark: '#BAEDBD',
	},
	{
		location: 'Other',
		traffic: 11.2,
		colorLight: '#A8C5DA',
		colorDark: '#A8C5DA',
	},
];

export const marketingSeoData = [
	{
		x: 'Social',
		y: 13776,
		colorLight: '#95A4FC',
		colorDark: '#95A4FC',
	},
	{
		x: 'Ads',
		y: 27913,
		colorLight: '#BAEDBD',
		colorDark: '#BAEDBD',
	},
	{
		x: 'Content',
		y: 9320,
		colorLight: '#1C1C1C',
		colorDark: '#C6C7F8',
	},
	{
		x: 'SEO',
		y: 15205,
		colorLight: '#B1E3FF',
		colorDark: '#B1E3FF',
	},
	{
		x: 'Email',
		y: 5774,
		colorLight: '#A8C5DA',
		colorDark: '#A8C5DA',
	},
	{
		x: 'Influencer',
		y: 30999,
		colorLight: '#A1E3CB',
		colorDark: '#A1E3CB',
	},
	{
		x: 'Video',
		y: 17500,
		colorLight: '#95A4FC',
		colorDark: '#95A4FC',
	},
	{
		x: 'Web',
		y: 16316,
		colorLight: '#BAEDBD',
		colorDark: '#BAEDBD',
	},
	{
		x: 'Events',
		y: 21000,
		colorLight: '#1C1C1C',
		colorDark: '#C6C7F8',
	},
	{
		x: 'Digital',
		y: 23700,
		colorLight: '#B1E3FF',
		colorDark: '#B1E3FF',
	},
	{
		x: 'Other',
		y: 19711,
		colorLight: '#A8C5DA',
		colorDark: '#A8C5DA',
	},
];

export type TBar = {
	x: string;
	y: number;
	colorLight: string;
	colorDark: string;
};
