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
          .should('equal', 'Pågående project i Ystad')
      })
      it('is expected to show some information on a black bar on top of image', () => {
        cy.get('[data-cy=shadow-box]').within(() => {
          cy.get('[data-cy=first-text]').should(
            'contain',
            'Fredrik 16'
          )
          cy.get('[data-cy=second-text]').should('contain', 'Gamla anor möter morgondagens vanor')
        })
      })
    })
  })

  describe('Property section', () => {
    it('is expected to show Grid of properties', () => {
      cy.get('[data-cy=properties-header]').should('contain', 'Våra fastigheter')
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

      cy.get('[data-cy=våra-fastigheter-btn]').click()
    })
  })

  describe('About Us section', () => {
    it('is expected to show information about us', () => {
      cy.get('[data-cy=about-us-section]').within(() => {
        cy.get('[data-cy=about-us-header]').should('contain', 'Vår Mission')
        cy.get('[data-cy=3d-logo]')
          .should('have.attr', 'alt')
          .should('equal', 'Timotuz 3d logo')
        cy.get('[data-cy=about-us-content]').should(
          'contain',
          'Timotuz skall skapa platser för skåningar att växa och trivas på. Vi'
        )
      })
      cy.get('[data-cy=mer-om-oss-btn]').click()
    })
  })
})
