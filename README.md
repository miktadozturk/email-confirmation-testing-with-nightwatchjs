# Sign In, Sign Up and Email Confirmation Testing with Nightwatchjs

## What is Nightwatchjs
**Nightwatch.js** is a test automation framework on web applications, developed in Node.js which uses W3C WebDriver API (formerly Selenium WebDriver). It is a complete End-to-End testing solution which aims to simplify writing automated tests and setting up Continuous Integration. Nightwatch works by communicating over a restful HTTP API with a WebDriver server (such as ChromeDriver or Selenium Server).

## Nightwatch.js Installation
Run the following command to install the latest version using the terminal:


```
yarn install nightwatch
```
or
```
npm install nightwatch --save-dev
```

## Selenium Installation
Run the following command to install the latest version using the terminal:


```
yarn add selenium-server
```
or
```
npm install selenium-server
```

## WebDrive Service
After installation Nightwatch, you need to identify the browsers you want to test. Those who are about to perform the test in Chrome and Firefox should also install their drivers. Drivers are used by Selenium to control scanners. Performing the test with Safari is easier to do, because Safari’s driver is built into MacOS.

```
yarn add chromedriver
```
or
```
npm install chromedriver
```

## Run the Test
If you will run the all test, please type **```npm test```** or **```yarn run nightwatch```**. 

If you will run the single test in Nightwatch (use the tags, for example signIn) please type **```nightwatch --tag signIn```** or **```yarn run nightwatch Tests/signIn --testcase <name>```**.

