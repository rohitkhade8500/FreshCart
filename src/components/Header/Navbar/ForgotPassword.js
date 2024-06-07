import React from 'react';
import './ForgotPassword.css';

export default function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <form className="user-form">
        <h3>Reset Password</h3>
        <div className="box">
          <input type="email" placeholder="Your Email" />
        </div>
        <p>
          Please enter your email address. You will receive a link to create a new password via email.
        </p>
        <button type="submit" className="btn">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
