# BUG-002 — Ausência de bloqueio após múltiplas tentativas de login inválido

## Título

Sistema não bloqueia a autenticação após múltiplas tentativas de login com credenciais inválidas.

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

## Passos para reprodução

1. Acessar `http://localhost:3000`.
2. Informar um CPF válido.
3. Informar uma senha inválida.
4. Clicar em "Entrar".
5. Repetir o procedimento até completar 5 tentativas inválidas.

## Resultado esperado

Após múltiplas tentativas consecutivas de autenticação inválida, o sistema deve bloquear temporariamente a autenticação e apresentar uma mensagem informando o bloqueio.

Mensagem esperada:

> Conta bloqueada

## Resultado atual

Após 5 tentativas consecutivas com senha inválida, o sistema continua permitindo novas tentativas e apresenta:

> CPF ou senha inválidos

Não existe bloqueio da autenticação.

## Evidência

Screenshot gerado automaticamente pelo Cypress:

`cypress/screenshots/login.cy.js/CT-007 - deve bloquear login após múltiplas tentativas inválidas (failed).png`

## Severidade

**Alta**

A ausência de mecanismo de proteção contra múltiplas tentativas pode facilitar ataques de força bruta contra a autenticação.

## Prioridade

**Alta**

A correção deve ser realizada antes da conclusão da funcionalidade de autenticação.

## Requisito relacionado

RF-001 — Login

## Risco relacionado

R-002 — Ausência de controle após múltiplas tentativas de autenticação.

## Caso de teste relacionado

CT-007 — Deve bloquear login após múltiplas tentativas inválidas.

## Automação

Teste automatizado em:

`cypress/e2e/login.cy.js`

Resultado da execução:

- 1 teste executado
- 0 aprovados
- 1 falhou
- CT-007 reproduziu o defeito

## Status

## Status

**Corrigido**

## Reteste

Após a implementação do controle de tentativas de autenticação, o cenário CT-007 foi executado novamente utilizando Cypress.

Resultado do reteste:

- CT-007 — Aprovado
- 5 tentativas consecutivas com senha inválida foram realizadas
- Na 5ª tentativa, o sistema apresentou a mensagem **"Conta bloqueada"**
- 1 teste executado
- 1 teste aprovado
- 0 testes reprovados

O comportamento da aplicação está de acordo com o risco R-002 e com o comportamento esperado para proteção contra múltiplas tentativas de autenticação.

## Evidência do reteste

Execução automatizada:

```text
1 passing
0 failing

## Observação de QA

O defeito foi identificado durante a execução do teste automatizado CT-007.

O teste validou o comportamento definido para proteção contra múltiplas tentativas de autenticação e identificou que a aplicação ainda não possui mecanismo de bloqueio após tentativas consecutivas inválidas.