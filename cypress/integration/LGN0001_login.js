/// <reference types="cypress" />

import SignPage from '../pages/signPage';
import DataFactory from '../factory/dataFactory';

context('', () => {

    const login = new SignPage();
    
    //TODO: Add credentials in fixture file.
    const user = new DataFactory().getLoginCredentials();

    before(() => {
        cy.visit('/login');
    });

    it('', () => {
        login.getEmailTextfield().type(user.email);
        login.getPasswordTextfield().type(user.password);
        login.getContinueButton().click();
        //TODO: Add the assertions.
    });

});
