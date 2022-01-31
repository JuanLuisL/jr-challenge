class SignPage {

    //TODO: add the locators for the next elements.

    getEmailTextfield() {
        return cy.get('input[name="email"]');
    }

    getPasswordTextfield() {
        return cy.get('input[name="password"]');
    }

    getContinueButton() {
        return cy.get('button[type="submit"]');
    }
}

export default SignPage;
