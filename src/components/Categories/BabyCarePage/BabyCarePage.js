import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './BabyCarePage.css';

export default function BabyCarePage() {
    const { addToCart } = useContext(ShoppingCartContext);

    const babycare = [
        { id: 1, name: 'baby soap', price: 45, mrp: 50, img: 'image/babysoap.avif' },
        { id: 2, name: 'Johnsons Baby Shampoo', price: 120, mrp: 150, img: 'image/babyshampoo.jpg' },
        { id: 3, name: 'Daber lal baby oil', price: 105, mrp: 120, img: 'image/babyoil1.jpg' },
        { id: 4, name: 'Johnson Baby Powder', price: 80, mrp: 95, img: 'image/babypowder1.jpg' },
        { id: 5, name: 'Pamper Baby Wipes', price: 72, mrp: 78, img: 'image/babywipes.jpg' },
        { id: 6, name: 'Mamy Poko Pants Diapers', price: 270, mrp: 290, img: 'image/diper.jpeg' },
        { id: 7, name: 'Milk Bottle/Feeder', price: 110, mrp: 130, img: 'image/milkbottle.jpg' },
        { id: 8, name: 'Baby Clothes Set', price: 450, mrp: 475, img: 'image/babyclothes.jpg' },
        { id: 9, name: 'Johnsons Baby Soap', price: 45, mrp: 55, img: 'image/babysoap.avif' },
        { id: 10, name: 'Cerelac Baby Food', price: 190, mrp: 200, img: 'image/babyfood1.jpg' },
    ];

    return (
        <section className="categories babycare-page" id="babycare">
            <h1 className="heading">
                Baby Care <span>products</span>
            </h1>
            <div className="box-container">
                {babycare.map((item) => (
                    <div className="box" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>
                            MRP: ₹{item.mrp.toFixed(2)}<br />
                            You Save: {(100 - ((item.price / item.mrp) * 100)).toFixed(0)}% OFF <br />
                            Price: ₹{item.price}
                        </p>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => addToCart(item)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
