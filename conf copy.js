
exports.config = {
    directConnect: true,


    capabilities: {
        'browserName': 'chrome',


    },


    framework: 'jasmine',

    specs: 'test.js',


    jasmineNodeOpts: {

        defaultTimeoutInterval: 80000000
    },


    onPrepare: function () {
        // jasmine.getEnv().addReporter(reporter);
         var AllureReporter = require('jasmine-allure-reporter');
         jasmine.getEnv().addReporter(new AllureReporter({
           resultsDir: 'allure-results'
         }));
         jasmine.getEnv().afterEach(function(done){
           browser.takeScreenshot().then(function (png) {
             allure.createAttachment('Screenshot', function () {
               return new Buffer(png, 'base64')
             }, 'image/png')();
             done();
           })
         });
      }



};



