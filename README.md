# FinBank QA — Projeto de Qualidade de Software

Projeto de QA desenvolvido para demonstrar, na prática, um processo completo de qualidade de software, desde a análise de requisitos até a automação de testes E2E.

## 🎯 Objetivo

O **FinBank** é uma aplicação web fictícia de serviços bancários criada para praticar e demonstrar técnicas de Quality Assurance (QA).

O projeto busca representar um fluxo de trabalho próximo ao utilizado em equipes de desenvolvimento de software, envolvendo:

* Análise de requisitos
* Identificação e análise de riscos
* Elaboração de casos de teste
* BDD / Gherkin
* Testes funcionais
* Automação E2E
* Identificação e documentação de bugs
* Reteste e validação de correções
* Integração contínua
* Uso de Inteligência Artificial aplicada a QA

## 🧪 Escopo atual

O primeiro módulo desenvolvido é o **Login**.

Funcionalidades atualmente cobertas:

* Login com credenciais válidas
* Validação de senha inválida
* Validação de CPF inválido
* Validação de CPF obrigatório
* Validação de senha obrigatória
* Validação de CPF e senha obrigatórios
* Bloqueio após múltiplas tentativas de autenticação inválida

## 📊 Resultado dos testes

A suíte automatizada atual possui:

| Métrica           | Resultado |
| ----------------- | --------: |
| Testes executados |         7 |
| Testes aprovados  |         7 |
| Testes reprovados |         0 |
| Status            |    ✅ PASS |

Execução realizada com Cypress em Chrome headless.

## 🐞 Bugs encontrados

Durante o desenvolvimento dos testes foram identificados e corrigidos defeitos relacionados ao requisito de Login.

### BUG-001 — CPF obrigatório

O sistema não apresentava a mensagem específica esperada quando o CPF não era informado.

**Status:** Corrigido e validado.

### BUG-002 — Bloqueio após tentativas inválidas

O sistema inicialmente permitia múltiplas tentativas de autenticação inválida sem aplicar o mecanismo de bloqueio esperado.

O defeito foi identificado através do teste automatizado **CT-007**.

**Status:** Corrigido e validado.

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

Essa estrutura representa o fluxo:

**Requisito → Risco → Caso de Teste → BDD → Automação → Bug → Reteste**

## 🛠️ Tecnologias e ferramentas

* **Cypress** — automação de testes E2E
* **JavaScript** — desenvolvimento dos testes
* **Node.js** — execução da aplicação e ambiente de testes
* **Express** — API/backend da aplicação
* **Gherkin / BDD** — especificação dos comportamentos
* **Git** — controle de versão
* **GitHub** — hospedagem do código
* **VS Code** — ambiente de desenvolvimento

## ▶️ Como executar o projeto

### 1. Instalar as dependências

```bash
npm install
```

### 2. Iniciar a aplicação

```bash
node app/server.js
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

### 3. Executar os testes Cypress

Em outro terminal:

```bash
npx cypress run --e2e --browser chrome
```

## 🔐 Credenciais de teste

Para os cenários automatizados de login:

```text
CPF: 12345678900
Senha: FinBank@123
```

> As credenciais acima são fictícias e utilizadas exclusivamente para fins de teste.

## 📈 Próximas evoluções

O projeto será evoluído gradualmente para ampliar a cobertura de QA.

Próximos objetivos:

* Dashboard
* Logout e invalidação de sessão
* Saldo
* Extrato
* Transferências
* Pagamentos
* Testes de API
* Testes negativos e de segurança
* CI/CD com GitHub Actions
* Relatórios de execução
* Testes assistidos por Inteligência Artificial
* Ampliação da cobertura automatizada

## 👨‍💻 Sobre o projeto

Este projeto faz parte do meu portfólio de **Quality Assurance**, com foco na aplicação prática de conceitos de testes de software, automação E2E, análise de riscos, BDD, documentação de defeitos e melhoria contínua da qualidade.

---

**Status atual:** 🚀 Em desenvolvimento
