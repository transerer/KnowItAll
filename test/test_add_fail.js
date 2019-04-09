var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var By = webdriver.By;
var until = webdriver.until;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

    driver.get('localhost:3000/');﻿

async function test(){
	await driver.findElement(By.css("#viewall")).click();
    
    await driver.wait(until.elementLocated(By.css("#newcompany")),10000).click();

}

test();



