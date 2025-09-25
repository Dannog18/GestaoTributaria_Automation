describe('Verificação de Login', () => {
  it('Cenário de Teste 7 (Não inserir nenhum dado nos campos)', () => {
    cy.visit('https://www.gestaotributaria.com.br/')
    cy.wait(500)
    cy.get('.css-1vr8h81 > .MuiButtonBase-root').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .MuiInputBase-root').type('')
    cy.wait(1000)
    cy.get('.css-1ozsvti > :nth-child(2) > .MuiInputBase-root').type('')
    cy.wait(1000)
    cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
    cy.wait(500)

  })
})



/* Resultado esperado: Login Impedido e mensagens de retorno ao usuário:
'Verifique o email digitado.' | 'Verifique a senha digitada.' */

/* Resultado obtido: Login Impedido e CypressError: cy.type()
  cannot accept an empty string. You need to actually type something */

/* Resultado final: Requisições GET & POST - Sucesso 200 | Comportamento correto */

/* Sugestão: O sistema do site é inteligente. Se não foram inseridos nenhum valor nos campos de email e senha,
o próprio Gestão Tributária vai entender isso. Nesse caso do cenário 6,
seria melhor uma mensagem de retorno nesse modelo:

"Digite um email", ao invés de "Verifique o email digitado", e "Digite uma senha",
ao invés de "Verifique a senha digitada", até porque, não houve nenhum email ou senha digitados.*/

// Observações (Cenário 7 - Login):