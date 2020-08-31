
describe('Cypress Visual Regression',function () {
    it('first visual test ', function () {
        cy.visit('http://example.com/');
        cy.matchImageSnapshot();
    });
})
