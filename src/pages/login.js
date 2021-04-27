import { Link } from 'react-router-dom';
import AuthLayout from '../components/layouts/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout>
      <div>
        Login
      </div>
      no tienes cuenta? <Link to="/signup">Crear cuenta</Link>
    </AuthLayout>
  )
  }
  
  export default LoginPage;
  