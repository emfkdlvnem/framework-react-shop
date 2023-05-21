import PropTypes from 'prop-types';

function FasionPage({ products }) {
    const fasionProducts = products.filter(
        (product) => product.category === "men's clothing" || product.category === "women's clothing"
    );

    return (
        <div>
        <h1>Fasion Page</h1>
        <ul>
            {fasionProducts.map((product) => (
            <li key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <img src={product.image} alt={product.title} />
            </li>
            ))}
        </ul>
        </div>
    );
    }

    FasionPage.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FasionPage;
