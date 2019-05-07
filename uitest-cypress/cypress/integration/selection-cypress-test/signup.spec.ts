/// <reference types="Cypress" />

const url = "http://192.168.1.42:3000/"
const firstname = "cypress"
const lastname = "test"
const username = "cypress10@test.com"
const password = "testtest"

describe('Open webpage',() => {
    it('Go to url',() => {
        cy.visit(url)
    })
})
describe('Sign up',() => {
    it('Click sign in button',() => {
        cy.get('[class="ui basic inverted button"]').contains('Sign in').click()
        cy.wait(1000)
    })
    it('Click sign up button',() => {
        cy.contains('Sign up').click()
        cy.wait(1000)
    })
    it('Type text',() => {
        cy.get('input[placeholder="First Name"]').type(firstname)
        cy.get('input[placeholder="Last Name"]').type(lastname)
        cy.get('input[placeholder="Email"]').type(username)
        cy.get('input[placeholder="Password"]').type(password)
        cy.wait(1000)
    })
    it('Click register button',() => {
        cy.contains('Register').click()
        cy.wait(1000)
    })
    it('Click confirm button',() => {
        cy.get('[class="ui positive button"]').contains('Confirm').click()
        cy.wait(1000)
    })
})
describe('Wait',() => {
    it('Wait',() => {
        cy.wait(3000)
    })
})
describe('Sign in with new id',() => {
    it('Back to homepage',() => {
        cy.contains('SELECTION').click()
    })
    it('Click sign in button',() => {
        cy.get('[class="ui basic inverted button"]').contains('Sign in').click()
        cy.wait(1000)
    })
    it('Enter username & password',() => {
        cy.get('input[placeholder="E-mail or Phone number"]').type(username)
        cy.get('input[placeholder="Password"]').type(password)
        cy.wait(1000)
    })
    it('Sign in',() => {
        cy.get('[class="ui blue right floated button"]').contains('Sign in').click()
        cy.wait(4000)
    })
})
describe('Sign out',() => {
    it('Click user dropdown',() => {
        cy.contains('cypress test').click()
    })
    it('Click sign out',() => {
        cy.contains('Sign Out').click()
    })
})
describe('Fail sign up duplicate',() => {
    it('Click sign in button',() => {
        cy.get('[class="ui basic inverted button"]').contains('Sign in').click()
        cy.wait(1000)
    })
    it('Click sign up button',() => {
        cy.contains('Sign up').click()
        cy.wait(1000)
    })
    it('Type text',() => {
        cy.get('input[placeholder="First Name"]').type(firstname)
        cy.get('input[placeholder="Last Name"]').type(lastname)
        cy.get('input[placeholder="Email"]').type(username)
        cy.get('input[placeholder="Password"]').type(password)
        cy.wait(1000)
    })
    it('Click register button',() => {
        cy.contains('Register').click()
        cy.wait(1000)
    })
    it('Click confirm button',() => {
        cy.get('[class="ui positive button"]').contains('Confirm').click()
        cy.wait(1000)
    })
})

