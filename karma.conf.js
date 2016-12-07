// Karma configuration
// Generated on Wed Nov 16 2016 13:49:46 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],
    
    plugins:  ['karma-jspm',
               'karma-chrome-launcher', 
               'karma-jasmine'],


    // list of files / patterns to load in the browser
    files: [],
    
    proxies: {
      '/jspm_packages': '/base/src/jspm_packages'
    },
    
    jspm: {
      // karma-jspm needs file paths from the root of the project (yes, this is kind of contradictory to jspm's config.js)
      // override config.js's path rule for '*'
      // note that base is how karma-jspm serves files, it adds a base folder that is the root of all folders/files server in the project
      paths: {
        'scripts/*': 'base/src/scripts/*',
        '*': 'base/*'
      },
      
      // files that may be imported by the test files (relative to root)
      serveFiles: ['src/scripts/**/*.js'],

      // test files (relative to root)
      loadFiles: ['src/spec/**/*.js']
    },


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


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
    concurrency: Infinity
  })
}
