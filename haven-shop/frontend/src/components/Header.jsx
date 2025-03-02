import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Haven Shop</Link>
        <nav className="flex items-center space-x-4">
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="mr-2" /> Cart
          </Link>
          <Link to="/login" className="flex items-center">
            <FaUser className="mr-2" /> Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;