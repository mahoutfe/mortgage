import React from 'react';
import MainPageHeader from '../../components/MortgageDesign/header/Header';
import TeamSection from '../../components/MortgageDesign/teamSection/TeamSection';
import MainPageStrategy from '../../components/MortgageDesign/strategy/Strategy';
import PageReviews from '../../components/MortgageDesign/reviews/Reviews';
import PageEducation from '../../components/MortgageDesign/education/Education';
import Footer from '../../components/MortgageDesign/footer/Footer';

import './../../style/style.scss';
import styles from './App.module.scss';

const App = () => {
	return (
		<main className={styles.app}>
			<div className='content'>
				<MainPageHeader />
				<TeamSection />
				<MainPageStrategy />
				<PageReviews />
				<PageEducation />
				<Footer />
			</div>
		</main>
	);
};

export default App;
