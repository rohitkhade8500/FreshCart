import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './VegetablesPage.css';

export default function VegetablesPage() {
  const { addToCart } = useContext(ShoppingCartContext);

  const vegetables = [
    { id: 1, name: 'Capsicum - Green (Loose), 1 kg', price: 72, mrp: 120.55, img: 'image/v1.webp' },
    { id: 2, name: 'Cauliflower, 1 pc (approx. 400 to 600 g)', price: 44, mrp: 73.97, img: 'image/v2.webp' },
    { id: 3, name: 'Chilli - Green Long, Medium (Loose), 1 kg', price: 150, mrp: 205.48, img: 'image/v3.webp' },
    { id: 4, name: 'Potato - Fresh Crop, 2 X 1 kg Multipack', price: 74, mrp: 106.84, img: 'image/v4.webp' },
    { id: 5, name: 'Tomato - Hybrid, 2 x 1 kg Multipack', price: 70, mrp: 101.36, img: 'image/v5.webp' },
    { id: 6, name: 'Cabbage 1 piece (400 g - 600 g)', price: 24, mrp: 30, img: 'image/v6.avif' },
    { id: 7, name: 'Lady Finger (250g - 300g)', price: 23, mrp: 31, img: 'image/v7.avif' },
    { id: 8, name: 'Bitter Gourd (250 g - 300 g)', price: 35, mrp: 49, img: 'image/v8.avif' },
    { id: 9, name: 'Broad Beans (250 g - 300 g)', price: 54, mrp: 74, img: 'image/v9.avif' },
    { id: 10, name: 'Green Cucumber - Organically grown (500g)', price: 45, mrp: 60, img: 'image/v10.avif' },
  ];

  return (
    <section className="categories" id="vegetables">
      <h1 className="heading">
        vegetables <span>products</span>
      </h1>
      <div className="box-container">
        {vegetables.map((vegetable) => (
          <div className="box" key={vegetable.id}>
            <img src={vegetable.img} alt={vegetable.name} />
            <h3>{vegetable.name}</h3>
            <p>
              MRP: ₹{vegetable.mrp.toFixed(2)}<br />
              You Save: {(100 - ((vegetable.price / vegetable.mrp) * 100)).toFixed(0)}% OFF <br />
              Price: ₹{vegetable.price}
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => addToCart(vegetable)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
