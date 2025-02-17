import React from 'react';
import { PlayButton } from '../../buttons/Buttons';

import justinImage from './../../../resources/img/teamSection/justin.png';
import scottImage from './../../../resources/img/teamSection/scott.png';
import styles from './TeamSection.module.scss';

const TeamSection = () => {
	return (
		<section className={styles.teamSection}>
			<div className='container'>
				<h2 className={styles.sectionTitle}>
					Getting a mortgage founded takes a village.
				</h2>
				<p className={styles.sectionSubtitle}>
					Well, not quite a village, but two of the villages best lending
					heroes!
				</p>

				<div className={styles.teamMembers}>
					<div className={styles.teamMember}>
						<div className={styles.cardHeader}>
							<div className={styles.imageWrapper}>
								<img
									src={justinImage}
									alt="Justin's profile photo"
									className={styles.memberPhoto}
								/>
							</div>
							<div className={styles.videoButton}>
								<PlayButton />
								<p className={styles.videoTitle}>Meet Justin</p>
							</div>
						</div>

						<div className={styles.memberInfo}>
							<div className={styles.role}>The master mind</div>
							<h3 className={styles.name}>Justin</h3>
							<p className={styles.description}>
								Rates change, but every mortgage journey starts with <br />a
								relationship. (Pssst...it's not just about clicking a button)
							</p>
							<div className={styles.skillsContainer}>
								<div class={styles.skillTitle}>Skills</div>
								<div className={styles.skillsGrid}>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<rect
												x='15'
												y='19'
												width='20'
												height='14'
												rx='2'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M29 33V17C29 15.8954 28.1046 15 27 15H23C21.8954 15 21 15.8954 21 17V33'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>Deals</p>
									</div>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M25 35C30.5228 35 35 30.5228 35 25C35 19.4772 30.5228 15 25 15C19.4772 15 15 19.4772 15 25C15 30.5228 19.4772 35 25 35Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M29.24 20.76L27.12 27.12L20.76 29.24L22.88 22.88L29.24 20.76V20.76Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>
											Find the right
											<br />
											way
										</p>
									</div>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M25 21C29.9706 21 34 19.6569 34 18C34 16.3431 29.9706 15 25 15C20.0294 15 16 16.3431 16 18C16 19.6569 20.0294 21 25 21Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M34 25C34 26.66 30 28 25 28C20 28 16 26.66 16 25'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M16 18V32C16 33.66 20 35 25 35C30 35 34 33.66 34 32V18'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>
											Mortgage
											<br />
											«database»
										</p>
									</div>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M27 15H19C17.8954 15 17 15.8954 17 17V33C17 34.1046 17.8954 35 19 35H31C32.1046 35 33 34.1046 33 33V21L27 15Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M27 15V21H33'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M29 26H21'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M29 30H21'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M23 22H22H21'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>Docs master</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.teamMember}>
						<div className={styles.cardHeader}>
							<div className={styles.imageWrapper}>
								<img
									src={scottImage}
									alt="Scott's profile photo"
									className={styles.memberPhoto}
								/>
							</div>

							<div className={styles.videoButton}>
								<PlayButton />
								<p className={styles.videoTitle}>Meet Justin</p>
							</div>
						</div>

						<div className={styles.memberInfo}>
							<div className={styles.role}>The educator</div>
							<div className={styles.name}>Scott</div>
							<p className={styles.description}>
								Rates change, but every mortgage journey starts with <br />a
								relationship. (Pssst...it’s not just about clicking a button)
							</p>
							<div className={styles.skillsContainer}>
								<div class={styles.skillTitle}>Skills</div>
								<div className={styles.skillsGrid}>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M25 35C30.5228 35 35 30.5228 35 25C35 19.4772 30.5228 15 25 15C19.4772 15 15 19.4772 15 25C15 30.5228 19.4772 35 25 35Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M15 25H35'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M25 15C27.5013 17.7384 28.9228 21.292 29 25C28.9228 28.708 27.5013 32.2616 25 35C22.4987 32.2616 21.0772 28.708 21 25C21.0772 21.292 22.4987 17.7384 25 15V15Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>Linguist</p>
									</div>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M16 21L25 14L34 21V32C34 33.1046 33.1046 34 32 34H18C16.8954 34 16 33.1046 16 32V21Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M22 34V24H28V34'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>
											Perfect place
											<br />
											searcher
										</p>
									</div>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M25 35C30.5228 35 35 30.5228 35 25C35 19.4772 30.5228 15 25 15C19.4772 15 15 19.4772 15 25C15 30.5228 19.4772 35 25 35Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M25 29C27.2091 29 29 27.2091 29 25C29 22.7909 27.2091 21 25 21C22.7909 21 21 22.7909 21 25C21 27.2091 22.7909 29 25 29Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M17.93 17.93L22.17 22.17'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M27.83 27.83L32.07 32.07'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M27.83 22.17L32.07 17.93'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M27.83 22.17L31.36 18.64'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M17.93 32.07L22.17 27.83'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>Helper</p>
									</div>
									<div className={styles.skillItem}>
										<svg
											width='50'
											height='50'
											viewBox='0 0 50 50'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M25 49C38.2548 49 49 38.2548 49 25C49 11.7452 38.2548 1 25 1C11.7452 1 1 11.7452 1 25C1 38.2548 11.7452 49 25 49Z'
												fill='#FCFCFC'
												stroke='#E8E8E8'
											/>
											<path
												d='M30 33V31C30 28.7909 28.2091 27 26 27H18C15.7909 27 14 28.7909 14 31V33'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												fill-rule='evenodd'
												clip-rule='evenodd'
												d='M22 23C24.2091 23 26 21.2091 26 19C26 16.7909 24.2091 15 22 15C19.7909 15 18 16.7909 18 19C18 21.2091 19.7909 23 22 23Z'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M36 33V31C35.9986 29.1771 34.765 27.5857 33 27.13'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
											<path
												d='M29 15.13C30.7699 15.5832 32.0078 17.178 32.0078 19.005C32.0078 20.832 30.7699 22.4268 29 22.88'
												stroke='#278FB4'
												stroke-width='2'
												stroke-linecap='round'
												stroke-linejoin='round'
											/>
										</svg>

										<p className={styles.skillName}>
											Communication
											<br /> Guru
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
