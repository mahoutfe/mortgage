import React, { useState } from 'react';
import {
	ButtonRectangle,
	CtaButtonsWrapper,
	PlayButton,
} from '../../components/buttons/Buttons.js';

import './../../style/style.scss';
import './MenuButton.module.scss';
import styles from './MenuButton.module.scss';
import logo from './../../resources/img/logo.svg';

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
					<div className={styles.contentWrapper}>
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
						<CtaButtonsWrapper />
					</div>
				</div>
			</div>
			<div className={styles.menuHeader}>
				<div className={styles.navBtn} onClick={onClick}>
					<button className={styles.navIconBtn}>
						<div
							className={`${styles.navIcon} ${
								isActive ? styles.navIconActive : ''
							}`}
						></div>
					</button>
				</div>
				<div className={`${styles.logo} ${isActive ? styles.logoActive : ''}`}>
					<a href='#!'>
						<img src={logo} alt='NEW AMERICAN funding' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default MenuButton;
