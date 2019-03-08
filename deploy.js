/* eslint-env node */
'use strict';
module.exports = function(deployTarget) {
  let ENV = {
    build: {
        localDir: 'build/',
        deleteRemoved: false,
        s3Params: {
          Bucket: 's3-deployer'
        },
    },
    s3:{
      accessKeyId: 'AKIAIQUGD47YEH734Q6Q',
      secretAccessKey: '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',
      region: 'US West (Oregon)',
      sslEnabled: true,
      Bucket:'s3-deployer'
    }
    // include other plugin configuration that applies to all deploy targets here
  };
if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }
if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }
if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }
// Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};