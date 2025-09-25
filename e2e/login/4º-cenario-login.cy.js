describe('Verificação de Login', () => {
  it('Cenário de Teste 4 (E-mail e Senha incorretos)', () => {
    cy.visit('https://www.gestaotributaria.com.br/')
    cy.wait(500)
    cy.get('.css-1vr8h81 > .MuiButtonBase-root').click()
    cy.wait(300)
    cy.get(':nth-child(1) > .MuiInputBase-root').type('emailIncorreto@g.com.br')
    cy.wait(300)
    cy.get('.css-1ozsvti > :nth-child(2) > .MuiInputBase-root').type('senhaIncorreta')
    cy.wait(300)
    cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
    cy.wait(500)

  })
})



// Resultado esperado: Login Impedido e mensagem de retorno ao usuário: "Usuário não encontrado"

// Resultado obtido: Login Impedido e mensagem de retorno ao usuário: "Usuário não encontrado"

/* Resultado final: Requisição GET - Sucesso 200 | Requisição POST - Erro 401 Authentication | 
  Comportamento correto */

/* Observações (Cenário 4 - Login): Depois desse teste, conclui-se que independemente se a senha foi digitada
corretamente ou não, basta só o e-mail ter sido digitado incorretamente que a mensagem de retorno vai será sempre
"Usuário não encontrado" */ 