import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {product.title}
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl ">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain mx-auto mb-6"
        />
        <h2 className="text-md font-semibold mb-4">
          {product.title}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed mb-6">{product.description}</p>
        <div className="bg-gray-200 text-gray-700 text-sm font-semibold inline-block px-3 py-1 rounded-full">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </div>

  );
};

export default ProductDetailPage;