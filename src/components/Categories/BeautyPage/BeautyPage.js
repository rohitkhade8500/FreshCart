import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './BeautyPage.css'


 function BeautyPage() {
  const { addToCart } = useContext(ShoppingCartContext);

  const beauty = [
    { id: 1, name: 'ecowibes soap', price: 149, mrp: 207, img: 'image/soap.jpeg' },
    { id: 2, name: 'Buds and Berries Shampoo', price: 325, mrp: 368, img: 'image/shampo.jpeg' },
    { id: 3, name: 'Elvive Conditioner', price: 250, mrp: 280, img: 'image/conditioner.jpeg' },
    { id: 4, name: 'Himalaya facewash', price: 100, mrp: 120, img: 'image/facewash.jpg' },
    { id: 5, name: 'Nivia Moisturizer', price: 240, mrp: 250, img: 'image/moisturizer.jpg' },
    { id: 6, name: 'Dettol Handwash', price: 130, mrp: 150, img: 'image/handwash.webp' },
    { id: 7, name: 'Parashoot Hair Oil', price: 120, mrp: 130, img: 'image/hairoil.jpg' },
    { id: 8, name: 'Base Camp Perfume', price: 425, mrp: 450, img: 'image/perfume.jpg' },
    { id: 9, name: 'sanitory Pads', price: 250, mrp: 280, img: 'image/pads.jpg' },
    { id: 10, name: 'Colgate Toothpaste', price: 100, mrp: 130, img: 'image/toothpaste.jpg' },
  ];

  return (
    <section className="categories" id="beauty">
      <h1 className="heading">
        Beauty and Hygine <span>products</span>
      </h1>
      <div className="box-container">
        {beauty.map((beauty) => (
          <div className="box" key={beauty.id}>
            <img src={beauty.img} alt={beauty.name} />
            <h3>{beauty.name}</h3>
            <p> 
              MRP: ₹{beauty.mrp}<br />
              You Save: {(100 - ((beauty.price / beauty.mrp) * 100)).toFixed(0)}% OFF <br />
              Price: ₹{beauty.price}
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => addToCart(beauty)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
    );
} 
export default BeautyPage;