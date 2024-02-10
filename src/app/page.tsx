'use client';
import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { Icon } from '#components/base/Icon';
import Trending from '#components/base/Trending';
import MutualFundsChart from '#components/charts/MutualFundsChart';
import TrafficByDevice from '#components/charts/TrafficByDevice';
import TrafficByLocation from '#components/charts/TrafficByLocation';
import TrafficByWeb from '#components/charts/TrafficByWeb';
import Activities from '#components/layout/activities/Activities';
import Contacts from '#components/layout/contacts/Contacts';
import Header from '#components/layout/header/Header';
import Navigation from '#components/layout/navigation/Navigation';
import Notification from '#components/layout/notification/Notification';
import { Trends, marketingSeoData, trafficsByDevice } from '#utils/data/charts';
import { dashboards } from '#utils/data/nav';
import { useIsResizing } from '#utils/hooks/useIsResizing';
import { useScreenWidth } from '#utils/hooks/useScreen';

import styles from './page.module.scss';

export default function Home () {
	const ref = useRef<HTMLDivElement>(null);
	const resizing = useIsResizing(ref);
	const screenWidth = useScreenWidth();
	const [activePage, setActivePage] = useState(dashboards[0].label);
	const [navOpen, setNavOpen] = useState(false);
	const [sidebarOpen, setSideOpen] = useState(false);

	useEffect(() => {
		setNavOpen(screenWidth > 970);
		setSideOpen(screenWidth > 970);
	}, [screenWidth]);

	return (
		<main className={clsx(styles.main, navOpen && styles.navOpen, sidebarOpen && styles.sidebarOpen)}>
			<Navigation className={styles.nav} active={activePage} setActive={setActivePage} />
			<div ref={ref} className={styles.content}>
				<Header activePage={activePage} toggleNav={() => setNavOpen((v) => !v)} toggleSidebar={() => setSideOpen((v) => !v)} />
				<div className={styles.pageBody}>
					<div className={styles.topBar}>
						<p>{activePage}</p>
						<div>
							Today
							<Icon code='f107' type='solid' size={12} />
						</div>
					</div>
					<div className={styles.trends}>
						{
							Trends.map((trend, i) =>
								<Trending key={i} {...trend} />,
							)
						}
					</div>
					<div className={styles.charts}>
						<div className={styles.mutualFundsChart}>
							<MutualFundsChart resizing={resizing} />
						</div>
						<div className={styles.traffic}>
							<TrafficByWeb />
						</div>
					</div>
					<div className={styles.barAndPie}>
						<TrafficByDevice resizing={resizing} title='Traffic by Device' data={trafficsByDevice} />
						<TrafficByLocation resizing={resizing} />
					</div>
					<div className={styles.marketing}>
						<TrafficByDevice resizing={resizing} title='Marketing & SEO' data={marketingSeoData} />
					</div>
				</div>
			</div>
			<div className={styles.sidebar}>
				<Notification />
				<Activities />
				<Contacts />
			</div>
			{
				screenWidth < 970 && (navOpen || sidebarOpen) &&
				<div className={styles.backdrop} onClick={() => {
					setNavOpen(false);
					setSideOpen(false);
				}}
				/>
			}

		</main>
	);
}
