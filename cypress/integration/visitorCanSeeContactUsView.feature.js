/* eslint-disable no-undef */
describe('visitor can navigate see index view', () => {
  beforeEach(() => {
    cy.visit('/kontakt')
  })

  describe('can see contact us page', () => {
    it('it is expected to show contact us page', () => {
      cy.get('[data-cy=text]').should('contain', 'välkommen att höra av dig')
      cy.get('[data-cy=phone-number]').should('contain', '040 - 68 59 400')
      cy.get('[data-cy=email-address]').should('contain', 'info@timotuz.com')
      cy.get('[data-cy=address]').should('contain', 'box 20, 239 21 skanör')
    })
  })
})
