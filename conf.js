// conf.js
exports.config = {
  params: {
    defaultTimeOut: 10000
  },
  getPageTimeout: 10000,
  allScriptsTimeout: 19000,
  elementTimeout: 10000,
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 100000
  },
  multiCapabilities: [{
    browserName: 'chrome',
    maxInstances: 4,
    shardTestFiles: true,
    chromeOptions: {
      args: [
        '--start-maximized',
        'disable-extensions',
        '--disable-infobars'
      ]
    }
  }, {
    name: 'tablet',
    browserName: 'chrome',
    maxInstances: 4,
    shardTestFiles: true,
    chromeOptions: {
      args: [
        '--start-maximized',
        'disable-extensions',
        '--disable-infobars'
      ]
    }
  }],
  specs: ['spec.js'],
}