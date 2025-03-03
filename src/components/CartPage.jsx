import React from 'react';

const CartPage = ({ cart, handleUpdateQuantity, handleRemove, handleCart }) => {
  
  if (cart.length === 0) {
    return <div className='text-center text-xl font-semibold py-10'>🛒 Your cart is empty</div>;
  }

  return (
    <div className='container mx-auto p-6 w-full max-w-7xl'> {/* Adjust max-width here */}
      <h2 className='text-3xl text-center font-bold mt-4 mb-6 text-gray-800'>🛍️ Your Cart</h2>
      
      <ul className="bg-gray-200 shadow-md rounded-lg p-4">
        {cart.map((product, index) => (
          <li key={index} className='flex flex-col sm:flex-row justify-between items-center p-4 border-b'>
            <div className='flex items-center space-x-4'>
              <img src={product.image} alt={product.name} className='w-16 h-16 object-cover rounded-lg'/>
              <div>
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <p className='text-gray-600'>Rs.{product.price.toFixed(2)}</p>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <button 
                onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)} 
                className='bg-gray-300 text-gray-700 px-3 py-1 rounded disabled:opacity-50'
                disabled={product.quantity === 1}
              >-</button>
              
              <span className='font-semibold'>{product.quantity}</span>
              
              <button 
                onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)} 
                className='bg-gray-300 text-gray-700 px-3 py-1 rounded'
              >+</button>

              <button 
                onClick={() => handleRemove(product.id)} 
                className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'
              >Remove</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Total Price */}
      <div className='flex justify-between items-center mt-6'>
        <h3 className='text-xl font-bold text-gray-800'>
          Total: Rs.{cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </h3>
        <button 
          onClick={handleCart} 
          className='bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition'
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
