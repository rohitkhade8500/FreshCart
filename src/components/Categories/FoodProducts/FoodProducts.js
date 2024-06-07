import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './FoodProducts.css';

export default function FoodProducts() {
    const { addToCart } = useContext(ShoppingCartContext);

    const foods = [
        { id: 1, name: 'Instant Poha', price: 72, mrp: 120.55, img: 'image/Screenshot (145).png' },
        { id: 2, name: 'Dal Makhani, (Instant)', price: 44, mrp: 73.97, img: 'image/Screenshot (146).png' },
        { id: 3, name: 'Mini Idli Samber (Instant)', price: 150, mrp: 205.48, img: 'image/Screenshot (147).png' },
        { id: 4, name: 'Wai Wai Noodles', price: 74, mrp: 106.84, img: 'image/Screenshot (148).png' },
        { id: 5, name: 'Veggie Upma (Instant)', price: 70, mrp: 101.36, img: 'image/Screenshot (149).png' },
        { id: 6, name: 'Paneer Makhanwala', price: 24, mrp: 30, img: 'image/Screenshot (150).png' },
        { id: 7, name: 'Caramel Bliss Popcorn', price: 23, mrp: 31, img: 'image/Screenshot (151).png' },
        { id: 8, name: 'Paneer Chilli Masala Mix', price: 35, mrp: 49, img: 'image/Screenshot (152).png' },
        { id: 9, name: 'Pancake Mix', price: 54, mrp: 74, img: 'image/Screenshot (153).png' },
        { id: 10, name: 'Paratha (Instant)', price: 45, mrp: 60, img: 'image/Screenshot (154).png' },
    ];

    return (
        <section className="categories food-page" id="food">
            <h1 className="heading">
                Instant Food <span>products</span>
            </h1>
            <div className="box-container">
                {foods.map((food) => (
                    <div className="box" key={food.id}>
                        <img src={food.img} alt={food.name} />
                        <h3>{food.name}</h3>
                        <p>
                            MRP: ₹{food.mrp.toFixed(2)}<br />
                            You Save: {(100 - ((food.price / food.mrp) * 100)).toFixed(0)}% OFF <br />
                            Price: ₹{food.price}
                        </p>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => addToCart(food)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
