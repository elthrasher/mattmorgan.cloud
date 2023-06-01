import React from 'react';
import ss22 from '../assets/Serverless Summit 22 - Sfn Steep Curve Max Power - Matt Morgan.pdf';
import sfn23 from '../assets/Step Functions Deep Dive.pdf';

const Appearances = () => (
  <div className="content">
    <h1>Appearances</h1>
    <article>
      <h2>
        AWS Step Functions Deep Dive -{' '}
        <a href="https://sga.com/events">Serverless Boston/NYC</a> (April 21,
        2023)
      </h2>
      <p>
        <a href={sfn23}>Slides</a>
      </p>
    </article>
    <article>
      <h2>
        AWS Step Functions: Steep Curve; Maximum Power -{' '}
        <a href="https://www.serverless-summit.io/">Serverless Summit 2022</a>{' '}
        (November 16 & 17, 2022)
      </h2>
      <p>
        <a href="https://youtu.be/q5QOgrMUBUA">YouTube Link</a>
      </p>
      <p>
        <a href={ss22}>Slides</a>
      </p>
    </article>
    <article>
      <h2>
        The Serverless Mindset -{' '}
        <a href="https://awscommunitydaydmv.super.site/">
          AWS Community Day DMV
        </a>{' '}
        (September 30, 2022)
      </h2>
      <p>
        <a href="https://docs.google.com/presentation/d/1yeCit3bVTjFyNTHzzEKfqDQ5Vlp-PT3T997uDCeCEMk/edit?usp=sharing">
          Slides
        </a>
      </p>
    </article>
    <article>
      <h2>
        The Local Cloud - <a href="https://www.cdkday.com/">CDK Day</a> (May 26,
        2022)
      </h2>
      <p>
        <a href="https://youtu.be/Ey7bNVT4W1g?t=10036">YouTube Link</a>
      </p>
    </article>
    <article>
      <h2>
        Accelerate cloud-native development with AWS CDK custom constructs -{' '}
        <a href="https://aws.amazon.com/events/summits/washington-dc/">
          AWS Summit DC
        </a>{' '}
        (May 25, 2022)
      </h2>
      <p>
        <a href="https://youtu.be/rb-nCQuyK1M">YouTube Link</a>
      </p>
    </article>
    <article>
      <h2>
        The Serverless Mindset -{' '}
        <a
          href="https://vbrownbag.com/2022/02/episode-followup-the-serverless-mindset-presented-by-matt-morgan/"
          id="vbrownbag"
        >
          vBrownBag
        </a>{' '}
        (February 16, 2022)
      </h2>
      <p>
        <a href="https://youtu.be/qbb8YYm_ORI">YouTube Link</a>
      </p>
      <p>
        <a href="https://docs.google.com/presentation/d/1OFV29csgGOZUf9mHphwiwzmmnwN4nyGJov_aIy2eaJ0/edit?usp=sharing">
          Slides
        </a>
      </p>
    </article>
    <article>
      <h2>
        Async Testing with AWS CDK -{' '}
        <a href="https://www.youtube.com/channel/UCevlD4Tabq5Dq8YkTcctolg">
          Cloud-Driven Development
        </a>{' '}
        (October 6, 2021)
      </h2>
      <p>
        <a href="https://www.youtube.com/watch?v=4wtgKbNbzHo&t=6s">
          YouTube Link
        </a>
      </p>
    </article>
  </div>
);

export default Appearances;
