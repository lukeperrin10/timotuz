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
          'info@timotuz.com'
        )
        cy.get('[data-cy=phone]').should(
          'contain',
          '040 - 68 59 400'
        )
        cy.get('[data-cy=address]')
          .should('contain', 'Box 20, 239 21 Skanör')
      })
    })
  })
})
