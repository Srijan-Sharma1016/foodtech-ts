
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Logout() {
  const authContext = useAuth();
  const logout = authContext?.logout;
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        if (logout) {
          await logout();
        } else {
          throw new Error('Logout function is not available');
        }
        navigate('/login');
      } catch (error) {
        toast.error('Failed to logout:', (error as any).message);
      }
    };
    doLogout();
  }, [logout, navigate]);

  return <div>Logging out...</div>;
}