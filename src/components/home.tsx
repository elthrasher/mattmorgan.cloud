import './home.css';

import React from 'react';
import photo from '../assets/photo medium.jpeg';

const Home = () => (
  <div>
    <p>
      I'm Matt. I've worked in edtech for more than 20 years. I started as a
      ColdFusion developer in the early days of web. I put in some years doing
      Java. I've worked mostly in fullstack{' '}
      <a href="https://www.typescriptlang.org/">TypeScript</a> since 2017. I
      even{' '}
      <a href="https://www.amazon.com/gp/product/B093Y29GW3">co-wrote a book</a>{' '}
      on the subject!
    </p>
    <p>
      I started blogging in 2019. I attended{' '}
      <a href="https://reinvent.awsevents.com/">AWS re:Invent</a> that year and
      it really changed how I think about application design and development.
      Additionally <a href="https://aws.amazon.com/cdk/">AWS CDK</a> is a
      game-changer to me. I went all-in on serverless and
      infrastructure-as-code. I'm also an{' '}
      <a href="https://aws.amazon.com/developer/community/community-builders/">
        AWS Community Builder
      </a>
      .
    </p>
    <p>
      This website is to get all my stuff in one place and maybe add a little
      commentary. Please connect with me. Also believe science, be kind and{' '}
      <a href="https://blacklivesmatter.com/">black lives matter</a>.
    </p>
    <p className="img">
      <img src={photo} />
    </p>
  </div>
);

export default Home;
