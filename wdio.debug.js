'use strict'

exports.config = {
  specs: [
    './testE2e/tests/*.js'
  ],
  debug: true,
  exclude: [],
  maxInstances: 1,
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  waitforTimeout: (24 * 60 * 60 * 1000),
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: (24 * 60 * 60 * 1000),
  },
  capabilities: [
    { browserName: 'phantomjs' }
  ],
  services: ['phantomjs']
}