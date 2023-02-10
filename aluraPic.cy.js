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

    it('verificar a mensagem ‘Must be lower case’ quando e usada letra maiuscula no user name', () => {
        cy.contains('a', 'Register now')
            .click();
        cy.contains('button', 'Register')
            .click();
        cy.get('input[formcontrolname="userName"]')
          .type('SS{enter}');
        cy.contains('ap-vmessage', 'Must be lower case')
            .should('be.visible');
    });

    it('verificar menssagem de carecteries minimos para a senha', () => {
        cy.contains('a', 'Register now')
            .click();
        cy.contains('button', 'Register')
            .click();
        cy.get('input[formcontrolname="password"]')
            .type('1234567{enter}');
        cy.contains('ap-vmessage', 'Mininum length is 8')
            .should('be.visible');
    });

});