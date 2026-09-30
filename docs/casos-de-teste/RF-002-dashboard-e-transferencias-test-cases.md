# RF-002 - Dashboard e Transferências

## Objetivo

Validar o acesso ao dashboard do FinBank, o comportamento da sessão do usuário e as principais regras de negócio relacionadas às transferências e ao saldo disponível.

## Pré-condições

- Aplicação FinBank em execução.
- Usuário autenticado para os cenários que exigem acesso ao dashboard.
- Saldo inicial do usuário: R$ 1.000,00.

---

## CT-008 - Acessar dashboard após login válido

**Objetivo:** Validar o acesso ao dashboard após autenticação válida.

**Pré-condição:** Usuário com credenciais válidas.

**Passos:**
1. Acessar a tela de login.
2. Informar CPF válido.
3. Informar senha válida.
4. Realizar o login.

**Resultado esperado:** O usuário deve ser direcionado para o dashboard.

---

## CT-009 - Realizar logout

**Objetivo:** Validar o encerramento da sessão do usuário.

**Passos:**
1. Acessar o dashboard com usuário autenticado.
2. Acionar a opção de logout.

**Resultado esperado:** A sessão deve ser encerrada e o usuário deve retornar à tela de login.

---

## CT-010 - Impedir acesso ao dashboard sem autenticação

**Objetivo:** Validar o controle de acesso ao dashboard.

**Passos:**
1. Acessar diretamente a página do dashboard sem autenticação.

**Resultado esperado:** O usuário deve ser redirecionado para a tela de login.

---

## CT-011 - Exibir nome do usuário autenticado

**Objetivo:** Validar a identificação do usuário no dashboard.

**Passos:**
1. Acessar o dashboard com usuário autenticado.

**Resultado esperado:** O nome do usuário autenticado deve ser exibido corretamente.

---

## CT-012 - Realizar transferência com sucesso

**Objetivo:** Validar uma transferência com dados válidos.

**Passos:**
1. Acessar o dashboard.
2. Informar um CPF de destinatário válido.
3. Informar um valor de transferência válido.
4. Acionar o botão de transferência.

**Resultado esperado:** O sistema deve informar que a transferência foi realizada com sucesso.

---

## CT-013 - Impedir transferência sem CPF do destinatário

**Objetivo:** Validar a obrigatoriedade do CPF do destinatário.

**Passos:**
1. Acessar o dashboard.
2. Deixar o campo de CPF do destinatário vazio.
3. Informar um valor válido.
4. Acionar o botão de transferência.

**Resultado esperado:** O sistema deve informar que o CPF do destinatário é obrigatório.

---

## CT-014 - Impedir transferência sem valor

**Objetivo:** Validar a obrigatoriedade do valor da transferência.

**Passos:**
1. Acessar o dashboard.
2. Informar um CPF de destinatário.
3. Não informar o valor.
4. Acionar o botão de transferência.

**Resultado esperado:** O sistema deve informar que é necessário informar um valor válido.

---

## CT-015 - Impedir transferência com valor zero

**Objetivo:** Validar a regra de valor mínimo da transferência.

**Passos:**
1. Acessar o dashboard.
2. Informar um CPF de destinatário.
3. Informar o valor zero.
4. Acionar o botão de transferência.

**Resultado esperado:** A transferência não deve ser realizada e o sistema deve informar que o valor é inválido.

---

## CT-016 - Impedir transferência com valor negativo

**Objetivo:** Validar a rejeição de valores negativos.

**Passos:**
1. Acessar o dashboard.
2. Informar um CPF de destinatário.
3. Informar um valor negativo.
4. Acionar o botão de transferência.

**Resultado esperado:** A transferência não deve ser realizada e o sistema deve informar que o valor é inválido.

---

## CT-017 - Exibir saldo disponível

**Objetivo:** Validar a apresentação do saldo inicial do usuário.

**Passos:**
1. Acessar o dashboard com usuário autenticado.

**Resultado esperado:** O sistema deve exibir o saldo disponível de R$ 1.000,00.

---

## CT-018 - Realizar transferência dentro do saldo disponível

**Objetivo:** Validar uma transferência cujo valor está dentro do saldo disponível.

**Passos:**
1. Acessar o dashboard.
2. Informar um CPF de destinatário.
3. Informar uma transferência de R$ 500,00.
4. Realizar a transferência.

**Resultado esperado:**
- A transferência deve ser realizada com sucesso.
- O saldo deve ser atualizado para R$ 500,00.

---

## CT-019 - Impedir transferência acima do saldo disponível

**Objetivo:** Validar a regra de saldo insuficiente.

**Passos:**
1. Acessar o dashboard.
2. Informar um CPF de destinatário.
3. Informar uma transferência de R$ 1.500,00.
4. Tentar realizar a transferência.

**Resultado esperado:**
- A transferência não deve ser realizada.
- O sistema deve informar "Saldo insuficiente".
- O saldo deve permanecer em R$ 1.000,00.

---

## CT-020 - Atualizar saldo após múltiplas transferências

**Objetivo:** Validar a atualização do saldo após mais de uma transferência durante a mesma sessão.

**Passos:**
1. Acessar o dashboard com saldo de R$ 1.000,00.
2. Realizar uma transferência de R$ 300,00.
3. Realizar uma segunda transferência de R$ 200,00.

**Resultado esperado:**
- Após a primeira transferência, o saldo deve ser R$ 700,00.
- Após a segunda transferência, o saldo deve ser R$ 500,00.
- As transferências devem ser realizadas com sucesso.

---

## Resultado dos testes

| Caso de teste | Descrição | Status |
|---|---|---|
| CT-008 | Acesso ao dashboard | Passou |
| CT-009 | Logout | Passou |
| CT-010 | Bloqueio sem autenticação | Passou |
| CT-011 | Identificação do usuário | Passou |
| CT-012 | Transferência com sucesso | Passou |
| CT-013 | Transferência sem destinatário | Passou |
| CT-014 | Transferência sem valor | Passou |
| CT-015 | Valor zero | Passou |
| CT-016 | Valor negativo | Passou |
| CT-017 | Saldo inicial | Passou |
| CT-018 | Transferência dentro do saldo | Passou |
| CT-019 | Transferência acima do saldo | Passou |
| CT-020 | Múltiplas transferências | Passou |

**Total:** 13 casos de teste automatizados e aprovados.