'use client';
import { useState } from 'react';

import Activities from '#components/layout/activities/Activities';
import Contacts from '#components/layout/contacts/Contacts';
import Header from '#components/layout/header/Header';
import Navigation from '#components/layout/navigation/Navigation';
import Notification from '#components/layout/notification/Notification';
import { dashboards } from '#utils/data/nav';

import styles from './page.module.scss';

export default function Home () {
	const [activePage, setActivePage] = useState(dashboards[0].label);

	return (
		<main className={styles.main}>
			<Navigation className={styles.nav} active={activePage} setActive={setActivePage} />
			<div className={styles.content}>
				<Header activePage={activePage} />
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
