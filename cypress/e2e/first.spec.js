/// <reference types="cypress" />

describe('500ml', () => {
  it('first test: scroll to bottom', () => {
    cy.visit('https://500ml.vercel.app/')
    cy.get('button').contains('Get in touch').click().then(() => {
        cy.scrollTo('bottom');
    })

  })
  it.only('second test: contact us', () => {
    cy.visit('https://500ml.vercel.app/')
    cy.get('.contactUs').click()
    cy.wait(4000)
    // cy.get('input').contains('First Name').type('name', { force: true });
    cy.contains('.InputBox', 'First Name').find('input').type('guli')
    cy.contains('.InputBox', 'Last Name').find('input').type('gurgenashvili')
    cy.contains('.BigInputBox', 'Email').find('input').type('test@test.com')
    cy.contains('.BigInputBox', 'Phone').find('input').type('12345')
    cy.get('.DescribeIssueBox').type('issue box')
    cy.get('.Button_send').click()

  })
})