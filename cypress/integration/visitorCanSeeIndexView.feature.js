/* eslint-disable no-undef */
describe('visitor can navigate see index view', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Hero section', () => {
    it('Is expected to show background image', () => {
      cy.get('[data-cy=hero-img]')
        .should('have.attr', 'alt')
        .should('equal', 'Bird view of a small town');
    });
    it('is expected to show some information on a black bar on top of image', () => {
      cy.get('[data-cy=shadow-box]').within(() => {
        cy.get('[data-cy=information-text]').should(
          'contain',
          'Trygga fastigheter i södra sverige'
        );
        cy.get('[data-cy=house-logo]')
          .should('have.attr', 'alt')
          .should('equal', '');
      });
    });
    it('is expected to show information bar', () => {
      cy.get('[data-cy=information-bar]').within(() => {
        cy.get('[data-cy=column-0]').should('contain', '114 Lorem ipsum')
        cy.get('[data-cy=column-1]').should('contain', '2 Lorem ipsum')
        cy.get('[data-cy=column-2]').should('contain', '1 Lorem ipsum')
        cy.get('[data-cy=column-3]').should('contain', 'Ja Lorem ipsum')
      })
    });
  });
});
