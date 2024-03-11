import "./CustomButton.css";

const CustomButton = ({ children, onClick }) => {
	return (
		<div>
			<button onClick={onClick}>{children}</button>
		</div>
	);
};

export default CustomButton;
