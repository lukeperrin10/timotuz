describe('Vistor can see about us view', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=om-oss-tab]').click()
  })

  it('is expected to show about us page', () => {
    cy.get('[data-cy=about-us-header]').should('contain', 'Om Oss')
    cy.get('[data-cy=about-us-main]').should(
      'contain',
      'Timotuz fastigheter är ett erfaret fastighetsbolag i södra Sverige med hjärtat i myllan.'
    )
    cy.get('[data-cy=about-us-mission-header]').should('contain', 'Vår Mission')
    cy.get('[data-cy=about-us-mission]').should(
      'contain',
      'Timotuz skall skapa platser för skåningar att växa och trivas på.'
    )
    cy.get('[data-cy=about-us-vision-header]').should('contain', 'Vår Vision')
    cy.get('[data-cy=about-us-vision]').should(
      'contain',
      'Med den regionalt förankrade småföretagarens lyhördhet och passion skapar Timotuz rätt fastigheter, och vårdar dem med storbolagets långsiktighet och branscherfarenhet.'
    )
  })
})
