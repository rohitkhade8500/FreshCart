
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './FreshFruitsPage.css';

export default function FreshFruitsPage() {
  const { addToCart } = useContext(ShoppingCartContext);

  const fruits = [
    { id: 1, name: 'Alphonso Mango (1 kg)', price: 149, mrp: 207, img: 'image/f1.avif' },
    { id: 2, name: 'Watermelon (2 kg - 3 kg)', price: 65, mrp: 84, img: 'image/f2.avif' },
    { id: 3, name: 'Banana (12 pieces)', price: 31, mrp: 43, img: 'image/f3.avif' },
    { id: 4, name: 'Muskmelon 1 piece (400 g - 600 g)', price: 38, mrp: 47, img: 'image/f4.avif' },
    { id: 5, name: 'Green Grapes (500 g)', price: 116, mrp: 155, img: 'image/f5.avif' },
    { id: 6, name: 'Oranges (1 kg)', price: 149, mrp: 210, img: 'image/f6.avif' },
    { id: 7, name: 'Papaya (1 kg)', price: 80, mrp: 105, img: 'image/f7.avif' },
    { id: 8, name: 'Pomegranate (500 g)', price: 134, mrp: 174, img: 'image/f8.avif' },
    { id: 9, name: 'Chicoo (1 kg)', price: 89, mrp: 123, img: 'image/f9.avif' },
    { id: 10, name: 'Sweet Tamarind Box (250 g)', price: 132, mrp: 150, img: 'image/f10.avif' },
  ];

  return (
    <section className="categories" id="fresh-fruits">
      <h1 className="heading">
        fresh fruits <span>products</span>
      </h1>
      <div className="box-container">
        {fruits.map((fruit) => (
          <div className="box" key={fruit.id}>
            <img src={fruit.img} alt={fruit.name} />
            <h3>{fruit.name}</h3>
            <p> 
              MRP: ₹{fruit.mrp}<br />
              You Save: {(100 - ((fruit.price / fruit.mrp) * 100)).toFixed(0)}% OFF <br />
              Price: ₹{fruit.price}
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => addToCart(fruit)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}