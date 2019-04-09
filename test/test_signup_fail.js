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
	await driver.findElement(By.id("register")).click();
 
    await driver.wait(until.elementLocated(By.name("username")),10000).sendKeys("g");

   //await  driver.wait(until.elementLocated(By.name("password")),10000).sendKeys("g");
    await driver.wait(until.elementLocated(By.css("body form button")),10000).click();


}

test();



