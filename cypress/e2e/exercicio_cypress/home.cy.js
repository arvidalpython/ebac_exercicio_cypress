/// <reference types="cypress" />
describe('Testes para a página de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve adicionar 1 contato', () => {
        cy.get('input[placeholder="Nome"]').type('Alexandre1')
        cy.wait(2000);
        cy.get('input[placeholder="E-mail"]').type('alexandre@alexandre.com')
        cy.wait(2000);
        cy.get('input[placeholder="Telefone"]').type('2112345-1234')
        cy.wait(2000);
        cy.get('.adicionar').click()
        cy.wait(2000);
    })
    it('Deve adicionar 1 contato', () => {
        cy.get('input[placeholder="Nome"]').type('Alexandre2')
        cy.wait(2000);
        cy.get('input[placeholder="E-mail"]').type('alexandre2@alexandre2.com')
        cy.wait(2000);
        cy.get('input[placeholder="Telefone"]').type('2112345-1234')
        cy.wait(2000);
        cy.get('.adicionar').click()
        cy.wait(2000);
    })
    it('Deve alterar o primeiro contato', () => {
        cy.get('.edit').eq(0).click();
        cy.wait(2000);
        cy.get('input[placeholder="Nome"]').clear()
        cy.wait(2000);
        cy.get('input[placeholder="E-mail"]').clear()
        cy.wait(2000);
        cy.get('input[placeholder="Telefone"]').clear()
        cy.wait(2000);
        cy.get('input[placeholder="Nome"]').type('Ribeiro')
        cy.wait(2000);
        cy.get('input[placeholder="E-mail"]').type('ribeiro@ribeiro.com')
        cy.wait(2000);
        cy.get('input[placeholder="Telefone"]').type('2112345-1234')
        cy.wait(2000);
        cy.get('.alterar').click()
        cy.wait(5000);
    })

    it('Deve deletar o segundo contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').eq(1).find('.delete').click();
        cy.wait(5000);
    })
})