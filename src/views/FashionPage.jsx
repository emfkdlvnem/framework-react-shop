import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './viewProduct.css';

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
		<div className='accessory item'>
			<h2 className='mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold'>패션</h2>
			<div className=' grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>
				{fashionProducts.map((product) => (
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

export default FashionPage;