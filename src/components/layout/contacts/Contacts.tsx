/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { contacts } from '#utils/data/sidebar';
import { useAvatar } from '#utils/data/userData';

import User from '../User';

import styles from './contacts.module.scss';

const ContactCard = ({ contact }: {contact: string}) => {
	const avatar = useAvatar(24);

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
					<ContactCard contact={contact} key={i} />
				))}
			</div>
		</div>
	);
}
