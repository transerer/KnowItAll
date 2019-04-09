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
	await driver.findElement(By.id("login")).click();
    //wait for next page to be loaded
    await driver.wait(until.elementLocated(By.name("username")),10000).sendKeys("d");

   await  driver.wait(until.elementLocated(By.name("password")),10000).sendKeys("d");
    await driver.wait(until.elementLocated(By.name("login")),10000).click();


}

test();




