import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our
        {' '}
        <span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/b1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st May, 2021
              </a>
            </div>
            <h3>Why Online Grocery Shopping is Preferable than Traditional Shopping?</h3>
            <p>
            E-commerce is the biggest online evolution to connect with their customers easily and offer same day grocery delivery s...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/b2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                4th May, 2024
              </a>
            </div>
            <h3>8 Major Advantages of Online Grocery Shopping.</h3>
            <p>
            While making online grocery shopping and delivery services in London, you must check the cashbacks, discounts and offers...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/b3.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                21st May, 2024
              </a>
            </div>
            <h3>Effectual Ways to Save Money & Time through Online Grocery Shopping</h3>
            <p>
            The online grocery delivery service offers avant-garde grocery products to customers and processes efficient delivery to...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <img src="image/b4.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                10th May, 2024
              </a>
            </div>
            <h3>How Covid-19 changed consumer behaviour to buy groceries Online?</h3>
            <p>
            FreshCart is the best Canadian online grocery ordering and delivery platform that offers a diverse variety of products...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <img src="image/b5.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st April, 2024
              </a>
            </div>
            <h3>8 Must Have Tips for Online Grocery Shopping Right Now</h3>
            <p>
            While making online grocery shopping and delivery services in London, you must check the cashbacks, discounts and offers...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <img src="image/b6.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                3rd January, 2024
              </a>
            </div>
            <h3>How Consumers Overcome the Barriers during Online Grocery Shopping?</h3>
            <p>
            The best online grocery shopping platform offers special discounts and offers to customers including seasonal and festiv...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <img src="image/b7.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                21st February, 2024
              </a>
            </div>
            <h3>10 Most Common Challenges Faced by Online Grocery Businesses</h3>
            <p>
            FreshCart grocery delivery services offers quality products and freshness of grocery items in London, which gives custo...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box">
          <img src="image/b8.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                31st May, 2024
              </a>
            </div>
            <h3>How online grocery delivery stores can be effective and efficient?</h3>
            <p>
            FreshCart is the best grocery delivery service in London, Ontario. It offers same-day pickup and delivery services of g...
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}