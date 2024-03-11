import { useState } from "react";
import ProductCard from "../ProductCard/ProducCard";
import CustomSelect from "../UI/CustomSelect/CustomSelect";

const Products = ({ products }) => {
	const [newProducts, setNewProducts] = useState([...products]);
	const [typeProduct, setTypeProduct] = useState('');

	const selectData = [
		{ name: "Одежда" },
		{ name: "Техника" },
		{ name: "Обувь" },
	];

	const handleChangeTypeProduct = (event) => {
		const filteredProducts = newProducts.filter((el) => {
		return el.productName === typeProduct;
		});
		setNewProducts(filteredProducts);
		setTypeProduct(event.target.value);
	};

	return (
		<div>
			<CustomSelect
				data={selectData}
				typeProduct={typeProduct}
				setData={handleChangeTypeProduct}
			/>
			{newProducts.map(
				({ productName, productPrice, productQuantity, typeProduct }) => {
					return (
						<ProductCard
							productName={productName}
							productPrice={productPrice}
							productQuantity={productQuantity}
							typeProduct={typeProduct}
						/>
					);
				}
			)}
		</div>
	);
};

export default Products;
