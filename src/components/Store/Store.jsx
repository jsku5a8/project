import "./Store.css";
import { useState } from "react";
import Products from "../Products/Products";
import ProductFrom from "../ProductForm/ProductForm";

const Store = () => {
	const [productsData, setProductsData] = useState([]);
	console.log(productsData);

	return (
		<div className="container">
			<Products products={productsData} setProductsData={setProductsData} />
			<ProductFrom products={productsData} setProductsData={setProductsData} />
		</div>
	);
};

export default Store;