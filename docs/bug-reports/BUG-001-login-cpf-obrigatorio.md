# BUG-001 — Mensagem incorreta ao tentar login sem informar CPF

## Título

Mensagem de validação incorreta ao tentar realizar login sem informar o CPF.

## Ambiente

- Sistema: FinBank
- Ambiente: Local
- URL: http://localhost:3000
- Navegador: Google Chrome
- Cypress: 16.0.0
- Sistema operacional: Windows

## Pré-condições

- Aplicação FinBank em execução.
- Usuário acessando a tela de login.
- Senha válida disponível para o teste.

## Passos para reprodução

1. Acessar `http://localhost:3000`.
2. Deixar o campo CPF vazio.
3. Informar uma senha válida.
4. Clicar no botão "Entrar".

## Resultado esperado

O sistema deve impedir o login e apresentar a mensagem:

> CPF é obrigatório

## Resultado atual

O sistema apresenta a mensagem:

> CPF e senha são obrigatórios

A mensagem apresentada não corresponde ao comportamento definido no requisito e no cenário BDD.

## Evidência

Screenshot gerado automaticamente pelo Cypress:

`cypress/screenshots/login.cy.js/CT-004 - deve impedir login sem informar CPF (failed).png`

## Severidade

**Média**

A falha não permite acesso indevido à conta, porém apresenta uma informação incorreta ao usuário e não atende ao requisito especificado.

## Prioridade

**Média**

A correção deve ser realizada antes da conclusão da funcionalidade de autenticação.

## Requisito relacionado

RF-001 — Login

## Caso de teste relacionado

CT-004 — Deve impedir login sem informar CPF.

## Cenário BDD relacionado

Login sem informar CPF.

## Automação

Teste automatizado em:

`cypress/e2e/login.cy.js`

Resultado da execução:

- 6 testes executados
- 5 aprovados
- 1 falhou
- CT-004 reproduziu o defeito

## Status

**Corrigido**

## Reteste

Após a correção da regra de validação do campo CPF, o cenário CT-004 foi executado novamente utilizando Cypress.

Resultado do reteste:

- CT-004 — Aprovado
- Mensagem apresentada: **"CPF é obrigatório"**
- 6 testes executados
- 6 testes aprovados
- 0 testes reprovados

O comportamento da aplicação está de acordo com o requisito RF-001 e com o cenário BDD correspondente.

## Evidência do reteste

Execução automatizada:

```text
6 passing
0 failing

## Observação de QA

O defeito foi identificado durante a execução do teste automatizado CT-004, comparando o comportamento da aplicação com o resultado esperado definido no requisito e no BDD.