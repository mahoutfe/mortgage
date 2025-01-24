import React from 'react';
import Header from '../../components/MortgageDesign/header/Header';
import TeamSection from '../../components/MortgageDesign/teamSection/TeamSection';
import PageStrategy from '../../components/MortgageDesign/strategy/Strategy';
import PageReviews from '../../components/MortgageDesign/reviews/Reviews';
import PageEducation from '../../components/MortgageDesign/education/Education';
import Footer from '../../components/MortgageDesign/footer/Footer';

import './../../style/style.scss';
import styles from './App.module.scss';

const App = () => {
	return (
		<main className={styles.app}>
			<div className='content'>
				<Header />
				<div className='container'>
					<TeamSection />
					<PageStrategy />
					<PageReviews />
					<PageEducation />
					<Footer />
				</div>
			</div>
		</main>
	);
};

export default App;
