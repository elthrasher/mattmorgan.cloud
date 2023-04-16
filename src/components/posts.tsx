import React from 'react';

const Posts = () => (
  <div className="content">
    <h1>Blogposts</h1>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/avoiding-the-serverless-workflow-antipattern-2ba1">
          Avoiding the Serverless Workflow Antipattern
        </a>
      </h2>
      <p>A thinly veiled argument in favor of managed services.</p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/appreciation-for-community-managers-26ol">
          Appreciation for Community Managers
        </a>
      </h2>
      <p>Holiday special.</p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/lambda-powertools-typescript-is-generally-available-1dm8">
          Lambda Powertools TypeScript is Generally Available
        </a>
      </h2>
      <p>What's changed since the first look?</p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/how-to-use-source-maps-in-typescript-lambda-functions-with-benchmarks-4bo4">
          How to Use Source Maps in TypeScript Lambda Functions (with
          Benchmarks)
        </a>
      </h2>
      <p>
        Source Maps are needed to get useful stack traces out of TypeScript
        applications and they're easy to enable. See my benchmarks and you'll be
        using them in production too!
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/first-look-at-lambda-powertools-typescript-2k3p">
          First Look at Lambda Powertools TypeScript
        </a>
      </h2>
      <p>Lambda Powertools TypeScript hit beta, so I took a look!</p>
    </article>
    <article>
      <h2>
        <a href="https://www.freecodecamp.org/news/aws-cdk-v2-three-tier-serverless-application/">
          AWS CDK v2 Tutorial - How to Create a Three-Tier Serverless
          Application
        </a>
      </h2>
      <p>
        My first real beginner article and first for FreeCodeCamp. Set up a
        three-tier serverless app with AWS CDK and some nice tooling tricks.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/testing-the-async-cloud-with-aws-cdk-33aj">
          Testing the Async Cloud with AWS CDK
        </a>
      </h2>
      <p>
        How to test asynchronous workflows using EventBridge and Step Functions
        with CI/CD and automated rollback!
      </p>
    </article>
    <article>
      <h2>
        <a href="https://blog.100daysofcloud.com/building-real-time-serverless-web-applications-with-aws-api-gateway-websocket-apis-cks7wumow046c22s14s3o9scg">
          Building Real-Time Serverless Web Applications with AWS API Gateway
          WebSocket APIs
        </a>
      </h2>
      <p>
        I collaborated with{' '}
        <a href="https://twitter.com/andrewbrown">Andrew Brown</a> for his{' '}
        <a href="https://blog.100daysofcloud.com/">100 Days of Cloud blog</a> to
        do a deep dive on WebSocketAPI. In the process, I built a{' '}
        <a href="https://d1diosomfszyrs.cloudfront.net/">game</a> and learned
        quite a lot about API Gateway. My post was featured on{' '}
        <a href="https://hashnode.com/">hasnode</a>.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/your-complete-api-gateway-and-cors-guide-11jb">
          Your Complete API Gateway and CORS Guide
        </a>
      </h2>
      <p>
        This one came from a conversation I had with some developers who were
        struggling with CORS. Like virtually everybody else, I have to look this
        stuff up each time and the APIGW implementation is far from intuitive. I
        figured it would be a good idea to put it all down in one place!
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/aws-cdk-fullstack-polyglot-with-asset-bundling-318h">
          AWS CDK - Fullstack Polyglot with Asset Bundling
        </a>
      </h2>
      <p>
        Multi-language builds and infrastructure-as-code all in one place! I was
        really into golang in early 2021. I also wanted to really understand
        asset bundling in AWS CDK.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/rego-fyi-a-study-in-serverless-authorization-with-open-policy-agent-1ipi">
          rego.fyi: A Study in Serverless Authorization with Open Policy Agent
        </a>
      </h2>
      <p>
        Looking at using{' '}
        <a href="https://www.openpolicyagent.org/docs/latest/">
          Open Policy Agent
        </a>{' '}
        in a serverless environment. I think this is a good idea, but haven't
        applied this one yet. I did create a sample app at{' '}
        <a href="https://rego.fyi">rego.fyi</a>.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/aws-builders/aws-cdk-one-step-s3-websites-with-esbuild-2e3h">
          AWS CDK - One-Step S3 Websites with esbuild
        </a>
      </h2>
      <p>
        Mixing React, <a href="https://esbuild.github.io/">esbuild</a> and AWS
        CDK. This is before I learned of <a href="https://vitejs.dev/">Vite</a>.
        If I wrote this article today it would be much the same, but would use
        Vite instead of a custom esbuild.ts.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/mocking-aws-with-jest-and-typescript-199i">
          Mocking AWS with Jest (and TypeScript)
        </a>
      </h2>
      <p>
        How I use lightweight (very, very lightweight) mocks to write unit tests
        in cloud native applications.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/aws-cdk-aws-lambda-nodejs-module-9ic">
          AWS CDK - aws-lambda-nodejs Module
        </a>
      </h2>
      <p>
        Checking out the{' '}
        <a href="https://docs.aws.amazon.com/cdk/api/latest/docs/aws-lambda-nodejs-readme.html">
          aws-lambda-nodejs
        </a>{' '}
        construct from CDK. This was a great one to write because the first
        version of this construct was not something I was too keen on using. You
        can see in the article comments that{' '}
        <a href="https://twitter.com/jogoldwasser">Jonathan Goldwasser</a>,
        construct author, was listening to feedback. A couple of versions later,
        I now consider the construct to be indespensible.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/aws-cdk-api-gateway-service-integration-with-dynamodb-2ek0">
          AWS CDK - API Gateway Service Integration with DynamoDB
        </a>
      </h2>
      <p>
        One of the really cool things about being in the serverless space is you
        can connect managed services together with no compute. In this one, I
        build a direct API Gateway-DynamoDB integration with no Lambda.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/integrating-sam-into-container-workflows-with-http-lambda-invoker-4o8">
          Integrating SAM Into Container Workflows With http-lambda-invoker
        </a>
      </h2>
      <p>
        I wrote a couple of articles about using the{' '}
        <a href="https://aws.amazon.com/serverless/sam/">SAM</a> framework
        before becoming invested in CDK. The problem I'm trying to solve here is
        how to introduce serverless to teams that are already working with
        containers. I didn't really get a chance to see this one through in
        practice, but there's always a chance I'll need to do this again some
        day.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/managing-multiple-functions-with-aws-sam-and-webpack-1581">
          Managing Multiple Functions with AWS SAM and Webpack
        </a>
      </h2>
      <p>
        My other <a href="https://aws.amazon.com/serverless/sam/">SAM</a>{' '}
        article. Here I'm using <a href="https://webpack.js.org/">Webpack</a> to
        bundle TypeScript functions for use in SAM. I've seen shifted focus to
        <a href="https://esbuild.github.io/">esbuild</a> and{' '}
        <a href="https://aws.amazon.com/cdk/">CDK</a>.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/exploring-aws-cdk-a-million-a-minute-dynamodb-and-providerframework-e92">
          Exploring AWS CDK - A Million a Minute (DynamoDB and
          ProviderFramework)
        </a>
      </h2>
      <p>
        Using CDK and Custom Resources to generate a million random DynamoDB
        items in under a minute. Good for generating load and/or testing.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/exploring-aws-cdk-loading-dynamodb-with-custom-resources-jlf">
          Exploring AWS CDK - Loading DynamoDB with Custom Resources
        </a>
      </h2>
      <p>
        A data generator for DynamoDB using AWS CDK. Unlike the "million a
        minute" version, this one generates the data and plugs them right into
        the generated Cfn, so you get a pretty crazy template.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/exploring-aws-cdk-step-functions-1d1e">
          Exploring AWS CDK - Step Functions
        </a>
      </h2>
      <p>
        My first CDK article! I wanted to learn both CDK and Step Functions and
        wound up learning them together by rewriting an example project.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://dev.to/elthrasher/on-figs-and-apples-3chp">
          On Figs and Apples
        </a>
      </h2>
      <p>
        I found that strangling my application wasn't doing it and wanted to
        know why.
      </p>
    </article>
  </div>
);

export default Posts;
