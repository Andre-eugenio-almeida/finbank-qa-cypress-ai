# Casos de Teste — RF-001 Login

## CT-001 — Login com credenciais válidas

**Prioridade:** Alta  
**Tipo:** Funcional / Positivo  
**Risco:** R-001

### Pré-condições
- Cliente possui CPF cadastrado.
- Cliente possui senha válida.
- Cliente está na tela de login.

### Dados de teste
- CPF: usuário válido
- Senha: senha válida

### Passos
1. Informar um CPF válido.
2. Informar uma senha válida.
3. Clicar em "Entrar".

### Resultado esperado
O sistema deve autenticar o cliente e direcioná-lo para o dashboard.

---

## CT-002 — Login com senha inválida

**Prioridade:** Alta  
**Tipo:** Funcional / Negativo  
**Risco:** R-001

### Pré-condições
- CPF cadastrado.

### Passos
1. Informar CPF válido.
2. Informar senha incorreta.
3. Clicar em "Entrar".

### Resultado esperado
O sistema deve impedir o acesso e apresentar uma mensagem de erro.

---

## CT-003 — Login com CPF inválido

**Prioridade:** Alta  
**Tipo:** Funcional / Negativo  
**Risco:** R-001

### Passos
1. Informar CPF inválido.
2. Informar senha.
3. Clicar em "Entrar".

### Resultado esperado
O sistema deve impedir a autenticação e apresentar uma mensagem adequada.

---

## CT-004 — Login sem informar CPF

**Prioridade:** Média  
**Tipo:** Validação

### Passos
1. Deixar o campo CPF vazio.
2. Informar uma senha.
3. Clicar em "Entrar".

### Resultado esperado
O sistema deve informar que o CPF é obrigatório.

---

## CT-005 — Login sem informar senha

**Prioridade:** Média  
**Tipo:** Validação

### Passos
1. Informar CPF válido.
2. Deixar a senha vazia.
3. Clicar em "Entrar".

### Resultado esperado
O sistema deve informar que a senha é obrigatória.

---

## CT-006 — Login com CPF e senha vazios

**Prioridade:** Média  
**Tipo:** Validação

### Passos
1. Não informar CPF.
2. Não informar senha.
3. Clicar em "Entrar".

### Resultado esperado
O sistema deve apresentar as validações dos campos obrigatórios.

---

### CT-007 — Múltiplas tentativas de login inválidas

**Prioridade:** Alta

**Tipo:** Segurança / Negativo

**Risco:** R-002

### Passos

1. Acessar a tela de login do FinBank.
2. Informar um CPF válido.
3. Informar uma senha incorreta.
4. Realizar 5 tentativas consecutivas de autenticação inválida.

### Resultado esperado

O sistema deve bloquear a conta após a 5ª tentativa consecutiva de autenticação inválida e apresentar a mensagem **"Conta bloqueada"**.

### Resultado obtido

**Aprovado.**

O teste automatizado realizado com Cypress confirmou o bloqueio após 5 tentativas inválidas.

* Testes executados: 1
* Testes aprovados: 1
* Testes reprovados: 0
* Resultado: **PASS**


---

## CT-008 — Logout e tentativa de acesso à sessão anterior

**Prioridade:** Alta  
**Tipo:** Segurança  
**Risco:** R-004

### Passos
1. Realizar login com credenciais válidas.
2. Acessar o dashboard.
3. Realizar logout.
4. Utilizar o botão voltar do navegador.
5. Tentar acessar uma página protegida.

### Resultado esperado
O sistema não deve permitir acesso utilizando a sessão encerrada e deve direcionar o cliente para a tela de login.