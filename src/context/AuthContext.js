// src/context/AuthContext.js
import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import authReducer from '../reducers/authReducer';
import setAuthToken from '../utils/setAuthToken';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/auth');
      dispatch({
        type: 'USER_LOADED',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR'
      });
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // Actions
  const register = async formData => {
    try {
      const res = await axios.post('/api/users', formData);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: 'REGISTER_FAIL',
        payload: err.response.data.msg
      });
    }
  };

  const login = async formData => {
    try {
      const res = await axios.post('/api/auth', formData);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: 'LOGIN_FAIL',
        payload: err.response.data.msg
      });
    }
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  const clearErrors = () => dispatch({ type: 'CLEAR_ERRORS' });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        register,
        login,
        logout,
        clearErrors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
