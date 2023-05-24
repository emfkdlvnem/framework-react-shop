import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductPage({ setCartCount }) {
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

    return (
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating.rate}, {product.rating.count}</p>
            <button onClick={addToCart}>Add to Cart</button>
            <Link to="/cart">Go to Cart</Link>
        </div>
    );
}
ProductPage.propTypes = {
    setCartCount: PropTypes.func.isRequired,
};
export default ProductPage;
