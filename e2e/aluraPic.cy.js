describe('Verificar validacoes para cadastro', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
        cy.contains('a', 'Register now')
            .click();
        cy.contains('button', 'Register')
            .click();
    });
    it('verificar menssagens de requerimento para validacao', () => {
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
        cy.get('input[formcontrolname="userName"]')
            .type('SS{enter}');
        cy.contains('ap-vmessage', 'Must be lower case')
            .should('be.visible');
    });
    it('verificar menssagem de carecteries minimos para a senha', () => {
        cy.get('input[formcontrolname="password"]')
            .type('1234567{enter}');
        cy.contains('ap-vmessage', 'Mininum length is 8')
            .should('be.visible');
    });
    const usuarios = require('../fixtures/usuarios.json')
    usuarios.forEach(usuario =>{
        it.only('realizar novos registros '+ usuario.userName , () => {
            cy.get('input[formcontrolname="email"]')
                .type(usuario.email);
            cy.get('input[formcontrolname="fullName"]')
                .type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]')
                .type(usuario.userName);
            cy.get('input[formcontrolname="password"]')
                .type(usuario.password);
            cy.contains('button', 'Register')
                .click();
        })
    
    })
    
});