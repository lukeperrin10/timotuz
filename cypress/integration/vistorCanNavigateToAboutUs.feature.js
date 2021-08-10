/* eslint-disable no-undef */
describe('visitor can navigate to about us section', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('About us section', () => {
    it('is expected to navigate to about us', () => {
      cy.get('[data-cy=om-oss-tab]').click()
      cy.url().should('contain', '/om_oss')
    })
  })
})
