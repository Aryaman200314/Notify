import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './signup.css'
import Passwordinput from '../../components/Input/Passwordinput';
import { validateEmail } from '../../utils/helper';
import { Link } from 'react-router-dom';
function SignUp() {
  const handleSignUp = (e) => {
    e.preventDefault();

    if(!name){
      setError('Please enter a name');
      return;
    }
    if(!validateEmail(email)){
      setError('Please enter an valid email address');
      return;
    }
    if(!password){
      setError('Please enter a password');
      return;
    }
    setError("");
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <>
      <Navbar />
      <div className='signup-page-container'>
        <div className='signup-form-container'>
          <form onSubmit={handleSignUp}>
            <h4>SignUp</h4>

            <input type="text" placeholder="Name" className="input-box-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              Already have an account?{' '}
              <Link to="/login" className="create-an-account">
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp