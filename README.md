# FinBank QA — Automação de Testes E2E

Projeto de QA desenvolvido para praticar e demonstrar, na prática, um processo de Quality Assurance, desde a análise de requisitos até a automação de testes E2E.

O FinBank é uma aplicação web bancária fictícia criada para simular funcionalidades de um sistema financeiro e permitir a aplicação de técnicas de testes de software.

## Status do projeto

**Em desenvolvimento**

### Última etapa concluída

Automação dos cenários de **Dashboard e Transferência** utilizando Cypress.

### Resultado atual

* Login: testes automatizados
* Dashboard e Transferência: `9/9` testes aprovados
* GitHub Actions: pipeline de CI configurado
* Documentação de QA: requisitos, riscos, casos de teste, BDD e bug reports

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
* Integração contínua

---

## Escopo atual

A automação atualmente contempla os módulos de **Login** e **Dashboard**, incluindo funcionalidades relacionadas a autenticação e transferência.

### Login

Os testes abrangem cenários como:

* Login com credenciais válidas
* Validação de credenciais inválidas
* Validação de campos obrigatórios
* Tentativas de autenticação
* Bloqueio após tentativas inválidas

### Dashboard e Transferência

Os testes abrangem cenários relacionados a:

* Acesso ao Dashboard
* Validação das informações apresentadas
* Logout
* Transferências
* Validações de regras de negócio

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

Fluxo utilizado:

**Requisito → Risco → Caso de Teste → BDD → Automação → Bug → Correção → Reteste**

---

## Tecnologias e ferramentas

* **Cypress** — automação de testes E2E
* **JavaScript** — desenvolvimento dos testes automatizados
* **Node.js** — execução da aplicação e ambiente de testes
* **Express**
