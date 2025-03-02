const Cart = () => {
    const cartItems = []; // Fetch cart items from backend or context
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item._id} className="border p-4 mb-4">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
              </div>
            ))}
            <button className="bg-blue-500 text-white p-2 rounded">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default Cart;