import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Haven Shop</Link>
        <nav>
          <Link to="/cart" className="mx-2">Cart</Link>
          <Link to="/login" className="mx-2">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;