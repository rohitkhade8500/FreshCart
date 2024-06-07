import React from 'react';
import './Reviews.css';

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="content">
        <h1 className="heading">
          customer
          {' '}
          <span>reviews</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/pic-1.png" alt="Customer Review 1" />
            <h3>John Doe</h3>
            <p>
September 7th, 2023
Received my order a week back. Wanted to say that even though the order reached me much later than expected, the mangoes were in perfect condition & truly delicious! Reminded me of mangoes I ate in India during my childhood. Thank you very much & have a wonderful weekend.</p>
          </div>
          <div className="box">
            <img src="image/pic-3.png" alt="Customer Review 2" />
            <h3>Jane Doe</h3>
            <p>August 21st, 2023
My order was on my porch when l arrived home just now. Thank you so much! This is my first time ordering with your company. I want to continue to order from you. Since the pandemic, over 95% of my purchases are on line. I find it to be way more convient. So, PLEASE forgive me for being a little upset. It wasn't with you but the carrier that delivered the package because the mistake has happened a few times. So please keep my information on file about my home's description so this won't happen again. Thanks again so much & have a great weekend!</p>
          </div>
          <div className="box">
            <img src="image/pic-2.png" alt="Customer Review 3" />
            <h3>Sam Smith</h3>
            <p>January 16th, 2024
Excellent Work, This is a good and Informative post. In this post I truly got quality information. I am definitely looking more in this post. Really very useful and Informative information are provided here. Thank you so much for writing keep up like this. Thanks</p>
          </div>
          <div className="box">
            <img src="image/pic-2.png" alt="Customer Review 4" />
            <h3>Lisa Ray</h3>
            <p>September 7th, 2023
Received my order a week back. Wanted to say that even though the order reached me much later than expected, the mangoes were in perfect condition & truly delicious! Reminded me of mangoes I ate in India during my childhood. Thank you very much & have a wonderful weekend.</p>
          </div>
          <div className="box">
            <img src="image/pic-4.png" alt="Customer Review 5" />
            <h3>Mike Ross</h3>
            <p>August 21st, 2023
My order was on my porch when l arrived home just now. Thank you so much! This is my first time ordering with your company. I want to continue to order from you. Since the pandemic, over 95% of my purchases are on line. I find it to be way more convient. So, PLEASE forgive me for being a little upset. It wasn't with you but the carrier that delivered the package because the mistake has happened a few times. So please keep my information on file about my home's description so this won't happen again. Thanks again so much & have a great weekend!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
