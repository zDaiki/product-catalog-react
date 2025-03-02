import React, { useMemo } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, category, searchQuery, sortOrder, addToCart }) => {
  // Memoize filtered and sorted products for better performance
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        return (
          (category === "" || product.category === category) && // Filter by category
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by search query
        );
      })
      .sort((a, b) => {
        // Sort by price if sortOrder is set
        if (sortOrder === "asc") {
          return a.price - b.price;
        }
        if (sortOrder === "desc") {
          return b.price - a.price;
        }
        return 0; // No sorting if sortOrder is empty
      });
  }, [products, category, searchQuery, sortOrder]);

  // If there are no filtered products, show a "No products found" message
  if (filteredProducts.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p>No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
