// spec.js

describe('Testing ', () => {

  var shoppingSection = element(by.linkText('Shopping'));
  var imagesOfTable = element.all(by.css('div.main div.col'));
  var shoppingTitle = element(by.className('title'));
  var homeButton = element.all(by.xpath('//img[contains(@src, "34.png")]')).first();
  var titleNames = element.all(by.css('div.main h2.title'));
  var linksNames = element.all(by.css('ul li'));
  var landsEndHref = element(by.linkText("Lands' End"));
  var globalSearch = element.all(by.id('site-search-input'));
  var searchButton = element.all(by.className('search-button')).first();
  var searchResults = element(by.css('li[ng-repeat*=search]'));
  var lables = element.all(by.css('.logo-dark'));
  var description = element(by.name('description'));
  var giftsTab = element.all(by.css('li.top-nav-item>a[href*="shop/gift"]')).first();
  var forHomeHref = element.all(by.css('a[href*=forhome]'));

  var links = ['About', 'Suggest a site', 'Twitter'];

  var EC = protractor.ExpectedConditions;

  var allWindows = browser.getAllWindowHandles();

  var switchBrowserWindow = function(number) {
    browser.driver.getAllWindowHandles().then(function(handles) {
      if (handles.length > 1) {
        browser.driver.switchTo().window(handles[number]).then(function() {});
      }
    });
  };

  beforeAll(() => {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.madewithangular.com/');
  });

  it('Shoul check sections', () => {
    expect(titleNames.count()).toBe(22);
    expect(titleNames.first().getText()).toEqual('By Google');
    expect(titleNames.last().getText()).toEqual('From the Community');
  });

  it('Should check links', () => {
    expect(linksNames.count()).toBe(3);
    expect(linksNames.getText()).toEqual(links);
  });

  it('Should open Shopping section', () => {
    shoppingSection.click();
  });

  it('Should check Shopping section', () => {
    expect(shoppingTitle.getText()).toEqual('Shopping');
    expect(imagesOfTable.count()).toBe(18);
  });

  it('Shoul open lands end', () => {
    landsEndHref.click();
    landsEndHref.click();
    switchBrowserWindow(1);
  });

  it('Should check global search', () => {
    browser.wait(EC.presenceOf(globalSearch), 5000);
    globalSearch.get(0).sendKeys('dress');
    searchButton.click();
  });

  it('Should check page with dress', () => {
    browser.wait(EC.urlContains('shop/search?Ntt=dress'));
    expect(searchResults.getText()).toContain('dress');
    expect(lables.count()).toBe(2);
    expect(description.isEnabled()).toBe(true);
  });

  it('Should check gifts tab', () => {
    giftsTab.click();
    browser.wait(EC.visibilityOf(forHomeHref.get(0)), 5000);
    forHomeHref.get(0).click();
  });

});