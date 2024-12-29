import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/slices/authSlice';
import { useEffect, useState } from 'react';
import { login as loginService, signup as signupService } from '../services/authService';

const useAuth = () => {
  const dispatch = useDispatch();
  const authState = useSelector(state => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const userData = await loginService(email, password);
      dispatch(login(userData));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const signupUser = async (email, password) => {
    setLoading(true);
    try {
      const userData = await signupService(email, password);
      dispatch(login(userData));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // You can add logic to check user session or token here
  }, []);

  return {
    authState,
    loginUser,
    signupUser,
    logoutUser,
    loading,
    error,
  };
};

export default useAuth;
