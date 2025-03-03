import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Sample products data
const initialProducts = [
  { id: 1, name: "Laptop", price: 999, image: "https://media.istockphoto.com/id/185291412/photo/laptop-45-degree-open.jpg?s=612x612&w=0&k=20&c=cgm03vMu6XVs_Z2ss6ekIR80F1RBrx4v9KdFU8Q0FsE=", category: "Electronics" },
  { id: 2, name: "Smartphone", price: 499, image: "https://i.pinimg.com/originals/8d/cb/d2/8dcbd2e7532bee58205b0192399e1dcd.jpg", category: "Electronics" },
  { id: 3, name: "Headphones", price: 199, image: "https://img.freepik.com/premium-photo/headphones-isolated-white_93675-38228.jpg?semt=ais_hybrid", category: "Accessories" },
  { id: 4, name: "Smartwatch", price: 299, image: "https://media.istockphoto.com/id/469328286/photo/smartwatch.jpg?s=612x612&w=0&k=20&c=Uns1U2fjc0M5DIzxW8qo8Wm_K7afxfNlwRWaiXs46PM=", category: "Accessories" },
  { id: 5, name: "Table", price: 150, image: "https://media.gettyimages.com/id/172165649/photo/table.jpg?s=612x612&w=0&k=20&c=Eo-x1qhvfslS_Yc0oOfA3a-dZwjkd5GsMH-K-YKXfuc=", category: "Furniture" },
  { id: 6, name: "Chair", price: 80, image: "https://cdn.create.vista.com/api/media/small/161222500/stock-photo-dark-wooden-chair", category: "Furniture" },
  { id: 7, name: "Computer", price: 999, image: "https://media.istockphoto.com/id/520691889/photo/computer.jpg?s=612x612&w=0&k=20&c=8dSQtlCXU2N-mFE33tMjAYQuy-76qwnd3SuH3vYo_hY=", category: "Electronics" },
  { id: 8, name: "sunglass", price: 499, image: "https://media.istockphoto.com/id/157424247/photo/fashionable-sunglasses.jpg?s=612x612&w=0&k=20&c=4j1LVNNizwDl0rT-XfLblFDQu8WSLKYnnFnAf-OTlC8=", category: "Electronics" }
];

const App = () => {
  // State hooks
  const [products, setProducts] = useState(initialProducts);
  const [category, setCategory] = useState(""); // To filter by category
  const [searchQuery, setSearchQuery] = useState(""); // For search
  const [sortOrder, setSortOrder] = useState(""); // To sort by price
  const [cart, setCart] = useState([]);

  const location = useLocation()

  const addToCart = (product)=>{
    const existingProduct = cart.find((item) => item.id === product.id);
    if(existingProduct){
      setCart(
        cart.map((item)=>
        item.id===product.id?{...item, quantity: item.quantity + 1}: item)
      );
    }else{
      setCart([...cart, {...product, quantity: 1}]);
    }
    toast.success(`${product.name} added to cart!`);
  };

  const handleUpdateQuantity = (id, newQuantity)=>{
    setCart(cart.map(item=>
      item.id===id?{...item, quantity: newQuantity} :item
    ));

  }

  const handleRemove = (id)=>{
    setCart(cart.filter(item=>item.id!==id));
  };

  const handleCart = ()=>{
    setCart([]);
  };

  return (
      <>
       <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      <Navbar cartCount={cart.length} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto p-4 md:p-6">
        
        {/* Search and Filters */}
        <div className="flex justify-between mb-6">
          {/* <input
            type="text"
            placeholder="Search products..."
            className="p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query as you type
          /> */}

          {location.pathname !== "/cart" && (
          <div className="flex space-x-4">
            {/* Category Filter */}
            <select
              className="p-2 border rounded"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Furniture">Furniture</option>
            </select>

            {/* Price Sorting */}
            <select
              className="p-2 border rounded"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Sort by Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
          )}
        </div>

        {/* Routes and product grid */}
        <Routes>
          <Route path="/" element={<ProductGrid products={products} category={category} searchQuery={searchQuery} sortOrder={sortOrder} addToCart={addToCart} />} />
          <Route path="/products" element={<ProductGrid products={products} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} handleUpdateQuantity={handleUpdateQuantity} handleRemove={handleRemove} handleCart={handleCart} />} />
        </Routes>
      </div>
      {/* <Footer /> */}
      </>
  );
};

export default App;
