import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FashionPage() {
	const [fashionProducts, setFashionProducts] = useState([]);

	useEffect(() => {
		async function fetchFashionProducts() {
		try {
			const responseMen = await fetch('https://fakestoreapi.com/products/category/men\'s%20clothing');
			const responseWomen = await fetch('https://fakestoreapi.com/products/category/women\'s%20clothing');
			
			const dataMen = await responseMen.json();
			const dataWomen = await responseWomen.json();

			const mergedData = [...dataMen, ...dataWomen];
			setFashionProducts(mergedData);
		} catch (error) {
			console.error('Error fetching fashion products:', error);
		}
		}

		fetchFashionProducts();
	}, []);

	return (
		<div>
		<h2>Fashion Products</h2>
		{fashionProducts.map((product) => (
			<div key={product.id}>
			<Link to={`/product/${product.id}`}>
				<h3>{product.title}</h3>
				<img src={product.image} alt={product.title} />
			</Link>
			</div>
		))}
		</div>
	);
}

export default FashionPage;