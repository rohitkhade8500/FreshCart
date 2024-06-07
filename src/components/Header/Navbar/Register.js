import React from 'react';
import './Register.css';

export default function Register() {
  return (
    <div className="register-page">
      <form className="user-form">
        <h1>Register Now</h1>
        <div className="box">
        <label><h2>Enter Your Email:</h2></label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="box">
        <label><h2>Enter Your Username:</h2></label>
          <input type="text" placeholder="Your Username" />
        </div>
        <div className="box">
        <label><h2>Enter Your Password:</h2></label>
          <input type="password" placeholder="Your Password" />
        </div>
        <div className="box">
        <label><h2>Confirm Your Password:</h2></label>
          <input type="password" placeholder="Confirm Your Password" />
        </div>
        <p>
          Already have an account?{' '}
          <a href="/login">Login now</a>
        </p>
        <button type="submit" className="btn">
          Register Now
        </button>
      </form>
    </div>
  );
}
