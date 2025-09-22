describe('Checkout feliz', () => {
  it('debería crear una orden', () => {
    cy.visit('/');
    cy.get('[data-test="add-to-cart"]').first().click();
    cy.get('[data-test="go-checkout"]').click();
    cy.intercept('POST', '/api/orders').as('createOrder');
    cy.get('[data-test="confirm"]').click();
    cy.wait('@createOrder').its('response.statusCode').should('eq', 200);
  });
});