/// <reference types="cypress" />

describe('500ml', () => {
  it('first test: scroll to bottom', () => {
    // cy.visit('https://500ml.vercel.app/')
    cy.visit500ml()
    cy.get('button').contains('Get in touch').click().then(() => {
        cy.scrollTo('bottom');
    })

  })
  it('second test: contact us', () => {
    // cy.visit('https://500ml.vercel.app/')
    cy.visit500ml()

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
  it('tab change', () => {
    // cy.visit('https://500ml.vercel.app/')
    cy.visit500ml()
    
    cy.get('[routerlink="/services"]').click()
    cy.get('[routerlink="/home"]').click()
    cy.get('[routerlink="/portfolio"]').click()
    cy.get('.Container').eq(2).click()    

  })
  it('follow us button', () => {
    // cy.visit('https://500ml.vercel.app/')
    cy.visit500ml()

    cy.viewport(500, 920);
    cy.get('.followUs').click()
  })
  
  it.only('click footer links', () => {
    cy.intercept('GET', "https://dribbble.com/").as('newTab')

    cy.visit500ml()
    cy.get('.contactUs').click()
    

    cy.get('.small_box').eq(1).click() 
    cy.wait(5000)
    cy.wait('@newTab');


  })



})