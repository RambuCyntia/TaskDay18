describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://barru.pythonanywhere.com/daftar')
    cy.get('#signUp').click()
    cy.get('#name_register').type('task18')
    cy.get('#email_register').type('task18@sanber.com')
    cy.get('#password_register').type('12345678')
    cy.get('#signup_register').click()
    cy.get('#swal2-title').should('be.visible')
    cy.get('.swal2-confirm').click()
  })
})