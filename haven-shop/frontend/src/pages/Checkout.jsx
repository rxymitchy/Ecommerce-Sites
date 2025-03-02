const Checkout = () => {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Address</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Place Order
          </button>
        </form>
      </div>
    );
  };
  
  export default Checkout;