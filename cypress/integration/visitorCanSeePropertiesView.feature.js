/* eslint-disable no-undef */
describe('visitor can navigate see properties view', () => {
  beforeEach(() => {
    cy.visit('/fastigheter');
  });

  describe('on desktop', () => {
    it('is expected to show Grid of properties', () => {
      cy.get('[data-cy=property]').should('have.length', 2);
      cy.get('[data-cy=property]')
        .first()
        .within(() => {
          cy.get('[data-cy=property-image]')
            .should('have.attr', 'alt')
            .should('equal', 'Image of the front of brick house');
          cy.get('[data-cy=property-address]').should(
            'contain',
            'Strandgatan 2, Limhamn'
          );
          cy.get('[data-cy=property-description]').should(
            'contain',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
          );
          cy.get('[data-cy=slider-button]').eq(1).click()
          cy.get('[data-cy=property-image]')
            .should('have.attr', 'alt')
            .should('equal', "Image of the bird's-eye view of brick house");
          cy.get('[data-cy=property-address]').should(
            'contain',
            'Strandgatan 2, Limhamn'
          );
          cy.get('[data-cy=property-description]').should(
            'contain',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
          );
        });
    });
  });

  describe('on other devices', () => {});
});
