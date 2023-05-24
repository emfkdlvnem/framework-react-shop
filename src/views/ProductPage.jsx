import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
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
        </div>
    );
}

export default ProductPage;