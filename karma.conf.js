// Karma configuration
// Generated on Tue Mar 08 2016 16:33:56 GMT+0100 (CET)
var path = require('path');

var webpackConfig = require('./webpack.config.js');

webpackConfig.module = {};

webpackConfig.module.preLoaders = [{
  test: /\.js$/,
  include: path.resolve('js/'),
  loader: 'isparta'
}];
webpackConfig.module.loaders = [{
  test: /\.js$/, loader: 'babel-loader'
}];
webpackConfig.module.postLoaders = [{
  test: /\.js$/,
  exclude: /(spec|node_modules|bower_components)\//,
  loader: 'istanbul-instrumenter' 
}];
webpackConfig.devtool = 'inline-source-map';

console.log('this is webpackConfig', webpackConfig);

module.exports = function(config) {
  
  config.set({
    
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: ['jasmine' ], //use the mocha test framework
    files: [
      
      {
        pattern: './tests.webpack.js', watched: false
      }
       //just load this file
    ],
    plugins: [ 'karma-chrome-launcher', 'karma-chai', 'karma-mocha',
      'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
      'karma-mocha-reporter', 'karma-jasmine', 'karma-threshold-reporter'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack'] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'mocha' ], //report results in this format
    
    mochaReporter: {
        output: 'full'
    },
    
    
    reporters: ['mocha', 'coverage', 'threshold'],
    singleRun: true,
    webpack: {
      resolve: {
        alias: {
          components: __dirname + '/js/components'
        },
        extensions: ['', '.js', '.sass']
      },  

      module: {
        preLoaders: [{
            test: /.js$/,
            include: path.resolve('js/'),
            exclude: /(.spec)/,
            loader: 'istanbul-instrumenter'
        }],
        loaders: [
          { test: /\.js$/,  loader: 'babel-loader' }
        ],
      },
      devtool: 'inline-source-map', //just do inline source maps instead of the default
    },
  
    webpackMiddleware: {
      noInfo: true //please don't spam the console when running in karma!
    },
    coverageReporter: {
      type: 'html', //produces a html document after code is run
      dir: 'coverage/', //path to created html doc
      includeAllSources: true
    }
    
  });
  
  
  /*
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //'js¡spec.js'
      'tests.webpack.js'
    ],


    // list of files to exclude
    exclude: [
      json',
      '*.json'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        // add webpack as preprocessor
        //'jsspec/*.js': ['webpack']
      'tests.webpack.js': ['webpack', 'sourcemap']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    
    webpack: webpackConfig,
    
    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        noInfo: true
    },
    
    coverageReporter: {
        reporters: [
            { type: 'html', dir: path.resolve('./coverage', 'ui-coverage'), subdir: 'html' },
            { type: 'cobertura', dir: path.resolve('./coverage', 'ui-coverage'), subdir: 'cobertura' },
            { type: 'text-summary' }
        ],
        includeAllSources: true
    },
    
    plugins: ['karma-chrome-launcher', 'karma-chai', 'karma-mocha', 'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage', 'karma-mocha-reporter', 'karma-jasmine']
  })
  */
}
