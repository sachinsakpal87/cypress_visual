const viewport = require('../../fixtures/vireport.json');
const _ = require('lodash')

describe('Login visual test', function () {
    before('Setup', function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.get('#signin_button').click();
        cy.get('#user_login').type('test');
        cy.get('#user_password').type('test');
        cy.get('#user_remember_me').click();
    });

    it('Desktop layout', function () {
        cy.setResolution(viewport.HD);
        cy.matchImageSnapshot();
    });

    it('Tablet layout', function () {
        cy.setResolution(viewport.IPAD2);
        cy.matchImageSnapshot();
    });

    it('Mobile layout', function () {
        cy.setResolution(viewport.IPHONE6);
        cy.matchImageSnapshot();
    });

})
