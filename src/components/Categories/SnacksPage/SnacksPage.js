import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './SnacksPage.css';

export default function SnacksPage() {
    const { addToCart } = useContext(ShoppingCartContext);

    const snacks = [
        { id: 1, name: 'Lays Potato Chips - 1 pack (100g)', price: 27, mrp: 30, img: 'image/sn1.jpeg' },
        { id: 2, name: 'Kurkure Masala Munch - 1 pack (90g)', price: 19, mrp: 20, img: 'image/sn2.jpeg' },
        { id: 3, name: "Haldiram's Bhujia - 1 pack (200g)", price: 42.50, mrp: 50, img: 'image/sn3.jpeg' },
        { id: 4, name: 'Britannia Good Day Cookies - 1 pack (200g)', price: 27, mrp: 30, img: 'image/sn4.jpeg' },
        { id: 5, name: 'Parle G Biscuits - 1 pack (200g)', price: 19, mrp: 20, img: 'image/sn5.jpeg' },
        { id: 6, name: 'Maggi Noodles - 1 pack (70g)', price: 10.80, mrp: 12, img: 'image/sn6.jpeg' },
        { id: 7, name: 'Sunfeast Dark Fantasy - 1 pack (75g)', price: 27, mrp: 30, img: 'image/sn7.jpeg' },
        { id: 8, name: 'Oreo Cookies - 1 pack (120g)', price: 31.50, mrp: 35, img: 'image/sn8.jpeg' },
        { id: 9, name: 'Bingo Mad Angles - 1 pack (100g)', price: 19, mrp: 20, img: 'image/sn9.jpeg' },
        { id: 10, name: "Kellogg's Corn Flakes - 1 pack (250g)", price: 54, mrp: 60, img: 'image/sn10.jpeg' },
    ];

    return (
        <section className="categories snacks-page" id="snacks">
            <h1 className="heading">
                Snacks & <span>Branded Foods</span>
            </h1>
            <div className="box-container">
                {snacks.map((snack) => (
                    <div className="box" key={snack.id}>
                        <img src={snack.img} alt={snack.name} />
                        <h3>{snack.name}</h3>
                        <p>
                            MRP: ₹{snack.mrp.toFixed(2)}<br />
                            You Save: {(100 - ((snack.price / snack.mrp) * 100)).toFixed(0)}% OFF <br />
                            Price: ₹{snack.price}
                        </p>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => addToCart(snack)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
