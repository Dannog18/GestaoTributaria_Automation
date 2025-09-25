describe('Verificação de Login', () => {
    it('Cenário de Teste 1 (E-mail e Senha corretos)', () => {
      cy.visit('https://www.gestaotributaria.com.br/')
      cy.wait(500)
      cy.get('.css-1vr8h81 > .MuiButtonBase-root').click()
      cy.wait(300)
      cy.get(':nth-child(1) > .MuiInputBase-root').type('emailCorreto@gt.com.br')
      cy.wait(300)
      cy.get('.css-1ozsvti > :nth-child(2) > .MuiInputBase-root').type('senhaCorreta')    
      cy.wait(300)
      cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
      cy.wait(500)
    
    })
  })


// Resultado esperado: Efetivação do Login e usuário direcionado a tela inicial do sistema

// Resultado obtido: Efetivação do Login e usuário direcionado a tela inicial do sistema
 
// Resultado final: Requisições GET & POST - Sucesso 200 | Comportamento correto 

//Observações (Cenário 1 - Login): 