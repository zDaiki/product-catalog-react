import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 

const Navbar = ({cartCount, searchQuery, setSearchQuery}) => {
  return (
    <nav className='bg-gray-800 p-4 fixed top-0 left-0 w-full z-50 shadow-lg'>
        <div className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='text-white text-2xl font-bold'>
              Daiki
            </Link>
            {/* Search Input in Navbar */}
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 border rounded w-96 sm:w-72 lg:w-96 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
          />
            <ul className='flex space-x-6'>
                <li><Link to="/" className="text-white hover:underline mr-8">Home</Link></li>
                {/* <li><Link to="/products" className="text-white hover:underline">Products</Link></li> */}
                <li><Link
                      to="/cart"
                      className="text-white hover:text-blue-500 flex items-center mr-6"
                      aria-label="Go to cart"
                    >
                    <FaShoppingCart size={24} />
                    {cartCount > 0 && (
                    <span className="ml-1 text-sm text-white bg-red-500 rounded-full px-2">
                      {cartCount}
                    </span>
                    )}
                  </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
