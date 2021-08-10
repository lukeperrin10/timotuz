/* eslint-disable no-undef */
describe('visitor can navigate to about us section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('About us section', () => {
    it('is expected to navigate to about us', () => {
      cy.get('[data-cy=om-oss-tab]').click()
      cy.get('[data-cy=about-us-header]').should('be.visible')
      cy.get('[data-cy=about-us-content]').should('contain', 'Timotuz skall skapa platser för skåningar att växa och trivas på. Vi')
    })
  })
})
