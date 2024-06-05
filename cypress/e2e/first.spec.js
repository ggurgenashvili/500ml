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
    cy.visit500ml()  
    cy.intercept('GET', 'https://dribbble.com/').as('redirectRequest')

    cy.get('.littleContainer').find('img').eq(1).then(($img) => {
      cy.wrap($img).click();
    });

    // find icon another way
    // cy.get('.littleContainer img[src$="basketball_icon.svg"]').click()

    cy.origin('https://dribbble.com/', () => {
  })


    // ჯიპიტი მეხმარებოდა, ტაბს ხსნის მაგრამ ტესტი ფეილდშია

    // find icon another way
    // cy.get('.littleContainer img[src$="basketball_icon.svg"]').click()
    // cy.wait('@redirectRequest').then(() => {
    //   cy.url().should('include', 'https://dribbble.com/')
    // })

  })
})