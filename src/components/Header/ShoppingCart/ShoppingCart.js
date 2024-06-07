import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ShoppingCart.css';
import { ShoppingCartContext } from './ShoppingCartContext';

export default function ShoppingCart({ active }) {
  const { cart, removeFromCart } = useContext(ShoppingCartContext);

  return (
    <div className={`shopping-cart ${active ? 'active' : ''}`}>
      {cart.map((item, index) => (
        <div className="box" key={index}>
          <FontAwesomeIcon
            className="trash-icon"
            icon={faTrash}
            onClick={() => removeFromCart(item)}
          />
          <img src={item.img} alt={item.name} />
          <div className="content">
            <h3>{item.name}</h3>
            <span className="price">₹{item.price}</span>
            <span className="quantity">qty: 1</span>
          </div>
        </div>
      ))}
    </div>
  );
}

ShoppingCart.propTypes = {
  active: PropTypes.bool.isRequired,
};