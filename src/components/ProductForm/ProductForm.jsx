import { useState } from "react";
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomButton from "../UI/CustomButton/CustomButton";
import CustomSelect from "../UI/CustomSelect/CustomSelect";

const ProductFrom = ({ products, setProductsData }) => {
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productQuantity, setProductQuantity] = useState("");
	const [typeProduct, setTypeProduct] = useState("");

	const handleAddProduct = () => {
		const newProduct = {
			id: Math.random(),
			productName,
			productPrice,
			productQuantity,
			typeProduct,
		};
		setProductsData([...products, newProduct]);
	};

	const selectData = [
		{ name: "Одежда" },
		{ name: "Техника" },
		{ name: "Обувь" },
	];

	const handleChangeTypeProduct = (event) => {
		setTypeProduct(event.target.value);
	};

	return (
		<div>
			<p style={{ color: "white" }}>Add Product Form</p>

			<CustomInput
				placeholder="наимования товара"
				value={productName}
				setData={setProductName}
			/>

			<CustomInput
				placeholder="цена товара"
				value={productPrice}
				setData={setProductPrice}
			/>

			<CustomInput
				placeholder="количество товара"
				value={productQuantity}
				setData={setProductQuantity}
			/>
			<CustomSelect
				data={selectData}
				typeProduct={typeProduct}
				setTypeProduct={handleChangeTypeProduct}
			/>
			<CustomButton onClick={handleAddProduct}>Добавить</CustomButton>
		</div>
	);
};

export default ProductFrom;
