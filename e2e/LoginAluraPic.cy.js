describe('Testa um login valido e invalido ', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
    });
    it('Fazer um login invalido', () => {
       cy.login('pvpvpv' , '123')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    });
    
    it('Fazer login valido' , () => {
        cy.login('pvcalil' , 'Scarface00')
    })


});