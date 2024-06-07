import React from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

export default function UserForm(props) {
  const { active, isRegister } = props;

  return (
    <form className={`user-form ${active ? 'active' : ''}`}>
      <h3>{isRegister ? 'Register now' : 'Login now'}</h3>
      <div className="box">
        <input type="email" placeholder="your email" />
      </div>
      {isRegister && (
        <div className="box">
          <input type="text" placeholder="your username" />
        </div>
      )}
      <div className="box">
        <input type="password" placeholder="your password" />
      </div>
      {isRegister && (
        <div className="box">
          <input type="password" placeholder="confirm your password" />
        </div>
      )}
      {!isRegister && (
        <p>
          forgot your password
          {' '}
          <a href="/forgot-password">click here</a>
        </p>
      )}
      <p>
        {isRegister ? "already have an account" : "don't have an account"}
        {' '}
        <a href={isRegister ? "/signin" : "/register"}>{isRegister ? 'login now' : 'create now'}</a>
      </p>
      <button type="submit" className="btn">
        {isRegister ? 'register now' : 'login now'}
      </button>
    </form>
  );
}

UserForm.propTypes = {
  active: PropTypes.bool,
  isRegister: PropTypes.bool,
}.isRequired;
