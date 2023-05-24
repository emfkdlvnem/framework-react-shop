import PropTypes from 'prop-types';

function FashionPage({ products }) {
  const fashionProducts = products.filter((product) => product.category === 'fashion');

  return (
    <div>
      <h2>Fashion Products</h2>
      {fashionProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

FashionPage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default FashionPage;
