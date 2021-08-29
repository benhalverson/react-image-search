describe('Visit localhost:3000', () => {
  it('Visits the homepage', () => {
    cy.visit('http://localhost:3000');
  });

  it('should do a search for dogs', () => {
    const searchItem = 'dogs';
    
    cy.get('input').type(`${searchItem}{enter}`);

    cy.get('.image-list').children().should('have.length', 10);

  });
});


