const viewport = require('../../fixtures/vireport.json');
const _ = require('lodash')
describe('Cypress Visual Regression', function () {

    _.forEach(viewport,(view) => {
        it(`visual test for view ${view}`, function () {
            cy.setResolution(view);
            cy.visit('http://example.com/');
            cy.matchImageSnapshot();
        });
    })
})
