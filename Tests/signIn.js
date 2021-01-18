module.exports = {
    tags: ['signIn'],

    before: function (browser) {
        console.log('Test is starting...');
    },
    beforeEach: function (browser) {
        console.log('Sign in page testing...');
    },
    after: (browser) => {
        console.log('Test is finish...');
    },

     "Test Case-1: When email and password are empty, take a screenshots": (browser) => {
        const page = browser.page.signIn();
        page.navigate()
            .enterEmail("")
            .enterPassword("")
            .clickSignInBtn()
            .verifyEmailErrorMessage("text here")
            .verifyPasswordErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignIn/" + "signIn-email-pass-empty.png")
    },

    "Test Case-2: When email is empty, take a screenshots": (browser) => {
        const page = browser.page.signIn();
        page.navigate()
            .enterEmail("")
            .enterPassword("123456789")
            .clickSignInBtn()
            .verifyEmailErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignIn/" + "signIn-empty.png")
    },

    "Test Case-3: When password is empty, take a screenshots": (browser) => {
        const page = browser.page.signIn();
        page.navigate()
            .enterEmail("test@gmail.com")
            .enterPassword("")
            .clickSignInBtn()
            .verifyPasswordErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignIn/" + "signIn-pass-empty.png")
    },

    "Test Case-4: When email is not completed, take a screenshots": (browser) => {
        const page = browser.page.signIn();
        page.navigate()
            .enterEmail("test@gmail")
            .enterPassword("123456789")
            .clickSignInBtn()
            .verifyEmailErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignIn/" + "signIn-email-not-completed.png")
    },

    "Test Case-5: When email and password are wrong, take a screenshots": (browser) => {
        const page = browser.page.signIn();
        page.navigate()
            .enterEmail("test@gmail.com")
            .enterPassword("123456789")
            .clickSignInBtn()
            .verifyEmailErrorMessage("text here")
            .verifyPasswordErrorMessage("text here")
            .saveScreenshot("Tests/Screenshots/SignIn/" + "signIn-email-pass-wrong.png")
    },

    "Test Case-6: When email and password are correct, take a screenshots": (browser) => {
        const page = browser.page.signIn();
        page.navigate()
            .enterEmail("example@example.com")
            .enterPassword("example")
            .clickSignInBtn()
            .pause(10000)
            .signInSuccessWelcomeMsg()
            .saveScreenshot("Tests/Screenshots/SignIn/" + "signIn-email-pass-correct.png")
    },
}