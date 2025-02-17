import React from 'react';

import lectorsPhoto from '../../../resources/img/strategySection/backgroundImage.png';
import { PlayButtonWhite } from '../../buttons/Buttons';
import styles from './Strategy.module.scss';

const MainPageStrategy = () => {
	// const [isActive, setIsActive] = useState(false);

	// const onClick = () => {
	// 	setIsActive(!isActive);
	// };
	return (
		<section className={styles.strategySection}>
			<div className='container container--wide'>
				<div className={styles.sectionWrapper}>
					<div className={styles.sectionTitle}>
						Your mortgage journey is a story...
					</div>
					<div className={styles.sectionSubtitle}>
						It’s not just about clicking a button.
					</div>
					<div className={styles.strategyCards}>
						<div className={styles.pagination}>
							<div
								className={`${styles.paginationDot} ${styles.paginationDotActive}`}
							></div>
							<div className={styles.paginationLine}></div>
							<div className={styles.paginationDot}></div>
							<div className={styles.paginationLine}></div>
							<div className={styles.paginationDot}></div>
							<div className={styles.paginationLine}></div>
						</div>
						<div className={styles.cardsWrapper}>
							<div className={styles.cards}>
								<div
									className={styles.card}
									// className={`${styles.card} ${
									// 	isActive ? styles.cardActive : ''
									// }`}
									// onClick={onClick}
								>
									<p className={styles.cardsNumber}>01</p>
									<h3 className={styles.cardsTitle}>Get positioned</h3>
									<p className={styles.cardsText}>
										Structure, pre-approval, gathering, put them into the
										position get the offer accepted.
									</p>
								</div>
								<div className={`${styles.card} ${styles.cardActive}`}>
									<p
										className={`${styles.cardsNumber} ${styles.cardsNumberActive}`}
									>
										02
									</p>
									<h3
										className={`${styles.cardsTitle} ${styles.cardsTitleActive}`}
									>
										Prep the offer
									</h3>
									<p
										className={`${styles.cardsText} ${styles.cardsTextActive}`}
									>
										Terms of your offer, how quickly you can turn things around
										and who your lenders is advising.
									</p>
								</div>
								<div className={styles.card}>
									<p className={styles.cardsNumber}>03</p>
									<h3 className={styles.cardsTitle}>Finalize Closing</h3>
									<p className={styles.cardsText}>
										Put the final touches on from contract to close. Close the
										deal.
									</p>
								</div>
							</div>
						</div>

						<div className={styles.videoWrapper}>
							<div className={`${styles.videoCard} ${styles.topVideo}`}>
								<a
									href='https://www.youtube.com/watch?v=36YnV9STBqc'
									data-youtubeLightbox
									className={styles.videoLink}
								>
									<div className={styles.content}>
										<PlayButtonWhite />
										<h3 className={styles.videoTitle}>
											The difference between «fixed rate»
											<br />
											and «adjustable»
										</h3>
										<p className={styles.videoDuration}>0:29</p>
									</div>
									<img src={lectorsPhoto} alt='' className={styles.videoImg} />
								</a>
							</div>

							<div className={styles.bottomVideos}>
								<div className={`${styles.videoCard} ${styles.bottomVideo}`}>
									<a
										href='https://www.youtube.com/watch?v=36YnV9STBqc'
										data-youtubeLightbox
										className={styles.videoLink}
									>
										<div className={styles.content}>
											<PlayButtonWhite />
											<h3 className={styles.videoTitle}>
												What are points and credits?
											</h3>
											<p className={styles.videoDuration}>0:27</p>
										</div>
										<img
											src={lectorsPhoto}
											alt=''
											className={styles.videoImg}
										/>
									</a>
								</div>
								<div className={`${styles.videoCard} ${styles.bottomVideo}`}>
									<a
										href='https://www.youtube.com/watch?v=36YnV9STBqc'
										data-youtubeLightbox
										className={styles.videoLink}
									>
										<div className={styles.content}>
											<PlayButtonWhite />
											<h3 className={styles.videoTitle}>
												Why a mortgage is so much more
												<br />
												than just a rate?
											</h3>
											<p className={styles.videoDuration}>0:24</p>
										</div>
										<img
											src={lectorsPhoto}
											alt=''
											className={styles.videoImg}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MainPageStrategy;
