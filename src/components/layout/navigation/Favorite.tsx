import { favorites } from '#utils/data/nav';

import styles from './favorite.module.scss';

export default function Favorite () {
	return (
		<div className={styles.favorite}>
			<div className={styles.head}>
				<p>Favorites</p>
				<p>Recently</p>
			</div>
			<div className={styles.body}>
				{
					favorites.map((favorite, i) => (
						<div key={i}>{favorite}</div>
					))
				}
			</div>
		</div>
	);
}
