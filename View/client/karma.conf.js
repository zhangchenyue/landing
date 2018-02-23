// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

const path = require('path');
module.exports = function (config) {
  const reportOutput = config.reportOutput ? config.reportOutput : path.join(__dirname, '../ut');
  const covJson = reportOutput + '/coverage.json';
  const covHtml = reportOutput + '/html';
  config.set({
    basePath: '',
    files: [
      'node_modules/jquery/dist/jquery.js'
    ],
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-coverage'),
      require('karma-remap-coverage'),
      require('karma-sonarqube-unit-reporter'),
      require('karma-tfs-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      reporters: [
        { type: 'in-memory' },
        { type: 'cobertura', dir: reportOutput, subdir: 'cobertura', file: 'cobertura-coverage.xml' },
        { type: 'lcovonly', dir: reportOutput, subdir: 'coverageReporter', file: 'coverage.lcov' }
      ]
    },
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST',
      outputDir: reportOutput + '/sonarQubeUnitReporter/',
      outputFile: 'sonar_report.xml',
      useBrowserName: false
    },
    tfsReporter: {
      outputDir: reportOutput + '/tfsReporter/',
      outputFile: 'testresult.trx'
    },
    remapCoverageReporter: {
      'text': null,
      'text-summary': null,
      json: covJson,
      html: covHtml
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['mocha', 'coverage','remap-coverage','tfs','sonarqubeUnit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};