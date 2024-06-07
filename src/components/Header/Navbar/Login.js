import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login-page">
      <form className="user-form">
        <h1>Login Now</h1>
        <div className="box">
            <label><h2>Enter Your Email:</h2></label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="box">
        <label><h2>Enter Your Password:</h2></label>
          <input type="password" placeholder="Your Password" />
        </div>
        <p>
          Forgot your password?{' '}
          <a href="/forgot-password">Click here</a>
        </p>
        <p>
          Don't have an account?{' '}
          <a href="/register">Create now</a>
        </p>
        <button type="submit" className="btn">
          Login Now
        </button>
      </form>
    </div>
  );
}
