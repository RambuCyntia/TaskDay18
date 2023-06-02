describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://barru.pythonanywhere.com/daftar')
    cy.get('#email').type('sanbercode@test.com')
    cy.get('#password').clear
    cy.get('#signin_login').click()
    cy.get('#swal2-title').should('be.visible') 
    cy.get('.swal2-confirm').click()
  })
})