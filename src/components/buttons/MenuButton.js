import React, { useState } from 'react';

import './../../style/style.scss';
import './MenuButton.module.scss';
import styles from './MenuButton.module.scss';

const MenuButton = () => {
	const [isActive, setIsActive] = useState(false);

	const onClick = () => {
		setIsActive(!isActive);
		// document.body.className.toggle('no-scroll');
	};

	return (
		<div>
			<div>
				<div
					className={`${styles.headerMenu} ${
						isActive ? styles.headerMenuActive : ''
					}`}
				>
					<nav className={styles.nav}>
						<ul className={styles.navList}>
							<li>
								<a href='#!'>Your teachers</a>
							</li>
							<li>
								<a href='#!'>Your mortgage journey</a>
							</li>
							<li>
								<a href='#!'>What our customers say</a>
							</li>
							<li>
								<a href='#!'>Blog</a>
							</li>
							<li>
								<a href='#!'>Ebook</a>
							</li>
							<li>
								<a href='#!'>Webinar</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className={styles.navBtn} onClick={onClick}>
				<button className={styles.navIconBtn}>
					<div
						className={`${styles.navIcon} ${
							isActive ? styles.navIconActive : ''
						}`}
					></div>
				</button>
			</div>
		</div>
	);
};

export default MenuButton;
