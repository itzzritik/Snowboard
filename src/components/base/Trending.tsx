import { MouseEvent, useEffect, useState } from 'react';

import FlipNumbers from 'react-flip-numbers';

import { Icon } from './Icon';
import styles from './trending.module.scss';

const digitWidth = 20;
export default function Trending ({ title, value, percent }: TTrending) {
	const [animValue, setAnimValue] = useState('0000');

	const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;

		const digit = Math.abs(Math.trunc(x / digitWidth));
		setAnimValue(value.slice(0, digit) + '0' + value.slice(digit + 1));
	};
	const onMouseLeave = () => {
		setAnimValue(value);
	};

	useEffect(() => {
		setTimeout(() => setAnimValue(value), 1000);
	}, [value]);

	return (
		<div className={styles.trending}>
			<h3>{title}</h3>
			<div className={styles.valueWrapper}>
				<div onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
					<FlipNumbers
						height={30}
						width={digitWidth}
						color='#1c1c1c'
						play
						perspective={400}
						numbers={animValue}
					/>
				</div>
				<p>{percent > 0 ? '+' : ''}{percent}%</p>
				<Icon code={percent > 0 ? 'e098' : 'e097'} type='solid' size={12} />
			</div>
		</div>
	);
}

type TTrending = {
	title: string,
	value: string,
	percent: number,
}
