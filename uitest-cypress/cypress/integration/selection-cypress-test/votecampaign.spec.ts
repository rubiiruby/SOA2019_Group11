/// <reference types="Cypress" />

const url = "http://192.168.1.42:3000/campaign/1"
const username = "test@test.com"
const password = "testtest"

describe('Open webpage',() => {
    it('Go to url',() => {
        cy.visit(url)
    })
})
describe('Vote',() => {
    it('Click vote',() => {
        cy.contains('VOTE').click()
    })
    it('Click confirm',() => {
        cy.get('[class="ui positive button"]').contains('Confirm').click()
    })
})