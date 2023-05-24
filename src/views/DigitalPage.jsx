import { useState, useEffect } from 'react';

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
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

export default DigitalPage;
