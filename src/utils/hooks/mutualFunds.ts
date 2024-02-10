import { useEffect, useState } from 'react';

const currentYear = new Date().getFullYear();
const toDate = (dateString: string) => {
	return new Date(`${dateString.split('-').reverse().join('-')}`);
};
const updateYear = (date: Date) => {
	date.setFullYear(currentYear - 1);
	return date;
};
const groupDataByYear = (data: TMutualFunds[]) => {
	const thisYear = data.filter((v) => v.date.getFullYear() === currentYear - 1)
		.sort((a, b) => a.date.getTime() - b.date.getTime())
		.map((v) => ({ ...v, date: v.date }));

	const lastYear = data.filter((v) => v.date.getFullYear() === currentYear - 2)
		.sort((a, b) => a.date.getTime() - b.date.getTime())
		.map((v) => ({ ...v, date: updateYear(v.date) }));

	const merged = [...thisYear, ...lastYear].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
	return { thisYear, lastYear, merged };
};

export const useMutualFunds = () => {
	const [data, setData] = useState<TMutualFunds[]>([]);
	const [thisYear, setThisYear] = useState<TMutualFunds[]>([]);
	const [lastYear, setLastYear] = useState<TMutualFunds[]>([]);
	const [merged, setMerged] = useState<TMutualFunds[]>([]);

	useEffect(() => {
		fetch('https://api.mfapi.in/mf/122640')
			.then((req) => req.json())
			.then((res) => {
				const updatedData = res?.data?.map((mf: TMutualFundsString) => ({ ...mf, date: toDate(mf.date) }));
				const groupData = groupDataByYear(updatedData);

				setThisYear(groupData.thisYear);
				setLastYear(groupData.lastYear);
				setMerged(groupData.merged);
				setData(updatedData);
			});
	}, []);

	return {
		total: data,
		merged,
		thisYear,
		lastYear,
	};
};

type TMutualFunds = {
	date: Date,
	nav: string,
}

type TMutualFundsString = {
	date: string,
	nav: string,
}
