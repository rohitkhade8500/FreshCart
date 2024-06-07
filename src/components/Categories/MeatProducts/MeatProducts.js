import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './MeatProducts.css';

export default function MeatProducts() {
    const { addToCart } = useContext(ShoppingCartContext);

    const meats = [
        { id: 1, name: 'Boneless Chicken, 1 kg', price: 72, mrp: 120.55, img: 'image/Screenshot (128).png' },
        { id: 2, name: 'Chicken Breast, (approx. 400 to 600 g)', price: 44, mrp: 73.97, img: 'image/Screenshot (136).png' },
        { id: 3, name: 'Chicken Breast', price: 150, mrp: 205.48, img: 'image/Screenshot (137).png' },
        { id: 4, name: 'Chicken Nuggets', price: 74, mrp: 106.84, img: 'image/Screenshot (138).png' },
        { id: 5, name: 'Chicken Seekh kebab', price: 70, mrp: 101.36, img: 'image/Screenshot (139).png' },
        { id: 6, name: 'Chicken Shammi Kebab 1 Pack/(400 g - 600 g)', price: 24, mrp: 30, img: 'image/Screenshot (140).png' },
        { id: 7, name: 'Protein Eggs', price: 23, mrp: 31, img: 'image/Screenshot (141).png' },
        { id: 8, name: 'Large Prawns - Pack', price: 35, mrp: 49, img: 'image/Screenshot (142).png' },
        { id: 9, name: 'Seafood Platter', price: 54, mrp: 74, img: 'image/Screenshot (143).png' },
        { id: 10, name: 'Chicken Ham - Pack (500g)', price: 45, mrp: 60, img: 'image/Screenshot (144).png' },
    ];

    return (
        <section className="categories meat-page" id="meat">
            <h1 className="heading">
                Meat <span>products</span>
            </h1>
            <div className="box-container">
                {meats.map((meat) => (
                    <div className="box" key={meat.id}>
                        <img src={meat.img} alt={meat.name} />
                        <h3>{meat.name}</h3>
                        <p>
                            MRP: ₹{meat.mrp.toFixed(2)}<br />
                            You Save: {(100 - ((meat.price / meat.mrp) * 100)).toFixed(0)}% OFF <br />
                            Price: ₹{meat.price}
                        </p>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => addToCart(meat)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
