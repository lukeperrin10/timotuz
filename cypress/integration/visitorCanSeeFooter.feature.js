/* eslint-disable no-undef */
describe('visitor can see footer', () => {
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
    })
  })
})
