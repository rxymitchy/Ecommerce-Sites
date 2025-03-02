import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = []; // Fetch products from backend
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;