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
        registerBtn: {
            selector: "#registerBtn"
        },
        emailErrorMessageLabel: {
            selector: "#emailErrorMsg"
        },
        passwordErrorMessageLabel: {
            selector: "#passErrorMsg"
        },
    },
    commands: [{
        signUpMainPage: function (email) {
            return this
                .pause(1000)
                .assert.elementPresent("@signUpFormHeader",)
                .assert.containsText("@signUpFormHeader", "Sign Up")
        },
        enterEmail: function (email) {
            return this
                .setValue("@email", email)
        },
        enterPassword: function (pass) {
            return this
                .setValue("@password", pass)
        },
        clickRegisterBtn: function () {
            return this
                .click("@registerBtn")
        },
        verifyEmailErrorMessage: function (message) {
            return this
                .assert.containsText("@emailErrorMessageLabel",message)
        },
        verifyPasswordErrorMessage: function (message) {
            return this
                .assert.containsText("@passwordErrorMessageLabel",message);
        },
    }],
}