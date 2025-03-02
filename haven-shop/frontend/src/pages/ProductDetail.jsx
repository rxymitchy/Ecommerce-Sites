import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const product = {}; // Fetch product by ID from backend
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-blue-500 text-white p-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;