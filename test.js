var login = require('./searchpom.js');
var xlsx2 = require('xlsx');
var path = require('path');
const { browser, element } = require('protractor');
var workbook = xlsx2.readFile('./testData.xlsx');
var worksheet = workbook.Sheets['Test'];
var controlstatement = workbook.Sheets['control'];

var FRowInternal = controlstatement['A2'].v;
var LRowInternal = controlstatement['B2'].v;



describe('Google Search TestCases', function () {

    for (let i = FRowInternal; i <= LRowInternal; i++) {
        it('1.Verify that input search fielsd is clickable and user is able to search', function () {
            //     browser.ignoreSynchronization = true;
            browser.driver.manage().window().maximize();
            browser.waitForAngularEnabled(false);

            login.url(worksheet['A' + i].v);
            browser.sleep(2000);

            var search = login.search();
            search.get(5);
            browser.actions().sendKeys(worksheet['B' + i].v).perform();
            browser.sleep(4000);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();

            browser.sleep(4000);






        });
        it('2.Verify the response is correct and related to the keyword ', function () {

            var Crctresult = element(by.xpath('//*[@id="rso"]/div[1]/div/div[1]/div/div[1]/div/div[2]/div'));
            Crctresult.getText().then(function (text) {
                console.log("Actual Result:" + text);
                expect('Selenium WebDriver').toEqual(text);
            });
            
          
            browser.sleep(4000);


        });
        it('3.Verify Total number of results and time taken to show results:', function () {


            var result = element(by.xpath('//div[@id="result-stats"]'));
            result.getText().then(function (text) {
                console.log("Total number of results and time taken to show results:" + text);
            });

            browser.sleep(4000);


        });
        it('4.Verify Sarched reults link are working', function () {

// we will select any result and will click on the link 
                    browser.sleep(4000);

        });
        it('5.Verify Search input field by clear out the search value', function () {


            var clear = element(by.xpath('//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[3]/div[1]/span[1]'));
          clear.click();

            browser.sleep(4000);


        });
        it('6.Verify Search input field by with neggative value', function () {


            var result = element(by.xpath('//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input')).sendKeys(worksheet['C' + i].v);
           // browser.actions().sendKeys(worksheet['C' + i].v).perform();
            browser.sleep(4000);
            browser.actions().sendKeys(protractor.Key.ENTER).perform();


            browser.sleep(4000);


        });
        it('7.Verify response is shown message is correct for  neagative search', function () {


            var result = element(by.xpath('//p[contains(text(),"Suggestions")]'));
            result.getText().then(function (text) {
                console.log("Total Shown text contains" + text);
            });

            browser.sleep(4000);

        });
      

    }
});
