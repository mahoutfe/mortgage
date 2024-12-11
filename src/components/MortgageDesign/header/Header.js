import ButtonRectangle from '../../buttons/Buttons';
import MenuButton from '../../buttons/MenuButton';
import playBlue from './../../../resources/img/buttonsImg/play-blue.svg';
import headerImage from './../../../resources/img/header/header-image.jpg';
import logo from './../../../resources/img/logo.svg';
import './../../../style/style.scss';
import './../../../style/mixins.scss';
import styles from './Header.module.scss';
import buttonsStyles from './../../../style/Buttons.module.scss';

const Header = () => {
	const clgGetStarted = () => {
		console.log('get started');
	};
	const scheduleAtime = () => {
		console.log('schedule');
	};

	return (
		<header className={styles.header}>
			<div className='container container--wide'>
				<div className={styles.headerWrapper}>
					<div className={styles.imageContainer}>
						<img src={headerImage} alt='' />
						<MenuButton />
						<div className={styles.videoContent}>
							<div className={styles.videoTitle}>
								Why a mortgage is so much more
								<br />
								than just a rate?
							</div>
							<div className={styles.playButtonWrapper}>
								<div className={buttonsStyles.playButton}>
									<div className={buttonsStyles.playIcon}>
										<a href='https://www.youtube.com/watch?v=_NNHdTTbzB8&t=1806s'>
											<img src={playBlue} alt='Play button' />
										</a>
									</div>
								</div>

								<div className={styles.videoDuration}>0:34</div>
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
							<div className={styles.ctaHeading}>
								Let us help you create
								<br />
								your mortgage journey
							</div>
							<div className={buttonsStyles.ctaButtons}>
								<ButtonRectangle
									className={buttonsStyles.ctaPrimaryButton}
									text='Get started'
									onClick={clgGetStarted}
								/>
								<ButtonRectangle
									className={buttonsStyles.ctaSecondaryButton}
									text='Schedule a time'
									onClick={scheduleAtime}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
