const ButtonRectangle = ({ className, text, onClick }) => {
	return (
		<button className={className} onClick={onClick}>
			{text}
		</button>
	);
};

export default ButtonRectangle;
