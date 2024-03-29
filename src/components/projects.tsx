import React from 'react';

const Projects = () => (
  <div className="content">
    <h1>Projects</h1>
    <article>
      <h2>
        <a href="https://constructs.dev/packages/aws-logs-comptroller">
          AWS Logs Comptroller
        </a>
      </h2>
      <p>
        Pure Amazon States Language Step Function implementation of a scheduled
        CloudWatch Log Retention/Pruner.
      </p>
      <p>
        Also check out the{' '}
        <a href="https://serverlessrepo.aws.amazon.com/applications/us-east-1/336848621206/sam-logs-comptroller">
          SAM version
        </a>
        .
      </p>
      <h2>
        <a href="https://github.com/elthrasher/rds-iam-auth">
          RDS IAM Authentication
        </a>
      </h2>
      <p>
        Reference implementation of{' '}
        <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
          IAM Database Authentication
        </a>{' '}
        for both MySQL and PostgreSQL written in{' '}
        <a href="https://aws.amazon.com/cdk/">AWS CDK</a> and ready to deploy.
      </p>
    </article>
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
