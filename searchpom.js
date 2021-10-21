let login = function () {
    this.url = function (url) {
        browser.get(url);
    }

var search = element.all(by.id('input'));

this.search = function () {
    return search;
}

var dd= element(by.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[2]/ul/li[2]/div/div[2]/div[1]/span/b"));
this.dd = function () {
    return dd;
}
}
module.exports = new login();
