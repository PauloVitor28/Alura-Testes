describe('Login e registro de usuario no alura pic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });
    it('verificar menssagem de validacao', () => {
        cy.contains('a', 'Register now')
            .click();
        cy.contains('button', 'Register')
            .click();
        cy.contains('ap-vmessage', 'Email is required!')
            .should('be.visible');
        cy.contains('button', 'Register')
            .click();
        cy.contains('ap-vmessage', 'Full name is required!')
            .should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!')
            .should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!')
            .should('be.visible');


    });

    it('verificar menssagem de e-mail invalido', () => {
        cy.contains('a', 'Register now')
            .click();
        cy.contains('button', 'Register')
            .click();
        cy.get('input[formcontrolname="email"]')
            .type('pvpvpv')
        cy.contains('ap-vmessage', 'Invalid e-mail')
            .should('be.visible');
    });

});