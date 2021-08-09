/* eslint-disable no-undef */
describe('visitor can navigate see index view', () => {
  beforeEach(() => {
    cy.visit('/kontakta_oss')
  })

  describe('can see contact us page', () => {
    it('it is expected to show image on left', () => {
      cy.get('[data-cy=image]')
        .should('have.attr', 'alt')
        .should('contain', 'Bild av stad från ovan')
      cy.get('[data-cy=phone]').should('contain', 'Telefon Nummer')
      cy.get('[data-cy=phone-number]').should('contain', '031-123-4567')
      cy.get('[data-cy=email]').should('contain', 'E-post address')
      cy.get('[data-cy=email-address]').should('contain', 'jakob@timotuz.se')
    })
  })
})
