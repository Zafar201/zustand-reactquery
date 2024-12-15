import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterForm from './compoenents/auth/RegisterFrom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginForm from './compoenents/auth/LoginForm';
import Dashboard from './pages/Dashboard';
import useAuthStore from './store/authStore';


const queryClient = new QueryClient();

function App() {
  const { user, token } = useAuthStore();
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route 
          path="/dashboard" 
          element={token ? <Dashboard /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  </QueryClientProvider>
  );
}

export default App;