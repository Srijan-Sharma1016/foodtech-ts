
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await logout();
        navigate('/login');
      } catch (error) {
        toast.error('Failed to logout:', (error as any).message);
      }
    };
    doLogout();
  }, [logout, navigate]);

  return <div>Logging out...</div>;
}