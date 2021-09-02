describe('Vistor can see about us view', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy=om-oss-tab]').click()
  })

  it('is expected to show about us page', () => {
    cy.get('[data-cy=about-us-header]').should('contain', 'Om oss')
    cy.get('[data-cy=about-us-text]').should(
      'contain',
      'Timotuz har varit verksamt inom fastighetsbranschen sedan 2014.'
    )
 
  })
})
