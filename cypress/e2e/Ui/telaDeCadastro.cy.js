

describe('testes na tela de cadastro',()=>{

    beforeEach(()=>{
        cy.visit('/')
    });
    it('teste 01 cadastro com sucesso',()=>{
        cy.contains('Registrar').click();
        cy.get('[type="email"]').eq(1).type('tartaruganinja203@mestresplinter.com',{force:true})
        cy.get(':nth-child(3) > .input__default').type('claudinelson',{force:true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('tt@tt@123',{force:true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('tt@tt@123',{force:true})
        cy.get('#toggleAddBalance').click({force:true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})

        cy.get('#modalText').invoke('text').then((texto)=>{
                const numeroDaConta = texto.match(/\d+-\d+/)[0];


                cy.get('#btnCloseModal').click()
                cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('tartaruganinja203@mestresplinter.com')
                cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('tt@tt@123')
                cy.get('.otUnI').click()

            cy.contains(numeroDaConta).should('be.visible')

        })
        cy.get('#textBalance > span').invoke('text').then((text) => {
            const cleanText = text.replace(/[^\d.,]/g, '');
            const saldo = parseFloat(cleanText.replace(',', '.'));
      
            // Exemplo de asserção
            expect(saldo).to.eq(1);
    });

});
});
/*describe('', () => {
    
});
beforeEach(() => {
    
});
it('', () => {
    
});*/