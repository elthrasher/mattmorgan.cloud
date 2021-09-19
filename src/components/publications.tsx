import React from 'react';
import book from '../assets/book.jpeg';

const Publications = () => (
  <div className="content">
    <h1>Publications</h1>
    <article>
      <h2>
        <a href="https://www.amazon.com/gp/product/B093Y29GW3">
          The TypeScript Workshop
        </a>
      </h2>
      <p>
        Written for{' '}
        <a href="https://www.packtpub.com/product/the-typescript-workshop/9781838828493">
          Packt Publishing
        </a>{' '}
        with Ben Grynhaus, Jordan Hudgens, Rayon Hunte and Wekoslav Stefanovski.
      </p>
    </article>
    <a href="https://www.amazon.com/gp/product/B093Y29GW3">
      {' '}
      <img src={book} />
    </a>
  </div>
);

export default Publications;
