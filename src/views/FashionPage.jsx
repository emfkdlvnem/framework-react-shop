import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './viewProduct.css';

function FashionPage({ isDarkMode }) {
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
                console.error('패션 상품을 가져오는 중 오류 발생:', error);
            }
        }

        fetchFashionProducts();
    }, []);

    return (
        <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">패션</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
                {fashionProducts.map((product) => (
                    <div key={product.id} className="drop-shadow-xl block rounded-md border border-slate-100 bg-white m-2">
                        <Link to={`/product/${product.id}`}>
                            <figure className="flex h-80 bg-white overflow-hidden">
                                <img src={product.image} alt={product.title} />
                            </figure>
                            <div className="h-48 bg-gray-100 p-4 card-body">
                                <h3 className="card-title text-base">{product.title}</h3>
                                <p className="text-base">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
FashionPage.propTypes = {
    isDarkMode: PropTypes.bool.isRequired,
};
export default FashionPage;
