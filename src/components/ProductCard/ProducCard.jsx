import "./ProductCard.css";

const ProductCard = ({
	productName,
	productPrice,
	productQuantity,
	id,
	typeProduct,
}) => {
	return (
		<div className="card">
			<div key={id}>
				<p>{productName}</p>
				<p>{productPrice}</p>
				<p>{productQuantity}</p>
				<p>{typeProduct}</p>
			</div>
		</div>
	);
};

export default ProductCard;
