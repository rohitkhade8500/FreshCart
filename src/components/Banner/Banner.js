
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/banner-bg.webp") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          fresh and
          {' '}
          <span>organic</span>
          {' '}
          products
        </h3>
        <p>
          At FreshCart we provide Fresh And Organic Food Products at Budget price with Great Discounts.
        </p>
        <button type="button" className="btn">
          shop now
        </button>
      </div>
    </section>
  );
}