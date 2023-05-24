import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './viewProduct.css';

function ProductPage({ setCartCount, isDarkMode }) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
        fetchProduct();
    }, [productId]);

    const addToCart = () => {
        setCartCount((prevCount) => prevCount + 1);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    const renderRating = () => {
        const { rate } = product.rating;
        const stars = [];
        const maxStars = 5;
        for (let i = 0; i < maxStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i < rate ? 'text-yellow-500' : 'text-gray-300'}
                />
            );
        }
        return stars;
    };

    return (
        <div className={`flex items-center item ${isDarkMode ? 'dark-mode text-white' : 'light-mode'}`}>
            <figure className="productPage mr-10 flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
                <img src={product.image} alt={product.title} className='imgSize' />
            </figure>
            <div>
                <h2 className="text-2xl font-bold mb-5">{product.title}</h2>
                <p className={`text-gray-600 ${isDarkMode ? 'dark-mode-text text-white' : 'light-mode-text'}`}>{product.description}</p>
                <p className="text-3xl font-semibold mt-2 mb-4">${product.price}</p>
                <div className="flex items-center">
                    <div className="mr-2">
                        {renderRating()}
                    </div>
                    <p className={`text-gray-600 ${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}>{product.rating.count} 참여</p>
                </div>
                <button className={`mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md mr-10 shadow-lg ${isDarkMode ? 'shadow-indigo-500/50' : 'shadow-indigo-600/50'} hover:bg-orange-600`} onClick={addToCart}>
                    장바구니에 담기
                </button>
                <Link to="/cart" className={`mt-4 px-4 py-2 bg-white border border-indigo-600 rounded-md mr-10 shadow-lg ${isDarkMode ? 'shadow-indigo-500/50' : 'shadow-indigo-600/50'} hover:bg-lime-100 hover:border-lime-100 text-black`}>
                    장바구니로 이동
                </Link>
            </div>
        </div>
    );
}

ProductPage.propTypes = {
    setCartCount: PropTypes.func.isRequired,
    isDarkMode: PropTypes.bool.isRequired,
};

export default ProductPage;
