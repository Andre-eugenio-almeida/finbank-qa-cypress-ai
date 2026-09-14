# RF-001 — Autenticação do Cliente

## Objetivo

Permitir que o cliente acesse sua conta bancária por meio de CPF e senha.

## Descrição

O sistema deve permitir que o cliente informe seu CPF e sua senha para realizar a autenticação.

Quando as credenciais forem válidas, o sistema deve permitir o acesso ao dashboard da conta.

Quando as credenciais forem inválidas, o sistema deve impedir o acesso e apresentar uma mensagem informativa ao cliente.

## Regras de Negócio

- O CPF é obrigatório.
- A senha é obrigatória.
- O CPF deve possuir formato válido.
- A senha deve ser validada pelo sistema.
- Credenciais inválidas não devem permitir acesso à conta.
- Após autenticação bem-sucedida, o cliente deve ser direcionado ao dashboard.
- O sistema deve controlar tentativas consecutivas de autenticação inválida.
- A sessão do cliente deve ser encerrada após o logout.

## Critérios de Aceitação

### CA-001 — Login válido

Dado que o cliente possui credenciais válidas,

quando informar CPF e senha corretamente,

então o sistema deve permitir o acesso ao dashboard.

### CA-002 — Credenciais inválidas

Dado que o cliente informa credenciais inválidas,

quando tentar realizar o login,

então o sistema deve impedir o acesso e apresentar uma mensagem de erro.

### CA-003 — Campos obrigatórios

Dado que o cliente não informou CPF ou senha,

quando tentar realizar o login,

então o sistema deve informar que os campos são obrigatórios.

## Riscos iniciais

- Possibilidade de acesso com credenciais inválidas.
- Ausência de controle contra múltiplas tentativas de login.
- Exposição de informações sensíveis na mensagem de erro.
- Sessão permanecer ativa após logout.
- Manipulação das requisições de autenticação.