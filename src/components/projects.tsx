import React from 'react';

const Projects = () => (
  <div className="content">
    <h1>Projects</h1>
    <article>
      <h2>
        <a href="https://d1diosomfszyrs.cloudfront.net/">Planetstack</a>
      </h2>
      <p>
        A simple game of base-building demonstrating WebSocketApi.{' '}
        <a href="https://blog.100daysofcloud.com/building-real-time-serverless-web-applications-with-aws-api-gateway-websocket-apis-cks7wumow046c22s14s3o9scg">
          Read more
        </a>
        .
      </p>
    </article>
    <article>
      <h2>
        <a href="https://rego.fyi">rego.fyi</a>
      </h2>
      <p>
        A 100% serverless{' '}
        <a href="https://www.openpolicyagent.org/docs/latest/">
          Open Policy Agent
        </a>{' '}
        implementation. Have you ever wanted a complex decision engine in an API
        Gateway Authorizer? This is how.
      </p>
    </article>
    <article>
      <h2>
        <a href="https://github.com/elthrasher/http-lambda-invoker">
          http-lambda-invoker
        </a>
      </h2>
      <p>
        A minimal Docker image that can proxy traffic to a local Lambda function
        as part of a Docker composition. The idea here is developers using
        (mostly existing, legacy) containers and Lambda together in a local
        environment.
      </p>
    </article>
  </div>
);

export default Projects;
