describe('search product', () => {
  before(() => {
    cy.visit('/')
  })

  it('Should be able to search for an product', () => {
    cy.get('input[name="q"]').type('moletom').parent('form').submit()
    cy.location('pathname').should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"]').should('exist')
  })

  it('Should be redirect to home page if was not provide a search', () => {
    cy.on('uncaught:exception', (err: any) => {
      // if uncaught exception is thrown, it means that the redirect was successful
      if (err.message.includes('NEXT_REDIRECT')) {
        return false
      }

      return true
    })

    cy.visit('/search')

    cy.location('pathname').should('equal', '/')
  })
})
