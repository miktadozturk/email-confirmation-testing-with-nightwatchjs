module.exports = {
    tags: ['success'],

    before: function (browser) {
        console.log('Test is starting...');
    },
    beforeEach: function (browser) {
        console.log('Sign up page testing...');
    },
    after: (browser) => {
        console.log('Test is finish...');
    },
    "Test Case: When email is correct and password is min 8 characters, take a screenshots": (browser) => {
        generatorUrl = "https://generator.email/"

        //Go to "generatorUrl" and generate random email
        browser.url(generatorUrl).getValue('#userName', function (emailName) {
            browser.getValue('#domainName2', function (domaninName) {
                email = emailName.value + "@" + domaninName.value
                password = "12345678"

                //Sign up with generated email
                browser.page.signUp()
                    .navigate()
                    .enterEmail(email)
                    .enterPassword(password)
                    .clickRegisterBtn();

                //Confirmation email receive and click
                browser.url(generatorUrl)
                    .waitForElementVisible(".mcnButton",20000)
                    .click(".mcnButton")

                    //Switch to sign in tab
                    .windowHandles(function(result) {
                        this.switchWindow(result.value[1]);
                    });

                //Sign in with the approved email and password
                browser.page.signIn()
                    .enterEmail(email)
                    .enterPassword(password)
                    .clickSignInBtn()
                    .pause(10000)
                    .saveScreenshot("Tests/Screenshots/SignUp/" + "signUp-success-sign-in.png")
            })
        })
    },
}