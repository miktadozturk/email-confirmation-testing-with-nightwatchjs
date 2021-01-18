module.exports = {
    tags: ['fail', 'signUp'],

    before: function (browser) {
        console.log('Test is starting...');
    },
    beforeEach: function (browser) {
        console.log('Sign up page testing...');
    },
    after: (browser) => {
        console.log('Test is finish...');
    },

     "Test Case-1: Go to sign up page, take a screenshots": (browser) => {
        const page = browser.page.signUp();
        page.navigate()
            .signUpMainPage()
            .saveScreenshot("Tests/Screenshots/SignUp/" + "signUp-main-page.png")
    },

    "Test Case-2: When all fields are empty, take a screenshots": (browser) => {
        const page = browser.page.signUp();
         page.navigate()
            .enterEmail("")
            .enterPassword("")
            .clickRegisterBtn()
            .verifyEmailErrorMessage("text here")
            .verifyPhoneNumberErrorMessage("text here")
            .verifyPasswordErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignUp/" + "signUp-empty-fields.png")
    },

    "Test Case-3: When email is empty and password is too short , take a screenshots": (browser) => {
        const page = browser.page.signUp();
        page.navigate()
            .enterEmail("")
            .enterPassword("12345678")
            .clickRegisterBtn()
            .verifyEmailErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignUp/" + "signUp-empty-email-short-pass.png")
    },

    "Test Case-4: When password is empty and wrong format email, take a screenshots": (browser) => {
        const page = browser.page.signUp();
        page.navigate()
            .enterEmail("test@gmail")
            .enterPassword("")
            .clickRegisterBtn()
            .verifyEmailErrorMessage("text here")
            .verifyPasswordErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignUp/" + "signUp-pass-empty-email-wrong-format.png")
    },

    "Test Case-5: When email is wrong and password is min 8 characters, take a screenshots": (browser) => {
        const page = browser.page.signUp();
        page.navigate()
            .enterEmail("test@gmail.com")
            .enterPassword("12345678")
            .clickRegisterBtn()
            .verifyPhoneNumberErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignUp/" + "signUp-invalid-phone-number.png")
            .end();
    },
}