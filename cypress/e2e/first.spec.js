/// <reference types="cypress" />

describe('500ml', () => {
  it('first test: scroll to bottom', () => {
    cy.visit('https://500ml.vercel.app/')
    cy.get('button').contains('Get in touch').click().then(() => {
        cy.scrollTo('bottom');
    })

  })
  it.only('second test: contact us', () => {
    cy.visit('https://500ml.vercel.app/');
    cy.get('.contactUs').click();
    cy.wait(4000)
  cy.get('span').contains('First Name').type('name', { force: true });
  })
})