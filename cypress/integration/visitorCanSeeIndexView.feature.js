/* eslint-disable no-undef */
describe('visitor can navigate see index view', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Hero section', () => {
    it('Is expected to show hero image', () => {
      cy.get('[data-cy=hero-section]').within(() => {
        cy.get('[data-cy=hero-img]')
          .should('have.attr', 'alt')
          .should('equal', 'Bird view of a small town')
      })
      it('is expected to show some information on a black bar on top of image', () => {
        cy.get('[data-cy=shadow-box]').within(() => {
          cy.get('[data-cy=information-text]').should(
            'contain',
            'Trygga fastigheter i södra sverige'
          )
          cy.get('[data-cy=house-logo]')
            .should('have.attr', 'alt')
            .should('equal', '')
        })
      })
    })

    it('is expected to show information bar', () => {
      cy.get('[data-cy=information-bar]').within(() => {
        cy.get('[data-cy=column-0]').first().should('contain', '114')
        cy.get('[data-cy=column-0]').last().should('contain', 'Lorem ipsum')

        cy.get('[data-cy=column-1]').first().should('contain', '32')
        cy.get('[data-cy=column-1]').last().should('contain', 'Lorem ipsum')

        cy.get('[data-cy=column-2]').first().should('contain', '2')
        cy.get('[data-cy=column-2]').last().should('contain', 'Lorem ipsum')

        cy.get('[data-cy=column-3]').first().should('contain', 'Ja')
        cy.get('[data-cy=column-3]').last().should('contain', 'Lorem ipsum')
      })
    })
  })

  describe('Property section', () => {
    it('is expected to show Grid of properties', () => {
      cy.get('[data-cy=property-section]').within(() => {
        cy.get('[data-cy=properties-header]').should('contain', 'Fastigheter')
        cy.get('[data-cy=property-1]').within(() => {
          cy.get('[data-cy=property-image]')
            .should('have.attr', 'alt')
            .should('equal', 'Stor fastighet med tegelfasad')
          cy.get('[data-cy=property-address]').should(
            'contain',
            'Benvägen 32, Limhamn'
          )
          cy.get('[data-cy=property-description]').should(
            'contain',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
          )
        })
      })
      cy.get('[data-cy=show-more-btn]').click()
    })
  })

  describe('About Us section', () => {
    it('is expected to show information about us', () => {
      cy.get('[data-cy=about-us-section]').within(() => {
        cy.get('[data-cy=about-us-header]').should('contain', 'Om Oss')
        cy.get('[data-cy=3d-logo]')
          .should('have.attr', 'alt')
          .should('equal', 'Timotuz 3d logo')
        cy.get('[data-cy=about-us-content]').should('contain', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,')
      })
    })
  })
})
