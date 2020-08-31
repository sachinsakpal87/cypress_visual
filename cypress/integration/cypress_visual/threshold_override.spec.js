describe('Cypress Visual Regression',function () {
    it('Threshold override', function () {
        cy.visit('http://example.com/');
        cy.get("h1").matchImageSnapshot({
            failureThreshold: 10.0,
            failureThresholdType: "pixels"
        });
    });
})
