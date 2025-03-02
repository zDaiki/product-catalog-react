import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105'>
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg transition-all duration-200 ease-in-out hover:opacity-90"
        />
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block mb-2">
          <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h2>
        </Link>
        
        <p className="text-gray-600 text-sm mb-2">${product.price}</p>


        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
