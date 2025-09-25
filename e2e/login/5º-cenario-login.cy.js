describe('Verificação de Login', () => {
  it('Cenário de Teste 5 (Inserir somente E-mail)', () => {
    cy.visit('https://www.gestaotributaria.com.br/')
    cy.wait(500)
    cy.get('.css-1vr8h81 > .MuiButtonBase-root').click()
    cy.wait(300)
    cy.get(':nth-child(1) > .MuiInputBase-root').type('emailCorreto@g.com.br')
    cy.wait(500)
    cy.get('.css-1ozsvti > :nth-child(2) > .MuiInputBase-root').type('')
    cy.wait(500)
    cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
    cy.wait(500)

  })
})



// Resultado esperado: Login Impedido e mensagem de retorno ao usuário: "Verifique a senha digitada."

/* Resultado obtido: Login Impedido e CypressError: cy.type()
  cannot accept an empty string. You need to actually type something */

/* Resultado final: Requisições GET & POST - Sucesso 200 | Comportamento correto */

/* Sugestão: O sistema do site é inteligente. Se não foi inserido nenhum valor no campo de senha, o próprio
Gestão Tributária vai entender isso. Nesse caso do cenário 5, seria melhor uma mensagem de retorno nesse modelo:

"Digite uma senha", ao invés de "Verifique a senha digitada"... até porque, não houve nenhuma senha digitada.*/

// Observações (Cenário 5 - Login):