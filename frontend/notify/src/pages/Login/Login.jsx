import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../../components/Navbar/Navbar';
import './login.css';
import Passwordinput from '../../components/Input/Passwordinput';
import { validateEmail } from '../../utils/helper';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if(!password){
      setError('Please enter a password');
      return;
    }
    setError("");
  };

  return (
    <>
      <Navbar />

      <div className='login-upper-div'>
        <div className='login-inner-div'>
          <form onSubmit={handleLogin}> 
            <h4>Login</h4>
            <input type="text" placeholder="Email" className="input-box" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Passwordinput 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='error-message'>{error}</p>} {/* Error message */}

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="form-para">
              Not registered yet?{' '}
              <Link to="/signup" className="create-an-account">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
