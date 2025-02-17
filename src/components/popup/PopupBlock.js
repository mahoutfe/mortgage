import React from 'react';
import styles from './PopupBlock.module.scss'; // Импортируем CSS-модуль

const PopupBlock = () => {
	return (
		<div className={styles.popupContainer}>
			{/* Верхняя часть блока с текстом и фото */}
			<div className={styles.contentHeader}>
				<div className={styles.contentHeaderText}>
					A mortgage isn't just about a rate. It's about building a strategy to
					help you leverage your wealth.
				</div>
				<img
					src='https://via.placeholder.com/80'
					alt='Lecturer Photo'
					className={styles.lecturerPhoto}
				/>
			</div>

			{/* Серая линия */}
			<div className={styles.dividerLine}></div>

			{/* Нижняя часть блока с текстом и кнопкой */}
			<div className={styles.contentFooter}>
				<div className={styles.footerText}>Have a question?</div>
				<button className={styles.talkButton}>Let’s talk</button>
			</div>
		</div>
	);
};

export default PopupBlock;
