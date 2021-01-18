module.exports = {
    url: function () {
        return "";
    },
    elements: {
        email: {
            selector: "#email"
        },
        password: {
            selector: "#password"
        },
        signInBtn: {
            selector: "#signInBtn"
        },
        forgotPassword: {
            selector: "#forgotPass"
        },
        signInSuccessMsg: {
            selector: "#signInSuccessMsg"
        },
        signUpBtn: {
            selector: "#signUpBtn"
        },
        emailErrorMessageLabel: {
            selector: "#emailErrorMsg"
        },
        passwordErrorMessageLabel: {
            selector: "#passErrorMsg"
        },
    },
    commands: [{
        enterEmail: function (email) {
            return this
                .setValue("@email", email)
        },
        enterPassword: function (pass) {
            return this
                .setValue("@password", pass)
        },
        clickSignInBtn: function () {
            return this
                .click("@signInBtn")
        },
        verifyEmailErrorMessage: function (message) {
            return this
                .assert.containsText("@emailErrorMessageLabel",message)
        },
        verifyPasswordErrorMessage: function (message) {
            return this
                .assert.containsText("@passwordErrorMessageLabel",message)
        },
        signInSuccessWelcomeMsg: function (email) {
            return this
                .assert.elementPresent("@signInSuccessMsg")
                .assert.containsText("@signInSuccessMsg", "Welcome")
        },
    }],
}