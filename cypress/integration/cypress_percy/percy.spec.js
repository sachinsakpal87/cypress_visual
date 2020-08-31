describe('Visual Regression Testing with Percy and Cypress',function () {
    it('Should take percy snapshot', function () {
        cy.visit('http://example.com/');
        cy.wait(1000);
        cy.percySnapshot();
    })
})
