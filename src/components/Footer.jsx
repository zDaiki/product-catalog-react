import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-6 mt-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-gray-400">Facebook</a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a href="#" className="hover:text-gray-400">Instagram</a>
      </div>
      <div className="mb-4">
        <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a> | 
        <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
      </div>
      <p>&copy; 2025 E-Commerce Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
