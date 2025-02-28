import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;