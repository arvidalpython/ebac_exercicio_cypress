/// <reference types="cypress" />
describe('Testes para a página de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve adicionar 1 contato', () => {
        cy.get('input[placeholder="Nome"]').type('Alexandre1')
        cy.get('input[placeholder="E-mail"]').type('alexandre@alexandre.com')
        cy.get('input[placeholder="Telefone"]').type('2112345-1234')
        cy.get('.adicionar').click()
    })

    it('Deve alterar o primeiro contato', () => {
        cy.get('.edit').eq(0).click();
        cy.get('input[placeholder="Nome"]').clear()
        cy.get('input[placeholder="E-mail"]').clear()
        cy.get('input[placeholder="Telefone"]').clear()
        cy.get('input[placeholder="Nome"]').type('Ribeiro')
        cy.get('input[placeholder="E-mail"]').type('ribeiro@ribeiro.com')
        cy.get('input[placeholder="Telefone"]').type('2112345-1234')
        cy.get('.alterar').click()
    })

    it('Deve deletar o segundo contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').eq(1).find('.delete').click();
    })
})