
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';


export default function Categories() {
  const navigate = useNavigate();

  const handleShopNowClick = (category) => {
    if (category === 'vegetables') {
      navigate('/vegetables');
    } else if (category === 'fresh fruits') {
      navigate('/fresh-fruits');
    }
    else if (category === 'beverages') {
      navigate('/beverages');
    }
    else if (category === 'bakery') {
      navigate('/bakery');
    }
    else if (category === 'snacks') {
      navigate('/snacks');
    }
    else if (category === 'beauty') {
      navigate('/beauty');
    }
    else if (category === 'meat') {
      navigate('/meat');
    }
    else if (category === 'dairy') {
      navigate('/dairy');
    }
    else if (category === 'food') {
      navigate('/food');
    }
    else if (category === 'lunch') {
      navigate('/lunch');
    }
    else if (category === 'cleaners') {
      navigate('/cleaners');
    }
    else if (category === 'babycare') {
      navigate('/babycare');
    }
  };
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products <span>categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/cat-1.png" alt="Vegetables" />
          <h3>Vegetables</h3>
          <p>upto 25% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('vegetables')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/cat-2.png" alt="Fresh Fruits" />
          <h3>Fresh Fruits</h3>
          <p>upto 20% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('fresh fruits')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/be11.png" alt="Beverages" />
          <h3>Beverages</h3>
          <p>upto 30% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('beverages')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/C11.avif" alt="Bakery Cakes" />
          <h3>BakeryCakes Products</h3>
          <p>upto 20% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('bakery')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/sn12.jpeg" alt="Snacks and Branded Foods" />
          <h3>Snacks and Branded Foods</h3>
          <p>upto 35% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('snacks')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/Beautylogo.jpg" alt="Beauty Products" />
          <h3>Beauty and Hygiene Products</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('beauty')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/foodlogo.jpeg" alt="Dairy Products" />
          <h3>Food Products</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('food')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/cat-4.png" alt="Fresh Meat" />
          <h3>Fresh Meat</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('meat')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/lunchlogo.avif" alt="LunchBoxes and Bags" />
          <h3>LunchBoxes and Bags</h3>
          <p>upto 25% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('lunch')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/cleaninglogo.webp" alt="Cleaning Essential" />
          <h3>Cleaning Essential Products</h3>
          <p>upto 20% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('cleaners')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/cat-3.png" alt="Dairy Products" />
          <h3>Dairy Products</h3>
          <p>upto 30% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('dairy')}>shop now</button>
        </div>

        <div className="box">
          <img src="image/babycarelogo.jpg" alt="BabyCare Products" />
          <h3>Baby Care Products</h3>
          <p>upto 28% off</p>
          <button type="button" className="btn" onClick={() => handleShopNowClick('babycare')}>shop now</button>
        </div>

      </div>
    </section>
  );
}
