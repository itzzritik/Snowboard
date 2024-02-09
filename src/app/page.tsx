'use client';
import { useState } from 'react';

import clsx from 'clsx';

import Activities from '#components/layout/activities/Activities';
import Contacts from '#components/layout/contacts/Contacts';
import Header from '#components/layout/header/Header';
import Navigation from '#components/layout/navigation/Navigation';
import Notification from '#components/layout/notification/Notification';
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
				<div className={styles.pageBody} />
			</div>
			<div className={styles.sidebar}>
				<Notification />
				<Activities />
				<Contacts />
			</div>
		</main>
	);
}
