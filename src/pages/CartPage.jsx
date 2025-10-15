import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1 className="text-4xl text-center mb-8">Cart Page</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cart.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} showAddToCart={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
