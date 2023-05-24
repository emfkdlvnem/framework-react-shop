import { useState, useEffect } from 'react';

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
    <div>
      <h2>Accessory Products</h2>
      {accessoryProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

export default AccessoryPage;

