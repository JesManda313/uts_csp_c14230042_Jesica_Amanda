import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Swal from "sweetalert2";

const ProductCard = ({ product, showAddToCart = true }) => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#2563EB",
    });
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
      <div>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4"/>
          <h3 className="text-lg font-semibold truncate hover:text-blue-600">{product.title}</h3>
        </Link>
        <p className="bg-gray-200 my-1 text-gray-700 text-sm font-semibold inline-block px-3 py-1 rounded-full">${product.price.toFixed(2)}</p>

        {showAddToCart && (
        <button
          onClick={() => {addToCart(product); handleAddToCart(product);}}
          className="mx-2 bg-blue-200 text-gray-700 text-sm font-semibold inline-block px-3 py-1 rounded-full">
          Add to Cart
        </button>
      )}
      </div>
    </div>
  );
};

export default ProductCard;
