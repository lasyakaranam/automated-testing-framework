describe('Cypress Example Site Test', () => {
  it('Visits the Cypress example site and checks features', () => {
    // Visit Cypress example website
    cy.visit('https://example.cypress.io', { timeout: 30000 })

    // Verify the main page loaded
    cy.contains('Kitchen Sink', { timeout: 15000 }).should('be.visible')

    // Open the dropdown menu so "Querying" is visible
    cy.get('ul.dropdown-menu').invoke('show') // makes hidden menu visible

    // Navigate to Querying section
    cy.contains('Querying', { timeout: 15000 }).click()

    // Ensure we are on the correct page
    cy.url().should('include', '/commands/querying')

    // Assert elements exist on Querying page
    cy.get('#query-btn', { timeout: 15000 })
      .should('exist')
      .and('be.visible')

    // Take screenshot
    cy.screenshot('querying-page')
  })
})
