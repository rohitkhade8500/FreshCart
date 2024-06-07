import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Header/ShoppingCart/ShoppingCartContext';
import './DairyProducts.css';

export default function DairyProducts() {
    const { addToCart } = useContext(ShoppingCartContext);

    const dairyProducts = [
        { id: 1, name: 'Butter, 1 kg', price: 72, mrp: 120.55, img: 'image/pngwing.com (1).png' },
        { id: 2, name: 'Cheese, (approx. 400 to 600 g)', price: 44, mrp: 73.97, img: 'image/pngwing.com (2).png' },
        { id: 3, name: 'Milk - (Bottle), 1 Lt', price: 150, mrp: 205.48, img: 'image/pngwing.com (3).png' },
        { id: 4, name: 'Yogurt - 2 X 1 Lt Multipack', price: 74, mrp: 106.84, img: 'image/yogurt.png' },
        { id: 5, name: 'Cream - 2 x 1 kg Multipack', price: 70, mrp: 101.36, img: 'image/cream.png' },
        { id: 6, name: 'Ghee 1 Pack/(400 g - 600 g)', price: 24, mrp: 30, img: 'image/ghee.png' },
        { id: 7, name: 'Milk Powder - (250g - 300g)', price: 23, mrp: 31, img: 'image/milkp.png' },
        { id: 8, name: 'Whey Products - Pack', price: 35, mrp: 49, img: 'image/whey.png' },
        { id: 9, name: 'Curd - (250 g - 300 g)', price: 54, mrp: 74, img: 'image/curd.png' },
        { id: 10, name: 'Breads - Pack (500g)', price: 45, mrp: 60, img: 'image/bread.png' },
    ];

    return (
        <section className="categories dairy-page" id="dairy">
            <h1 className="heading">
                Dairy <span>products</span>
            </h1>
            <div className="box-container">
                {dairyProducts.map((product) => (
                    <div className="box" key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>
                            MRP: ₹{product.mrp.toFixed(2)}<br />
                            You Save: {(100 - ((product.price / product.mrp) * 100)).toFixed(0)}% OFF <br />
                            Price: ₹{product.price}
                        </p>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
