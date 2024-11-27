import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ name, price, image, rating, inStock, onAddToCart }) => {
  return (
    <div className={`product-card ${!inStock ? "out-of-stock" : ""}`}>
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
      <div className="product-rating">⭐ {rating}</div>
      {!inStock ? (
        <p className="stock-status">Out of Stock</p>
      ) : (
        <button className="add-to-cart" onClick={onAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
  inStock: PropTypes.bool,
  onAddToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  rating: 0,
  inStock: true,
};

export default ProductCard;
