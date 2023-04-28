import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const [show,setShow] = useState(true)

  const handleLogin = event =>{
    event.preventDefault()
  }
  return (
    <div>
       <form className='text-center mt-20'>
      <label>
        Username:
        <input type="text" placeholder="name" className="input input-bordered input-primary w-full max-w-xs rounded-lg" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name='email' placeholder='email' className="input input-bordered input-primary w-full max-w-xs rounded-lg"/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" name='password' placeholder='password' className="input input-bordered input-primary w-full max-w-xs rounded-lg" />
      </label>
      <br />
      <button type="submit" className='btn'>Register</button>
    </form>
    </div>
  );
};

export default Login;