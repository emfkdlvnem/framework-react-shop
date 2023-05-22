import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './component/Header'
import Footer from './component/Footer'

import MainPage from './views/MainPage' 
import CartPage from './views/CartPage'
import ProductPage from './views/ProductPage'

import FasionPage from './views/FasionPage'
import AccessoryPage from './views/AccessoryPage'
import DigitalPage from './views/DigitalPage'


function App() {
	const [products, setProducts] = useState([]);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		async function getProductData() {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			setProducts(data);
		}
	
		getProductData();
	}, []);

	const toggleTheme = () => {
		setIsDarkMode(prevMode => !prevMode);
	};
	return (
		<div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>	
			<Header isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
			{/* 페이지 이동시 해당 컴포넌트 페이지로 보여질 수 있는 */}
            <Routes>
                <Route path="/" element={<MainPage products={products} />} />
                <Route path="/cart" element={<CartPage products={products} />} />
                <Route path="/fasion" element={<FasionPage products={products} />} />
                <Route path="/accessory" element={<AccessoryPage products={products} />} />
                <Route path="/digital" element={<DigitalPage products={products} />} />
                <Route path="/product/:productId" element={<ProductPage products={products} />} />
            </Routes>
			<Footer />
		</div>
	)
}

export default App
