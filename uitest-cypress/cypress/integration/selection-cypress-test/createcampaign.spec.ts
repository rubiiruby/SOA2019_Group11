/// <reference types="Cypress" />

const url = "http://192.168.1.42:3000/"
const username = "test@test.com"
const password = "testtest"
const enddate = Cypress.moment().add(5,'minute').format('DD-MM-YYYY HH:mm')

describe('Open webpage',() => {
    it('Go to url',() => {
        cy.visit(url)
    })
})
describe('Sign in',() => {
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
describe('Create campaign',() => {
    it('Click campaign start button',() => {
        cy.contains('START YOUR CAMPAIGN').click()
    })
    it('Enter title',() => {
        cy.get('input[placeholder="Title"]').type('Cypress Title Test')
    })
    it('Click next',() => {
        cy.contains('Next').click()
    })
    it('Enter description',() => {
        cy.get('textarea[placeholder="Description"]').type('This will do automated test')
    })
    it('Click next',() => {
        cy.contains('Next').click()
    })
    it('Enter first choice',() => {
        cy.get('input[placeholder="#1 Choice Title"]').type('Choice 1')
    })
    it('Add second choice',() => {
        cy.get('[class="ui basic fluid button"]').click()
    })
    it('Enter second choice',() => {
        cy.get('input[placeholder="#2 Choice Title"]').type('Choice 2')
    })
    it('Click next',() => {
        cy.contains('Next').click()
    })
    it('Enter deadline',() => {
        cy.get('[id="datetime"]').type(enddate)
    })
    it('Click submit',() => {
        cy.contains('Submit').click()
    })
    it('Click confirm',() => {
        cy.get('[class="ui positive button"]').contains('Confirm').click()
    })
})