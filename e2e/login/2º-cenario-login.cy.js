describe('Verificação de Login', () => {
  it('Cenário de Teste 2 (E-mail correto e Senha incorreta)', () => {
    cy.visit('https://www.gestaotributaria.com.br/')
    cy.wait(500)
    cy.get('.css-1vr8h81 > .MuiButtonBase-root').click()
    cy.wait(300)
    cy.get(':nth-child(1) > .MuiInputBase-root').type('emailCorreto@gt.com.br')
    cy.wait(300)
    cy.get('.css-1ozsvti > :nth-child(2) > .MuiInputBase-root').type('senhaIncorreta')
    cy.wait(300)
    cy.get('.css-1ozsvti > .MuiButtonBase-root').click()
    cy.wait(500)

  })
})


// Resultado esperado: Login Impedido e mensagem de retorno ao usuário: "Usuário ou senha inválidos."

// Resultado obtido: Login Impedido e mensagem de retorno ao usuário: "Usuário ou senha inválidos."

/* Resultado final: Requisição GET - Sucesso 200 | Requisição POST - Erro 401 Authentication
Comportamento correto, porém, é possível melhorar a mensagem de retorno. */

/* Sugestão: O sistema possui sua própria base de dados, onde consta a lista de usuários (nome, e-email...) que
utilizam do sistema da Gestão Tributária. Ou seja, ele sabe que para esse cenário de teste, o que foi digitado
incorretamente foi a senha, e não o e-mail. Dessa forma, acredito que se na mensagem, especificasse que o erro
foi no "input" de senha, ficaria melhor ao usuário, algo do tipo:

Senha inválida. */

//Observações (Cenário 2 - Login): 