import React from 'react';
import buttonsStyles from './Buttons.module.scss';
import playBlue from './../../resources/img/buttonsImg/play-blue.svg';

const clgGetStarted = () => {
	console.log('get started');
};
const scheduleAtime = () => {
	console.log('schedule');
};

export const ButtonRectangle = ({ className, text, onClick }) => {
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};

export const CtaButtonsWrapper = ({ text }) => {
	return (
		<div className={buttonsStyles.ctaButtons}>
			{text}
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
	);
};

export const PlayButton = () => {
	return (
		<div className={buttonsStyles.playButton}>
			<div className={buttonsStyles.playIcon}>
				<a href='https://www.youtube.com/'>
					<img src={playBlue} alt='Play button' />
				</a>
			</div>
		</div>
	);
};
