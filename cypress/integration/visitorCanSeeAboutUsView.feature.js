describe('Vistor can see about us view', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=om-oss-tab]').click()
  })

  it('is expected to show about us page', () => {
    cy.get('[data-cy=about-us-header]').should('contain', 'Om oss')
    cy.get('[data-cy=about-us-main]').should(
      'contain',
      'Timotuz fastigheter är ett erfaret fastighetsbolag i södra Sverige med hjärtat i myllan.'
    )
    cy.get('[data-cy=about-us-mission]').should(
      'contain',
      'Timotuz skall skapa platser för skåningar att växa och trivas på.'
    )
    cy.get('[data-cy=about-us-vision]').should(
      'contain',
      'Timotuz skall skapa platser för skåningar att växa och trivas på.'
    )
  })
})
