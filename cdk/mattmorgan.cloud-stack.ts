import {
  AssetHashType,
  CfnOutput,
  DockerImage,
  RemovalPolicy,
  Stack,
  StackProps,
} from 'aws-cdk-lib';
import {
  Certificate,
  CertificateValidation,
} from 'aws-cdk-lib/aws-certificatemanager';
import {
  Distribution,
  OriginAccessIdentity,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import {
  ARecord,
  PublicHostedZone,
  RecordTarget,
} from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { BlockPublicAccess, Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { execSync, ExecSyncOptions } from 'child_process';
import { Construct } from 'constructs';
import { copySync } from 'fs-extra';
import { join } from 'path';
import Swa from 'serverless-website-analytics';

export class MattMorganCloudStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const websiteBucket = new Bucket(this, 'WebsiteBucket', {
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      'OriginAccessIdentity'
    );
    websiteBucket.grantRead(originAccessIdentity);

    const execOptions: ExecSyncOptions = {
      stdio: ['ignore', process.stderr, 'inherit'],
    };

    const bundle = Source.asset(join(__dirname, '../src'), {
      assetHashType: AssetHashType.OUTPUT,
      bundling: {
        command: [
          'sh',
          '-c',
          'echo "Docker build not supported. Please install esbuild."',
        ],
        image: DockerImage.fromRegistry('alpine'),
        local: {
          tryBundle(outputDir: string) {
            try {
              execSync('esbuild --version', execOptions);
            } catch /* istanbul ignore next */ {
              return false;
            }
            execSync('npm run build', execOptions);
            copySync(join(__dirname, '../dist'), outputDir);
            return true;
          },
        },
      },
    });

    const domainName = 'mattmorgan.cloud';

    const hostedZone = PublicHostedZone.fromLookup(this, 'HostedZone', {
      domainName,
      privateZone: false,
    });

    const certificate = new Certificate(this, 'WebsiteCert', {
      domainName,
      subjectAlternativeNames: [
        'analytics.mattmorgan.cloud',
        'login.analytics.mattmorgan.cloud',
      ],
      validation: CertificateValidation.fromDns(hostedZone),
    });

    const distribution = new Distribution(this, 'Distribution', {
      certificate,
      defaultBehavior: {
        origin: new S3Origin(websiteBucket, { originAccessIdentity }),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      domainNames: [domainName],
      errorResponses: [
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
        },
      ],
    });

    new BucketDeployment(this, 'DeployWebsite', {
      destinationBucket: websiteBucket,
      distribution,
      distributionPaths: ['/*'],
      sources: [bundle],
    });

    new ARecord(this, 'ARecord', {
      zone: hostedZone,
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });

    new Swa(this, 'analytics', {
      allowedOrigins: ['mattmorgan.cloud'],
      // auth: {
      //   cognito: {
      //     loginSubDomain: 'login',
      //     users: [{ email: 'elthrasher@gmail.com', name: 'Matt Morgan' }],
      //   },
      // },
      awsEnv: {
        account: this.account,
        region: this.region,
      },
      domain: {
        name: 'analytics.mattmorgan.cloud',
        certificate,
        hostedZone,
      },
      environment: 'prod',
      sites: ['mattmorgan.cloud'],
    });

    new CfnOutput(this, 'webUrl', { value: domainName });
  }
}
