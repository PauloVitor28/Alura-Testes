declare namespace Cypress {
    interface Chainable<Subject> {
        login(nome: string, senha: string): Chainable<any>

    }
}