import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './viewProduct.css';

function AccessoryPage() {
	const [accessoryProducts, setAccessoryProducts] = useState([]);

	useEffect(() => {
		async function fetchAccessoryProducts() {
		try {
			const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
			const data = await response.json();
			setAccessoryProducts(data);
		} catch (error) {
			console.error('Error fetching accessory products:', error);
		}
		}

		fetchAccessoryProducts();
	}, []);

	return (
		<div className='accessory item'>
    		<h2 className='mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold'>액세서리</h2>
			<div className=' grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'>			
				{accessoryProducts.map((product) => (
					<div key={product.id} className='drop-shadow-xl block rounded-md border border-slate-100 bg-white m-2'>
						<Link to={`/product/${product.id}`} >
							<figure className='allItem flex h-80 bg-white overflow-hidden'>
								<img src={product.image} alt={product.title}/>
							</figure>
							<div className='h-48 bg-gray-100 p-4 card-body'>
								<h3 className='card-title text-base'>{product.title}</h3>
								<p className='text-base'>${product.price}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default AccessoryPage;

