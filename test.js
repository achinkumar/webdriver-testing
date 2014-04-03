var assert = require('assert'),
	test = require('selenium-webdriver/testing'),
	webdriver = require('selenium-webdriver');

test.describe('phantom test', function () {
	test.it('should work', function () {
		var driver = new webdriver.Builder().	
		withCapabilities(webdriver.Capabilities.phantomjs()).
		build();
		driver.get('http://localhost:3000/');
		var searchBox = driver.findElement(webdriver.By.id('jumbotron'));
		searchBox.sendKeys('saurshaz');
		searchBox.getAttribute('value').then(function (value) {
			console.log("this is value="+value);
			assert.equal(typeof(value), 'string');
			assert.equal(value, 'saurshaz');
		});
		driver.quit();
	});
});