import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg"><strong>Name:</strong> {user?.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;