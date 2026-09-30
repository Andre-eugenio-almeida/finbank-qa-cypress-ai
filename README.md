# FinBank QA — Automação de Testes E2E

Projeto de QA desenvolvido para praticar e demonstrar, na prática, um processo de Quality Assurance, desde a análise de requisitos até a automação e execução contínua dos testes.

O FinBank é uma aplicação web bancária fictícia criada para simular funcionalidades de um sistema financeiro e permitir a aplicação de diferentes técnicas de testes de software.

## Status do projeto

**Em desenvolvimento**

### Última etapa concluída

Automação dos cenários de **Dashboard e Transferências** utilizando Cypress, com validação de regras de negócio relacionadas ao saldo disponível.

### Resultado atual

* **Login:** testes automatizados
* **Dashboard e Transferências:** 13 testes automatizados aprovados
* **GitHub Actions:** pipeline de CI configurado e executado com sucesso
* **Casos de teste:** documentação dos cenários funcionais
* **BDD / Gherkin:** cenários documentados
* **Bug Reports:** defeitos identificados, corrigidos e retestados

---

## Objetivo

O projeto busca representar um fluxo de trabalho de QA próximo ao utilizado em equipes de desenvolvimento de software, envolvendo:

* Análise de requisitos
* Identificação e análise de riscos
* Elaboração de casos de teste
* BDD / Gherkin
* Testes funcionais
* Automação de testes E2E
* Identificação e documentação de bugs
* Reteste e validação de correções
* Controle de versão com Git
* Integração contínua com GitHub Actions

---

## Escopo atual

A automação contempla os módulos de **Login** e **Dashboard**, incluindo funcionalidades relacionadas à autenticação, sessão do usuário e transferências.

### Login

Os testes abrangem cenários como:

* Login com credenciais válidas
* Validação de credenciais inválidas
* Validação de campos obrigatórios
* Tentativas de autenticação
* Bloqueio após tentativas inválidas

### Dashboard e Transferências

Os testes abrangem cenários relacionados a:

* Acesso ao Dashboard
* Controle de acesso sem autenticação
* Identificação do usuário
* Logout
* Exibição do saldo disponível
* Transferências com dados válidos
* Validação de campos obrigatórios
* Valores zero e negativos
* Transferência dentro do saldo disponível
* Bloqueio de transferência acima do saldo
* Atualização do saldo após múltiplas transferências

---

## Automação de testes

Os testes E2E são desenvolvidos utilizando **Cypress** e JavaScript.

Atualmente, o módulo de Dashboard possui **13 cenários automatizados**, cobrindo cenários positivos e negativos e regras de negócio relacionadas às transferências.

Exemplo de validação:

```text
Saldo inicial:          R$ 1.000,00
Transferência:          R$   500,00
Saldo após operação:    R$   500,00
```

Também são validados cenários de saldo insuficiente e múltiplas transferências na mesma sessão.

---

## BDD / Gherkin

Os principais comportamentos da aplicação são documentados utilizando BDD / Gherkin.

Exemplo:

```gherkin
Cenário: Impedir transferência acima do saldo disponível
  Quando o usuário informar uma transferência de R$ 1.500,00
  E confirmar a transferência
  Então o sistema deve informar "Saldo insuficiente"
  E o saldo disponível deve permanecer em R$ 1.000,00
```

Os cenários BDD estão disponíveis em:

`docs/bdd/`

---

## Casos de teste

Os casos de teste são documentados em Markdown e organizados por requisito funcional.

Documentação disponível em:

`docs/casos-de-teste/`

Atualmente o projeto possui documentação específica para:

* Login
* Dashboard e Transferências

---

## Bugs identificados

Durante o desenvolvimento dos testes, foram identificados defeitos relacionados aos requisitos de Login.

### BUG-001 — CPF obrigatório

O sistema não apresentava a mensagem específica esperada quando o CPF não era informado.

**Status:** Corrigido e validado.

### BUG-002 — Bloqueio após tentativas inválidas

O sistema inicialmente permitia múltiplas tentativas de autenticação inválida sem aplicar o mecanismo de bloqueio esperado.

O defeito foi identificado através do teste automatizado **CT-007**.

**Status:** Corrigido e validado.

---

## Integração contínua

O projeto utiliza **GitHub Actions** para executar automaticamente os testes Cypress em eventos configurados no repositório.

Fluxo:

```text
Git Push / Pull Request
        ↓
GitHub Actions
        ↓
Instalação das dependências
        ↓
Inicialização da aplicação
        ↓
Execução dos testes Cypress
        ↓
Resultado da execução
```

A execução atual do pipeline foi concluída com **sucesso**.

---

## Estratégia de QA

O projeto utiliza diferentes práticas durante o processo de testes:

* Testes funcionais
* Testes E2E
* Cenários positivos e negativos
* Análise de riscos
* Casos de teste
* BDD / Gherkin
* Documentação de bugs
* Retestes
* Automação de testes
* Integração contínua

### Fluxo utilizado

**Requisito → Risco → Caso de Teste → BDD → Automação → Bug → Correção → Reteste → CI**

---

## Tecnologias e ferramentas

* **Cypress** — automação de testes E2E
* **JavaScript** — desenvolvimento dos testes automatizados
* **Node.js** — execução da aplicação e ambiente de testes
* **Express** — servidor da aplicação
* **Git** — controle de versão
* **GitHub** — hospedagem do código
* **GitHub Actions** — integração contínua
* **Gherkin** — especificação BDD
* **Markdown** — documentação de QA

---

## Estrutura do projeto

```text
finbank-qa-cypress-ai/
│
├── app/
│   └── public/
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
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── package.json
├── cypress.config.js
└── README.md
```

---

## Próximos passos

* Ampliar a cobertura de testes da aplicação
* Evoluir a automação de APIs
* Melhorar relatórios de execução
* Explorar integração com outras ferramentas de QA
* Evoluir a estratégia de CI/CD

---

## Autor

**André Almeida**

Projeto desenvolvido para estudos e demonstração prática de conhecimentos em **Quality Assurance, testes funcionais, automação E2E, BDD e integração contínua**.
