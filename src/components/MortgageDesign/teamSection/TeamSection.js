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
						<img
							src={justinImage}
							alt="Justin's profile photo"
							className={styles.memberPhoto}
						/>
						<div className={styles.memberInfo}>
							<span className={styles.role}>The master mind</span>
							<h3 className={styles.name}>Justin</h3>
							<p className={styles.description}>
								Rates change, but every mortgage journey starts with <br />a
								relationship. (Pssst...it's not just about clicking a button)
							</p>
							<div className={styles.skillsContainer}>
								<h3 class={styles.skillTitle}>Skills</h3>
								<div className={styles.skillsGrid}>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
										<p className={styles.skillName}>Deals</p>
									</div>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
										<p className={styles.skillName}>
											Find the right
											<br />
											way
										</p>
									</div>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
										<p className={styles.skillName}>
											Mortgage
											<br />
											«database»
										</p>
									</div>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
										<p className={styles.skillName}>Docs master</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.teamMember}>
						<img
							src={scottImage}
							alt="Justin's profile photo"
							className={styles.memberPhoto}
						/>
						<div className={styles.memberInfo}>
							<span className={styles.role}>The educator</span>
							<h3 className={styles.name}>Scott</h3>
							<p className={styles.description}>
								Rates change, but every mortgage journey starts with <br />a
								relationship. (Pssst...it’s not just about clicking a button)
							</p>
							<div className={styles.skillsContainer}>
								<h3 class={styles.skillTitle}>Skills</h3>
								<div className={styles.skillsGrid}>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
										<p className={styles.skillName}>Linguist</p>
									</div>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
										<p className={styles.skillName}>
											Perfect place
											<br />
											searcher
										</p>
									</div>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
										<p className={styles.skillName}>Helper</p>
									</div>
									<div className={styles.skillItem}>
										<img className={styles.skillIcon} />
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
