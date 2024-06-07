import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './CleanersPage.css';

export default function CleanersPage() {
    const { addToCart } = useContext(ShoppingCartContext);

    const cleaners = [
        { id: 1, name: 'Surf Excel washing soap', price: 45, mrp: 50, img: 'image/washingsoap.jpg' },
        { id: 2, name: 'Refersh floor Cleaner', price: 250, mrp: 270, img: 'image/floorcleaner.jpg' },
        { id: 3, name: 'Sponge Scrubber', price: 35, mrp: 40, img: 'image/scrubber.jpeg' },
        { id: 4, name: 'Godrej Air Freshner', price: 320, mrp: 350, img: 'image/airfreshner.jpg' },
        { id: 5, name: 'Vim dishwashing liquid and soap', price: 175, mrp: 190, img: 'image/dishwashers.png' },
        { id: 6, name: 'O-Cedar Mops', price: 1200, mrp: 1700, img: 'image/mops.jpg' },
        { id: 7, name: 'Gala Broom', price: 270, mrp: 280, img: 'image/broom.jpg' },
        { id: 8, name: 'Tide detergents', price: 125, mrp: 135, img: 'image/detergents.jpeg' },
        { id: 9, name: 'Comfort cloth softner', price: 95, mrp: 120, img: 'image/comfort.jpg' },
        { id: 10, name: 'Harpic bathroom Cleaner', price: 260, mrp: 275, img: 'image/bathroomcleaner.jpg' },
    ];

    return (
        <section className="categories cleaners-page" id="cleaners">
            <h1 className="heading">
                Cleaning Essentials <span>products</span>
            </h1>
            <div className="box-container">
                {cleaners.map((cleaner) => (
                    <div className="box" key={cleaner.id}>
                        <img src={cleaner.img} alt={cleaner.name} />
                        <h3>{cleaner.name}</h3>
                        <p>
                            MRP: ₹{cleaner.mrp.toFixed(2)}<br />
                            You Save: {(100 - ((cleaner.price / cleaner.mrp) * 100)).toFixed(0)}% OFF <br />
                            Price: ₹{cleaner.price}
                        </p>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => addToCart(cleaner)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
