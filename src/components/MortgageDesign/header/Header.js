import React from 'react';
import {
	ButtonRectangle,
	CtaButtonsWrapper,
	PlayButton,
} from '../../buttons/Buttons';
import MenuButton from '../../buttons/MenuButton';

import playBlue from './../../../resources/img/buttonsImg/play-blue.svg';
import headerImage from './../../../resources/img/header/header-image.jpg';
import logo from './../../../resources/img/logo.svg';
import './../../../style/style.scss';
import './../../../style/mixins.scss';
import styles from './Header.module.scss';
import buttonsStyles from './../../buttons/Buttons.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container container--wide'>
				<div className={styles.headerWrapper}>
					<div className={styles.imageContainer}>
						<MenuButton />
						<img src={headerImage} alt='' />
						<div className={styles.videoWrapper}>
							<div className={styles.videoContent}>
								<div className={styles.videoTitle}>
									Why a mortgage is so much more
									<br />
									than just a rate?
								</div>
								<div className={styles.playButtonWrapper}>
									<PlayButton />

									<div className={styles.videoDuration}>0:34</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.mainContent}>
						<div className={styles.logo}>
							<a href='#!'>
								<img src={logo} alt='NEW AMERICAN funding' />
							</a>
						</div>
						<div className={styles.description}>
							<h1 className={styles.mainTitle}>
								Finding a mortgage is so
								<br />
								<span className={styles.highlight}>much more</span> than{' '}
								<span className={styles.highlight}>just a rate</span>
							</h1>
							<p className={styles.subtitle}>
								Rates change, but every mortgage journey starts with a
								relationship.
								<br />
								(Pssst...it's not just about clicking a button)
							</p>
						</div>
						<div className={styles.ctaGroup}>
							<p className={styles.ctaHeading}>
								Let us help you create your mortgage journey
							</p>
							<CtaButtonsWrapper />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
