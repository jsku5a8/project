import "./CustomSelect.css";

const CustomSelect = ({ data, typeProduct, setData }) => {
	return (
		<div>
			<select value={typeProduct} className="select" onChange={setData}>
				{data.map((el) => {
					return <option value={el.name}>{el.name}</option>;
				})}
			</select>
		</div>
	);
};

export default CustomSelect;
