Feature: Autenticação do cliente

  Como cliente do FinBank
  Quero realizar login com meu CPF e senha
  Para acessar minha conta com segurança

  Background:
    Given que o cliente está na tela de login

  Scenario: Login com credenciais válidas
    When o cliente informa um CPF válido
    And informa uma senha válida
    And clica em "Entrar"
    Then deve acessar o dashboard da conta

  Scenario: Login com senha inválida
    When o cliente informa um CPF válido
    And informa uma senha inválida
    And clica em "Entrar"
    Then deve visualizar uma mensagem de erro
    And não deve acessar o dashboard

  Scenario: Login sem informar CPF
    When o cliente deixa o CPF vazio
    And informa uma senha válida
    And clica em "Entrar"
    Then deve visualizar a mensagem "CPF é obrigatório"

  Scenario: Login sem informar senha
    When o cliente informa um CPF válido
    And deixa a senha vazia
    And clica em "Entrar"
    Then deve visualizar a mensagem "Senha é obrigatória"

  Scenario: Login com CPF inválido
    When o cliente informa um CPF inválido
    And informa uma senha válida
    And clica em "Entrar"
    Then deve visualizar uma mensagem de erro
    And não deve acessar o dashboard
    