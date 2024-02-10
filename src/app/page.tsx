'use client';
import { useState } from 'react';

import clsx from 'clsx';

import { Icon } from '#components/base/Icon';
import Trending from '#components/base/Trending';
import MutualFundsChart from '#components/charts/MutualFundsChart';
import Traffic from '#components/charts/Traffic';
import Activities from '#components/layout/activities/Activities';
import Contacts from '#components/layout/contacts/Contacts';
import Header from '#components/layout/header/Header';
import Navigation from '#components/layout/navigation/Navigation';
import Notification from '#components/layout/notification/Notification';
import { Trends } from '#utils/data/charts';
import { dashboards } from '#utils/data/nav';

import styles from './page.module.scss';

export default function Home () {
	const [activePage, setActivePage] = useState(dashboards[0].label);
	const [navOpen, setNavOpen] = useState(true);
	const [sidebarOpen, setSideOpen] = useState(true);

	return (
		<main className={clsx(styles.main, navOpen && styles.navOpen, sidebarOpen && styles.sidebarOpen)}>
			<Navigation className={styles.nav} active={activePage} setActive={setActivePage} />
			<div className={styles.content}>
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
							Trends.map((trend, i) => <Trending key={i} {...trend} />)
						}
					</div>
					<div className={styles.charts}>
						<div className={styles.mutualFundsChart}>
							<MutualFundsChart />
						</div>
						<div className={styles.traffic}>
							<Traffic />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.sidebar}>
				<Notification />
				<Activities />
				<Contacts />
			</div>
		</main>
	);
}
