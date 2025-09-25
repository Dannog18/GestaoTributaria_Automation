describe('Verificação de Login', () => {
    it('Cenário de Teste 9 (Empresa que o usuário pertence está inativa)', () => {
      cy.visit('https://www.gestaotributaria.com.br/')
      cy.wait(500)
      cy.get('.css-1vr8h81 > .MuiButtonBase-root').click()
      cy.wait(300)
      cy.get(':nth-child(1) > .MuiInputBase-root').type('testeInativa@gmail.com')
      cy.wait(300)
      cy.get('.css-1ozsvti > :nth-child(2) > .MuiInputBase-root').type('senhaCorreta')    
      cy.wait(300)
      cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
      cy.wait(500)
    
    })
  })


// Resultado esperado: Login Impedido e mensagem de retorno ao usuário: "Data de acesso da empresa expirou em 31/10/2024."

// Resultado obtido: Login Impedido e mensagem de retorno ao usuário: "Data de acesso da empresa expirou em 31/10/2024."

// Resultado final: Requisição GET - Sucesso 200 | Requisição POST - Erro 401 Authentication | Comportamento correto
  
// Observações (Cenário 9 - Login): 