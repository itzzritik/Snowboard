import { useEffect, useState } from 'react';

const groupDataByYear = (data: TMutualFunds[]) => {
	const currentYear = new Date().getFullYear();
	const thisYear: TMutualFunds[] = [];
	const lastYear: TMutualFunds[] = [];

	data.forEach((item) => {
		const date = item.date.toString();
		const year = new Date(date.split('-').reverse().join('-')).getFullYear();
		if (year === currentYear) {
			thisYear.push({
				date: new Date(item.date),
				nav: item.nav,
			});
		} else if (year === currentYear - 1) {
			lastYear.push({
				date: new Date(date.replace('2023', '2024')),
				nav: item.nav,
			});
		}
	});

	return { thisYear, lastYear };
};

export const useMutualFunds = () => {
	const [data, setData] = useState<TMutualFunds[]>([]);

	useEffect(() => {
		fetch('https://api.mfapi.in/mf/122640')
			.then((req) => req.json())
			.then((res) => setData(res?.data?.map((mf: TMutualFunds) => {
				return mf;
			})));
	}, []);

	return { ...groupDataByYear(data) };
};

type TMutualFunds = {
	date: Date,
	nav: string,
}
