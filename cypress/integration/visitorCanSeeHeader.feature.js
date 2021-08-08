/* eslint-disable no-undef */
describe('visitor can see header on desktop', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to show header', () => {
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=logo]').should('be.visible')
      cy.get('[data-cy=start-tab]')
        .invoke('attr', 'href')
        .should('include', '/start')
      cy.get('[data-cy=fastigheter-tab]')
        .invoke('attr', 'href')
        .should('include', '/fastigheter')
      cy.get('[data-cy=om-oss-tab]')
        .invoke('attr', 'href')
        .should('include', '/om_oss')
      cy.get('[data-cy=kontakta-oss-tab]')
        .invoke('attr', 'href')
        .should('include', '/kontakta_oss')
      cy.get('[data-cy=phone]')
        .invoke('attr', 'href')
        .should('contain', '+46 31-123-4567')
    })
  })
})

describe('visitor can use hamburger menu on mobile', () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.visit('/')
  })

  it('is expected to show header', () => {
    cy.get('[data-cy=header]').within(() => {
      cy.get('[data-cy=logo]').should('be.visible')
      cy.get('[data-cy=hamburger-menu]').click()
    })
    cy.get('[data-cy=drawer]').within(() => {
      cy.get('[data-cy=start-tab]')
        .invoke('attr', 'href')
        .should('include', '/start')
      cy.get('[data-cy=fastigheter-tab]')
        .invoke('attr', 'href')
        .should('include', '/fastigheter')
      cy.get('[data-cy=om-oss-tab]')
        .invoke('attr', 'href')
        .should('include', '/om_oss')
      cy.get('[data-cy=kontakta-oss-tab]')
        .invoke('attr', 'href')
        .should('include', '/kontakta_oss')
      cy.get('[data-cy=phone]')
        .invoke('attr', 'href')
        .should('contain', '+46 31-123-4567')
      cy.get('[data-cy=drawer-logo]').should('be.visible')
    })
  })
})