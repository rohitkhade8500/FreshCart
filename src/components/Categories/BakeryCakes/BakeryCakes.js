import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './BakeryCakes.css';

export default function BakeryCakes() {
    const { addToCart } = useContext(ShoppingCartContext);

    const cakes = [
        { id: 1, name: 'Chocolate Cake - 1 kg', price: 400, mrp: 500, img: 'image/C1.jpeg' },
        { id: 2, name: 'Vanilla Cake - 1 kg', price: 382.50, mrp: 450, img: 'image/C2.jpeg' },
        { id: 3, name: 'Red Velvet Cake - 1 kg', price: 450, mrp: 600, img: 'image/C3.jpeg' },
        { id: 4, name: 'Strawberry Cake - 1 kg', price: 451, mrp: 550, img: 'image/C4.jpeg' },
        { id: 5, name: 'Black Forest Cake - 1 kg', price: 400, mrp: 500, img: 'image/C5.jpeg' },
        { id: 6, name: 'Blueberry Cake - 1 kg', price: 455, mrp: 650, img: 'image/C6.jpeg' },
        { id: 7, name: 'Lemon Cake - 1 kg', price: 360, mrp: 480, img: 'image/C7.jpeg' },
        { id: 8, name: 'Pineapple Cake - 1 kg', price: 400, mrp: 500, img: 'image/C8.jpeg' },
        { id: 9, name: 'Fruit Cake - 1 kg', price: 480, mrp: 600, img: 'image/C9.jpeg' },
        { id: 10, name: 'Cheesecake - 1 kg', price: 525, mrp: 700, img: 'image/C10.jpeg' },
    ];

    return (
        <section className="categories bakery-page" id="cakes">
            <h1 className="heading">
                Bakery Cakes <span>Products</span>
            </h1>
            <div className="box-container">
                {cakes.map((cake) => (
                    <div className="box" key={cake.id}>
                        <img src={cake.img} alt={cake.name} />
                        <h3>{cake.name}</h3>
                        <p>
                            MRP: ₹{cake.mrp.toFixed(2)}<br />
                            You Save: {(100 - ((cake.price / cake.mrp) * 100)).toFixed(0)}% OFF <br />
                            Price: ₹{cake.price}
                        </p>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => addToCart(cake)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
