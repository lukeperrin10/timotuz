/* eslint-disable no-undef */
describe('visitor can see footer on desktop', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to show footer', () => {
    cy.get('[data-cy=footer]').within(() => {
      cy.get('[data-cy=logo]').should('be.visible')
      cy.get('[data-cy=contacts]').within(() => {
        cy.get('[data-cy=header]').should('contain', 'Kontakta oss')
        cy.get('[data-cy=email]').should(
          'contain',
          'email: jacob@fastigheter.se'
        )
        cy.get('[data-cy=phone]')
          .invoke('attr', 'href')
          .should('contain', '+46 31-123-4567')
      })
      cy.get('[data-cy=navigation]').within(() => {
        cy.get('[data-cy=start-tab]')
          .invoke('attr', 'href')
          .should('include', '/start')
        cy.get('[data-cy=fastigheter-tab]')
          .invoke('attr', 'href')
          .should('include', '/fastigheter')
        cy.get('[data-cy=om-oss-tab]').should('be.visible')
        cy.get('[data-cy=kontakta-oss-tab]')
          .invoke('attr', 'href')
          .should('include', '/kontakta_oss')
        cy.get('[data-cy=phone]')
          .invoke('attr', 'href')
          .should('contain', '+46 31-123-4567')
      })
    })
  })
})

describe('visitor can see footer on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('/')
  })

  it('is expected to show footer', () => {
    cy.get('[data-cy=footer]').within(() => {
      cy.get('[data-cy=logo]').should('be.visible')
      cy.get('[data-cy=contacts]').within(() => {
        cy.get('[data-cy=header]').should('contain', 'Kontakta oss')
        cy.get('[data-cy=email]').should(
          'contain',
          'email: jacob@fastigheter.se'
        )
        cy.get('[data-cy=phone]')
          .invoke('attr', 'href')
          .should('contain', '+46 31-123-4567')
      })
      cy.get('[data-cy=navigation]').should('not.exist')
    })
  })
})
