
import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/feature-img-1.png" alt="" />
            <h3>fresh and organic</h3>
            <p>At FreshCart You will always get Fresh and Organic Products.</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="image/feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>At FreshCart if you are eligible for free delivery then you will absoulutly get it.</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="image/feature-img-3.png" alt="" />
            <h3>easy payment</h3>
            <p>At FreshCart there are multiple and easy payment methods available.</p>
            <a href="/" className="btn">read more</a>
          </div>

          <div className="box">
            <img src="image/product-return.png" alt="" />
            <h3>Product return</h3>
            <p>It is the most important concern of the customer whether the product will be replaced or not in case of any damage or other related problems. You must add a feature that will allow the customer to return the products.

            </p>
            <a href="/" className="btn">read more</a>
          </div>

          <div className="box">
            <img src="image/mpo.jpg" alt="" />
            <h3>Multiple payment options
</h3>
            <p>Every individual may not be satisfied by a single payment option and they might search for a particular payment option that is not available at your online store. Your major concern must be customer satisfaction and thus, multiple payment options are necessary.

</p>
            <a href="/" className="btn">read more</a>
          </div>

          <div className="box">
            <img src="image/easy-returns.jpg" alt="" />
            <h3>Easy returns</h3>
            <p>You have to provide your customers with ease of everything. If they will get an option of easy return, they will definitely like to shop from your store.

</p>
            <a href="/" className="btn">read more</a>
          </div>

          <div className="box">
            <img src="image/time-money.jpg" alt="" />
            <h3>Time and Money Savings</h3>
            <p>By eliminating the need for physical store visits, on-demand grocery apps save you valuable time that can be better spent on other activities.
</p>
            <a href="/" className="btn">read more</a>
          </div>

          <div className="box">
            <img src="image/wide.webp" alt="" />
            <h3>Wide Variety of Products</h3>
            <p>On-demand grocery apps offer an extensive range of products, providing customers with access to a wide selection of fresh products, household items, and even specialty products
</p>
            <a href="/" className="btn">read more</a>
          </div>

          <div className="box">
            <img src="image/convinience.jpeg" alt="" />
            <h3>Convenience at Your Fingertips</h3>
            <p>With just a few taps, you can create your shopping list, select the items you need, and schedule a convenient delivery or pick-up time.

</p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
