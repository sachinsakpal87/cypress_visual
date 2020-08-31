describe('Cypress Visual Regression',function () {
    it('first visual test ', function () {
        let currentime =  new Date(Date.UTC(2020,1,1)).getDate();
        cy.clock(currentime);
        cy.visit('http://example.com/');
        cy.matchImageSnapshot();
    });

    it('should Single element snapshot', function () {
        cy.visit('http://example.com/');
        cy.get("h1").matchImageSnapshot();
    });
})
