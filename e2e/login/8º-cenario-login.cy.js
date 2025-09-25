describe('Verificação de Login', () => {
  it('Cenário de Teste 8 (E-mail fora do formato padrão)', () => {
    cy.visit('https://www.gestaotributaria.com.br/')
    cy.wait(500)
    cy.get('.css-1vr8h81 > .MuiButtonBase-root').click()
    cy.wait(300)
    cy.get(':nth-child(1) > .MuiInputBase-root').type('emailCorreto@')
    cy.wait(300)
    cy.get('.css-1ozsvti > :nth-child(2) > .MuiInputBase-root').type('senhaCorreta')
    cy.wait(300)
    cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
    cy.wait(500)

  })
})



// Resultado esperado: Login Impedido e mensagem de retorno ao usuário: "Verifique o email digitado."

// Resultado obtido: Login Impedido e mensagem de retorno ao usuário: "Verifique o email digitado."

// Resultado final: Requisições GET & POST - Sucesso 200 | Comportamento correto

/* Observações (Cenário 8 - Login): Esse caso é uma excessão, quando o usuário digita um e-mail 
fora do padrão, o login é impedido antes mesmo do clique no botão de "Entrar".*/ 