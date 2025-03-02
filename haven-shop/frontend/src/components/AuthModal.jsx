import { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 text-blue-500 underline"
        >
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
        <button onClick={onClose} className="mt-4 text-red-500 underline">
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;