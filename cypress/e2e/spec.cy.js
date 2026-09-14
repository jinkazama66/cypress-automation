describe('Login to SauceDemo, add backpack to cart, open cart and verify product', () => {

  it('should login, add backpack to cart and display it in cart', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('[data-test="shopping-cart-link"]').click()

    cy.get('[data-test="inventory-item-name"]')
      .should('have.text', 'Sauce Labs Backpack')

  })

})