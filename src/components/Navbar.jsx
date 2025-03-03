import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 

const Navbar = ({cartCount, searchQuery, setSearchQuery}) => {
  return (
    <nav className='bg-gray-800 p-2 fixed top-0 left-0 w-full z-50 shadow-lg'>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <Link to="/" className='text-white text-2xl font-bold'>
              Daiki
            </Link>
            {/* Search Input in Navbar */}
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 border rounded w-full sm:w-72 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
          />
            <ul className="flex items-center space-x-4 mt-2 md:mt-0">
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
