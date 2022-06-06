describe('login de usuario alura pic', () => {
    
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })
    it('verifica usuario valido', () =>{
        cy.login('flavio', '123'); //comando personalizado
        cy.contains('a', '(Logout)').should('be.visible');
    })
    it('verifica usuario não valido', () =>{
        cy.get('input[formcontrolname="userName"]').type('flavi');
        cy.get('input[formcontrolname="password"]').type('1234');
        cy.get('button[type="submit"]').click();
        cy.get(':nth-child(1) > ap-vmessage > .text-danger').should('be.visible');

    })


})    