import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DigitalPage() {
	const [digitalProducts, setDigitalProducts] = useState([]);

	useEffect(() => {
		async function fetchDigitalProducts() {
		try {
			const response = await fetch('https://fakestoreapi.com/products/category/electronics');
			const data = await response.json();
			setDigitalProducts(data);
		} catch (error) {
			console.error('Error fetching digital products:', error);
		}
		}

		fetchDigitalProducts();
	}, []);

	return (
		<div>
		<h2>Digital Products</h2>
		{digitalProducts.map((product) => (
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

export default DigitalPage;
