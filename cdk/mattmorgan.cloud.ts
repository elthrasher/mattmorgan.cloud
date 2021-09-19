import { App } from '@aws-cdk/core';
import { MattMorganCloudStack } from './mattmorgan.cloud-stack';

const app = new App();

new MattMorganCloudStack(app, 'MattMorganCloudStack', {
  description: 'Matt Morgan Cloud Stack',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  stackName: 'mattmorgancloud-stack',
});
