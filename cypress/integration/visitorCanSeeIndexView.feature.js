/* eslint-disable no-undef */
describe('visitor can navigate see index view', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Hero section', () => {
    it('Is expected to show hero image', () => {
      cy.get('[data-cy=hero-section]').within(() => {
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
    });
    it('is expected to show information bar', () => {
      cy.get('[data-cy=information-bar]').within(() => {
        cy.get('[data-cy=column-0]').first().should('contain', '114');
        cy.get('[data-cy=column-0]').last().should('contain', 'Lorem ipsum');

        cy.get('[data-cy=column-1]').first().should('contain', '32');
        cy.get('[data-cy=column-1]').last().should('contain', 'Lorem ipsum');

        cy.get('[data-cy=column-2]').first().should('contain', '2');
        cy.get('[data-cy=column-2]').last().should('contain', 'Lorem ipsum');

        cy.get('[data-cy=column-3]').first().should('contain', 'Ja');
        cy.get('[data-cy=column-3]').last().should('contain', 'Lorem ipsum');
      });
    });
  });

  describe('Property section', () => {
    it('is expected to show grid of properties', () => {
      cy.get('[data-cy=property-section]').within(() => {
        cy.get('[data-cy=property-column-1]').within(() => {
          cy.get('[data-cy=property-image]').should('have.attr', 'alt').should('equal', 'Stor fastighet med tegelfasad')
          cy.get('[data-cy=property-name]').should('contain', 'Benvägen 32, Ystad')
          cy.get('[data-cy=property-text]').should('contain', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel deserunt nihil itaque, obcaecati alias vero quo, dolores perferendis maxime qui aliquid pariatur vitae? Accusamus error, iste, culpa quia deleniti beatae atque recusandae, vitae maiores enim fuga architecto illum dolor numquam delectus dicta rem rerum? Repudiandae dolores ipsam, tempora qui excepturi, fuga nostrum libero quam illum officia eius corrupti molestias, mollitia explicabo nesciunt blanditiis ipsa! Ut provident, deleniti quisquam commodi reiciendis laborum facere ratione consequatur assumenda natus. Ipsam deserunt, mollitia ex rerum sint voluptates neque aliquam numquam unde, totam possimus qui, perferendis reprehenderit modi. Voluptatem commodi fugiat nesciunt in sequi quas.')
        })
      })  
    });
  })
});
