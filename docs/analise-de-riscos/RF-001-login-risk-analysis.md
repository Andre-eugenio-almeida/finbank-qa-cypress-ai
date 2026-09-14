# Análise de Riscos — RF-001 Login

## Objetivo

Identificar riscos funcionais, de segurança e de experiência do usuário relacionados ao processo de autenticação do FinBank.

## Matriz de Riscos

| ID | Risco | Probabilidade | Impacto | Prioridade |
|---|---|---|---|---|
| R-001 | Acesso com credenciais inválidas | Alta | Crítico | Alta |
| R-002 | Ausência de bloqueio após múltiplas tentativas | Média | Crítico | Alta |
| R-003 | Exposição de informações na mensagem de erro | Média | Alto | Alta |
| R-004 | Sessão permanecer ativa após logout | Média | Crítico | Alta |
| R-005 | CPF em formato inválido aceito pelo sistema | Média | Médio | Média |
| R-006 | Campos obrigatórios sem validação | Média | Médio | Média |
| R-007 | Manipulação da requisição de autenticação | Média | Crítico | Alta |
| R-008 | Sessão expirada sem redirecionamento para login | Média | Alto | Alta |

## Análise dos principais riscos

### R-001 — Acesso com credenciais inválidas

O sistema pode permitir acesso quando CPF ou senha estiverem incorretos.

**Impacto:** acesso não autorizado à conta.

**Testes recomendados:**
- CPF válido + senha inválida
- CPF inválido + senha válida
- CPF inválido + senha inválida
- CPF inexistente + senha qualquer

---

### R-002 — Múltiplas tentativas de autenticação

Um usuário mal-intencionado pode realizar várias tentativas consecutivas de login.

**Impacto:** possibilidade de ataque de força bruta.

**Testes recomendados:**
- Realizar várias tentativas consecutivas com senha inválida.
- Verificar se existe bloqueio ou mecanismo de proteção.
- Validar mensagem apresentada ao usuário.

---

### R-003 — Exposição de informações

Mensagens de erro muito específicas podem permitir identificar se determinado CPF possui cadastro.

**Exemplo de risco:**

"CPF cadastrado, mas senha incorreta."

Essa informação pode facilitar a enumeração de usuários.

**Teste recomendado:**

Verificar se o sistema utiliza mensagens genéricas para credenciais inválidas.

---

### R-004 — Logout

Após realizar logout, o usuário não deve conseguir acessar novamente páginas protegidas utilizando a sessão anterior.

**Testes recomendados:**
- Realizar login.
- Executar logout.
- Tentar acessar o dashboard novamente.
- Utilizar o botão voltar do navegador.
- Verificar validade da sessão.

---

### R-007 — Manipulação da API

A autenticação deve ser validada no backend.

O frontend não deve ser responsável sozinho por determinar se o usuário está autenticado.

**Testes recomendados:**
- Alterar payload da requisição.
- Enviar credenciais inválidas diretamente para a API.
- Remover campos obrigatórios.
- Alterar valores do payload.
- Validar códigos HTTP retornados.

## Conclusão

Os maiores riscos identificados estão relacionados à autenticação, controle de sessão e segurança das requisições.

A prioridade dos testes deve considerar principalmente os cenários que podem resultar em acesso não autorizado ou exposição de informações do cliente.