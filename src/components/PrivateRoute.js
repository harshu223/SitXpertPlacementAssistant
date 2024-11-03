// src/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>; // Show a loading indicator while checking auth status

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
