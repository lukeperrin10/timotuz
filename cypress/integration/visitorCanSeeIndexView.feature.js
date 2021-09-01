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
          cy.get('[data-cy=first-text]').should('contain', 'Fredrik 16')
          cy.get('[data-cy=second-text]').should(
            'contain',
            'Gamla anor möter morgondagens vanor'
          )
        })
      })
    })
  })

  describe('Property Grid', () => {
    it('is expected to show Grid', () => {
      cy.get('[data-cy=properties-header]').should(
        'contain',
        'Våra fastigheter'
      )
      cy.get('[data-cy=first-box]').within(() => {
        cy.get('[data-cy=question]').should(
          'contain',
          ' Söker du lokal eller bostad?'
        )
        cy.get('[data-cy=phone]').should('contain', '040 - 68 59 400')
      })

      cy.get('[data-cy=second-box]').within(() => {
        cy.get('[data-cy=limhamn-img]').should('have.attr', 'alt').should(
          'contain',
          'Huset strutsen från ovan'
        )
        cy.get('[data-cy=shadow-box]').within(() => {
          cy.get('[data-cy=city]').should('contain', 'limhamn')
          cy.get('[data-cy=address]').should(
            'contain',
            'Strutsen 25'
          )
        })
      })
      cy.get('[data-cy=third-box]').within(() => {
        cy.get('[data-cy=ystad-img]').should('have.attr', 'alt').should(
          'contain',
          'Illustration av folk på en innergård'
        )
        cy.get('[data-cy=shadow-box]').within(() => {
          cy.get('[data-cy=city]').should('contain', 'ystad')
          cy.get('[data-cy=address]').should(
            'contain',
            'Fredrik 16'
          )
        })
      })
      cy.get('[data-cy=fourth-box]').within(() => {
        cy.get('[data-cy=helsingborg-img]').should('have.attr', 'alt').should(
          'contain',
          'Industri lokal med röda portar'
        )
        cy.get('[data-cy=shadow-box]').within(() => {
          cy.get('[data-cy=city]').should('contain', 'helsingborg')
          cy.get('[data-cy=address]').should(
            'contain',
            'Mörsaren Västra 6'
          )
        })
      })
      cy.get('[data-cy=fifth-box]').within(() => {
        cy.get('[data-cy=våra-fastigheter-btn]').should('contain', 'Visa flera fastigheter')
      })
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
