
import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './Beverages.css';

export default function BeveragesPage() {
    const { addToCart } = useContext(ShoppingCartContext);
  
    const beverages = [
      { id: 1, name: 'Red Label Tea 250g', price: 120, mrp: 130, img: 'image/be1.webp' },
      { id: 2, name: 'Taj Mahal Tea 250g', price: 160, mrp: 170, img: 'image/be2.webp' },
      { id: 3, name: 'Tang Instant Drink Mix', price: 220, mrp: 300, img: 'image/be3.webp' },
      { id: 4, name: 'Lipton Green Tea', price: 150, mrp: 170, img: 'image/be4.webp' },
      { id: 5, name: '7 up 2L.', price: 116, mrp: 198, img: 'image/be5.webp' },
      { id: 6, name: 'Glucon D', price: 149, mrp: 163, img: 'image/be6.webp' },
      { id: 7, name: 'Raw pressury Cold Extracted Juice - Pomegranate', price: 140, mrp: 150, img: 'image/be7.webp' },
      { id: 8, name: 'Red Bull(250 ml) pack of 4', price: 422, mrp: 480, img: 'image/be8.webp' },
      { id: 9, name: 'Nescafe (190g)', price: 601, mrp: 640, img: 'image/be9.webp' },
      { id: 10, name: 'Coca-Cola (2.25 L)', price: 91, mrp: 100, img: 'image/be10.webp' },
    ];
  
    return (
      <section className="categories" id="beverages">
        <h1 className="heading">
          beverages <span>products</span>
        </h1>
        <div className="box-container">
          {beverages.map((beverage) => (
            <div className="box" key={beverage.id}>
              <img src={beverage.img} alt={beverage.name} />
              <h3>{beverage.name}</h3>
              <p>
                MRP: ₹{beverage.mrp}<br />
                You Save: {(100 - ((beverage.price / beverage.mrp) * 100)).toFixed(0)}% OFF <br />
                Price: ₹{beverage.price}
              </p>
              <button
                type="button"
                className="btn"
                onClick={() => addToCart(beverage)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }