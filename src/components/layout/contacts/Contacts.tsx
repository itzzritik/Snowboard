/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { contacts } from '#utils/data/sidebar';
import { getAvatarUrl } from '#utils/hooks/userData';

import User from '../User';

import styles from './contacts.module.scss';

const ContactCard = ({ contact, index }: {contact: string, index: number}) => {
	const avatar = getAvatarUrl(24, index + 10);

	return (
		<User avatar={avatar} name={contact} />
	);
};

export default function Contacts () {
	return (
		<div className={styles.contacts}>
			<h3>Contacts</h3>
			<div className={styles.content}>
				{contacts.map((contact, i) => (
					<ContactCard contact={contact} index={i} key={i} />
				))}
			</div>
		</div>
	);
}
