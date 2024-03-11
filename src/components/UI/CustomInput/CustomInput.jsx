import "./CustomInput.css";

const CustomInput = ({ value, setData, placeholder }) => {
	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={(event) => {
					setData(event.target.value);
				}}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default CustomInput;
