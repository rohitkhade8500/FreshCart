import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './LunchBoxesPage.css';

export default function LunchBoxesPage() {
    const { addToCart } = useContext(ShoppingCartContext);

    const lunchBoxes = [
        { id: 1, name: 'Insulated Lunch Box with Stainless Steel Containers', price: 450, mrp: 500.00, img: 'image/lB1.jpg' },
        { id: 2, name: 'Lunch Bag with Shoulder Strap and Insulated Compartment', price: 237.50, mrp: 250.00, img: 'image/lB2.webp' },
        { id: 3, name: 'Compact Insulated Lunch Bag with Adjustable Strap', price: 190, mrp: 200.00, img: 'image/lB3.webp' },
        { id: 4, name: 'Multi-compartment Bento Lunch Box with Fork and Spoon', price: 510, mrp: 600.00, img: 'image/lB4.webp' },
        { id: 5, name: 'Large Capacity Lunch Bag with Detachable Shoulder Strap', price: 270, mrp: 300.00, img: 'image/lB5.webp' },
        { id: 6, name: 'Leak-proof Stainless Steel Lunch Box with Locking Lid', price: 484, mrp: 550.00, img: 'image/lB6.webp' },
        { id: 7, name: 'Thermo Click Lunch Pack - Stainless Steel, Big, Green', price: 749, mrp: 845, img: 'image/lB7.webp' },
        { id: 8, name: 'Borosil Grace Round Transparent Glass Tiffin Box With Vertical Green Bag', price: 710, mrp: 829, img: 'image/lB8.webp' },
        { id: 9, name: 'Borosil Carry Fresh Stainless Steel Lunch Box/Tiffin Box Insulated ', price: 1299, mrp: 1540, img: 'image/lB9.webp' },
        { id: 10, name: 'Unica Mangiamo Lunch Box - Blue, Leak Resistant, Microwave Safe, Perfect', price: 99, mrp: 199, img: 'image/lB10.webp' },
    ];

    return (
        <section className="categories" id="lunch-boxes">
            <h1 className="heading">
                Lunch Boxes & <span>Bags</span>
            </h1>
            <div className="box-container">
                {lunchBoxes.map((item) => (
                    <div className="box" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>
                            MRP: ₹{item.mrp.toFixed(2)} <br />
                            You Save: {((1 - item.price / item.mrp) * 100).toFixed(0)}% OFF <br />
                            Price: ₹{item.price}
                        </p>
                        <button type="button" className="btn" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
