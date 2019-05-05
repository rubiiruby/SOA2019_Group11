/// <reference types="Cypress" />

const url = "http://localhost:3000/"
const username = "test@test.com"
const password = "testtest"

describe('Open webpage',() => {
    it('Go to url',() => {
        cy.visit(url)
    })
})
describe('Sign in success',() => {
    it('Click sign in button',() => {
        cy.get('[class="ui basic inverted button"]').contains('Sign in').click()
    })
    it('Enter username & password',() => {
        cy.get('input[placeholder="E-mail or Phone number"]').type(username)
        cy.get('input[placeholder="Password"]').type(password)
    })
    it('Sign in',() => {
        cy.get('[class="ui blue right floated button"]').contains('Sign in').click()
    })
    
})
describe('Sign out',() => {
    it('Click user dropdown',() => {
        cy.contains('test test').click()
    })
    it('Click sign out',() => {
        cy.contains('Sign Out').click()
    })
})
describe('Sign in fail',() => {
    it('Click sign in button',() => {
        cy.get('[class="ui basic inverted button"]').contains('Sign in').click()
    })
    it('Enter username & password',() => {
        cy.get('input[placeholder="E-mail or Phone number"]').type('wrong@test.com')
        cy.get('input[placeholder="Password"]').type(password)
    })
    it('Sign in',() => {
        cy.get('[class="ui blue right floated button"]').contains('Sign in').click()
    })
})