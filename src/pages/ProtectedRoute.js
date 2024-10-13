import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext';

const ProtectedRoute = ({ role, children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;  // Unauthorized access
  }

  return children;
};

export default ProtectedRoute;
