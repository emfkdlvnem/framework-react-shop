import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './viewProduct.css';

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
		<div className='digital item'>
			<h2 className='mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold'>디지털</h2>
			<div className=' grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>						
				{digitalProducts.map((product) => (
					<div key={product.id}>
						<Link to={`/product/${product.id}`} className='card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal'>
							<figure className='flex h-80 bg-white overflow-hidden'>
								<img src={product.image} alt={product.title}/>
							</figure>
							<div className='card-body bg-gray-100 dark:bg-gray-700'>
								<h3>{product.title}</h3>
								<p>${product.price}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default DigitalPage;
