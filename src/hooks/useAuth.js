import { useMutation, useQuery } from '@tanstack/react-query';

import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import { fetchUsers, loginUser, registerUser } from '../api/auth';

export const useRegister = () => {
  const setAuth = useAuthStore(state => state.setAuth);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setAuth(data.user, data.token);
      navigate('/dashboard');
    }
  });
};


export const useLogin = () => {
    const setAuth = useAuthStore(state => state.setAuth);
    const navigate = useNavigate();
  
    return useMutation({
      mutationFn: loginUser,
      onSuccess: (data) => {
        setAuth(data.user, data.token);
        navigate('/dashboard');
      }
    });
  };
  
  export const useUsers = () => {
    return useQuery({
      queryKey: ['users'],
      queryFn: fetchUsers
    });
  };