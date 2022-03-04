/* eslint-disable no-undef */
describe('visitor can navigate see index view', () => {
  beforeEach(() => {
    cy.visit('/kontakt')
  })

  describe('can see contact us page', () => {
    it('it is expected to show contact us page', () => {
      cy.get('[data-cy=text-1]').should('contain', 'Fastighetsskötsel utförs av Förvaltning AB Malmöborg')
      cy.get('[data-cy=phone-number]').should('contain', '040 685 94 00')
      cy.get('[data-cy=email-address]').should('contain', 'info@timotuz.com')
    })
  })
})
