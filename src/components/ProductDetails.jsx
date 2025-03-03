import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = ({ products, addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchedProduct = products.find((p) => p.id === parseInt(id));
        if (fetchedProduct) {
            setProduct(fetchedProduct);
        }
        setLoading(false);
    }, [id, products]);

    if (loading) {
        return <div className="text-center text-blue-500">Loading...</div>;
    }

    if (!product) {
        return <div className='text-center text-red-500'>Product not found</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <Link to="/" className="text-blue-500 mb-4 inline-block"> &larr; Back to products</Link>
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <img src={product.image} alt={product.name} className="w-full lg:w-1/2 rounded-lg shadow-lg" />
                <div className="lg:ml-6 mt-6 lg:mt-0 flex flex-col space-y-4">
                    <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
                    <p className="text-gray-600 text-lg">Rs.{product.price}</p>
                    <p className="mt-4 text-gray-700 text-sm">{product.description || "Detailed product description not available."}</p>
                    
                    {/* Product Rating */}
                    {/* <div className="flex items-center space-x-2">
                        <span className="text-yellow-500">★★★★☆</span>
                        <span className="text-gray-500 text-sm">({product.reviews?.length || 0} reviews)</span>
                    </div> */}

                    {/* Add to Cart Button */}
                    <button 
                        onClick={() => addToCart(product)} 
                        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded transition duration-200 transform hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Add to cart
                    </button>
                    
                    {/* Additional Product Details */}
                    {/* <div className="mt-4 text-gray-600 text-sm">
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Brand:</strong> {product.brand}</p>
                    </div> */}
                </div>
            </div>

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-800">Customer Reviews</h3>
                    <div className="space-y-4 mt-4">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
                                <p className="text-gray-800 font-medium">{review.username}</p>
                                <div className="flex items-center space-x-2">
                                    <span className="text-yellow-500">★★★★☆</span>
                                    <span className="text-gray-500 text-sm">({review.date})</span>
                                </div>
                                <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
