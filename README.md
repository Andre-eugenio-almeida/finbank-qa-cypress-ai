# FinBank QA — Projeto de Qualidade de Software

Projeto de QA desenvolvido para demonstrar, na prática, um processo de qualidade de software desde a análise de requisitos até a automação de testes E2E.

## 🎯 Objetivo

O **FinBank** é uma aplicação web fictícia de serviços bancários criada para praticar e demonstrar técnicas de **Quality Assurance (QA)**.

O projeto busca representar um fluxo de trabalho próximo ao utilizado em equipes de desenvolvimento de software, envolvendo:

* Análise de requisitos
* Identificação e análise de riscos
* Elaboração de casos de teste
* BDD / Gherkin
* Testes funcionais
* Automação de testes E2E
* Identificação e documentação de bugs
* Reteste e validação de correções
* Controle de versão com Git
* Integração contínua
* Uso de Inteligência Artificial aplicada a QA

---

## 🧪 Escopo atual

O projeto atualmente possui cobertura automatizada para os módulos de **Login** e **Dashboard**, incluindo funcionalidades de autenticação e transferência.

### 🔐 Login

Cenários automatizados:

* Login com credenciais válidas
* Validação de senha inválida
* Validação de CPF inválido
* Validação de CPF obrigatório
* Validação de senha obrigatória
* Validação de CPF e senha obrigatórios
* Bloqueio após múltiplas tentativas de autenticação inválida

### 📊 Dashboard

Cenários automatizados:

* Acesso ao dashboard após login válido
* Logout do usuário
* Bloqueio de acesso ao dashboard sem autenticação
* Exibição do nome do usuário autenticado

### 💸 Transferência

Cenários automatizados:

* Transferência realizada com sucesso
* Transferência sem CPF do destinatário
* Transferência sem valor
* Transferência com valor zero
* Transferência com valor negativo

---

## 📊 Resultado dos testes

A suíte de testes do **Dashboard** possui atualmente **9 cenários automatizados**, todos aprovados.

| Métrica           | Resultado |
| ----------------- | --------: |
| Testes executados |         9 |
| Testes aprovados  |         9 |
| Testes reprovados |         0 |
| Testes pendentes  |         0 |
| Status            |    ✅ PASS |

Execução realizada com **Cypress em Chrome headless**.

### Última execução

```text
Spec: dashboard.cy.js

Tests:   9
Passing: 9
Failing: 0
Pending: 0
Skipped: 0

√ All specs passed!
```

---

## 🐞 Bugs encontrados

Durante o desenvolvimento dos testes foram identificados e corrigidos defeitos relacionados aos requisitos de Login.

### BUG-001 — CPF obrigatório

O sistema não apresentava a mensagem específica esperada quando o CPF não era informado.

**Status:** Corrigido e validado.

### BUG-002 — Bloqueio após tentativas inválidas

O sistema inicialmente permitia múltiplas tentativas de autenticação inválida sem aplicar o mecanismo de bloqueio esperado.

O defeito foi identificado através do teste automatizado **CT-007**.

**Status:** Corrigido e validado.

---

## 📋 Documentação de QA

O projeto possui documentação organizada nas seguintes áreas:

```text
docs/
├── requisitos/
├── analise-de-riscos/
├── casos-de-teste/
├── bdd/
└── bug-reports/
```

A documentação representa o fluxo:

**Requisito → Risco → Caso de Teste → BDD → Automação → Bug → Reteste**

---

## 🛠️ Tecnologias e ferramentas

* **Cypress** — automação de testes E2E
* **JavaScript** — desenvolvimento dos testes automatizados
* **Node.js** — execução da aplicação e ambiente de testes
* **Express** — servidor da aplicação
* **HTML/CSS** — interface da aplicação
* **Gherkin / BDD** — especificação dos comportamentos
* **Git** — controle de versão
* **GitHub** — hospedagem e versionamento do projeto
* **VS Code** — ambiente de desenvolvimento

---

## 📁 Estrutura do projeto

```text
finbank-qa-cypress-ai/
│
├── app/
│   ├── public/
│   └── server.js
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── dashboard.cy.js
│   ├── fixtures/
│   └── support/
│
├── docs/
│   ├── requisitos/
│   ├── analise-de-riscos/
│   ├── casos-de-teste/
│   ├── bdd/
│   └── bug-reports/
│
├── package.json
└── README.md
```

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Andre-eugenio-almeida/finbank-qa-cypress-ai.git
```

### 2. Acessar o diretório

```bash
cd finbank-qa-cypress-ai
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar a aplicação

```bash
node app/server.js
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

### 5. Executar os testes Cypress

Em outro terminal:

```bash
npx cypress run --e2e --browser chrome
```

Para executar especificamente os testes do Dashboard:

```bash
npx cypress run --spec "cypress/e2e/dashboard.cy.js" --browser chrome
```

---

## 🔐 Credenciais de teste

Para os cenários automatizados de login:

```text
CPF: 12345678900
Senha: FinBank@123
```

> As credenciais acima são fictícias e utilizadas exclusivamente para fins de teste.

---

## 🧪 Tipos de testes aplicados

O projeto utiliza diferentes abordagens de teste, incluindo:

* Testes funcionais
* Testes E2E
* Testes positivos
* Testes negativos
* Validação de mensagens
* Validação de autenticação
* Validação de sessão
* Testes de regras de negócio
* Testes de fluxo de usuário

---

## 🚀 Próximas evoluções

O projeto continuará sendo evoluído gradualmente para ampliar a cobertura de QA.

Próximos objetivos:

* Ampliação dos cenários do Dashboard
* Saldo da conta
* Extrato
* Novos cenários de transferência
* Pagamentos
* Testes de API
* Testes de contrato
* Testes negativos adicionais
* Testes de segurança
* Integração contínua com GitHub Actions
* Relatórios automatizados de execução
* Ampliação da cobertura automatizada
* Aplicação de Inteligência Artificial em atividades de QA

---

## 👨‍💻 Sobre o projeto

Este projeto faz parte do meu portfólio de **Quality Assurance**, com foco na aplicação prática de conceitos de testes de software, automação E2E, análise de riscos, BDD, documentação de defeitos e melhoria contínua da qualidade.

O objetivo é demonstrar não apenas a escrita de testes automatizados, mas também a aplicação de um processo de QA envolvendo **requisitos, riscos, casos de teste, documentação, identificação de defeitos, correções, retestes e automação**.

---

## 📌 Status do projeto

🚀 **Em desenvolvimento**

**Última etapa concluída:** automação dos cenários do Dashboard e Transferência com Cypress.

**Resultado atual:** `9/9 testes aprovados` no `dashboard.cy.js`.

