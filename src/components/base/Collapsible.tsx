import { useLayoutEffect, useState } from 'react';

import clsx from 'clsx';

import { TNavItem } from '#utils/data/nav';

import { Icon } from './Icon';
import styles from './collapsible.module.scss';

export default function Collapsible ({ active, setActive, data }: TCollapsible) {
	const [open, setOpen] = useState(false);

	const onHeadClick = () => {
		if (active === data?.label)
			setOpen((v) => !v);

		setActive?.(data?.label);
	};

	useLayoutEffect(() => {
		setOpen(active === data?.label || data?.subItems?.includes(active ?? ''));
	}, [active, data]);

	return (
		<div className={styles.collapsible}>
			<div className={clsx(styles.head, active === data?.label && styles.active, open && styles.open)} onClick={onHeadClick}>
				{data?.subItems?.length > 0 && <Icon className={styles.arrow} code='f105' type='solid' />}
				<Icon className={styles.icon} code={data?.icon} size={16} type={active === data?.label ? 'duotone' : 'light'} />
				<p>{data?.label}</p>
			</div>
			<div className={clsx(styles.expandWrapper, open && styles.expand)}>
				{
					open && data?.subItems?.map?.((subItem, i) => (
						<div className={clsx(styles.subItem, active === subItem && styles.subActive)} key={i} onClick={() => setActive?.(subItem)}>
							<p>{subItem}</p>
						</div>
					))
				}
			</div>
		</div>
	);
}

type TCollapsible = {
	active?: string,
	setActive?: (active: string) => void
	data: TNavItem
}
