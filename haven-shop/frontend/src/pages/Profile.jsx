const Profile = () => {
    const user = {}; // Fetch user data from backend or context
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  };
  
  export default Profile;