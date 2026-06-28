# Comparaqui

O **Comparaqui** é um mockup navegável para comparação de compras em supermercados. O projeto simula uma experiência completa onde o usuário pode montar uma lista de compras, revisar produtos, visualizar sugestões de similares, comparar preços entre mercados e identificar oportunidades de economia.

Atualmente, o projeto está em sua versão inicial, desenvolvido como um front-end estático com dados mockados, servindo como base visual, funcional e documental para uma futura evolução com backend, APIs reais, banco de dados, autenticação e análise de dados.

---

## Objetivo do projeto

O objetivo do Comparaqui é ajudar usuários a tomarem melhores decisões de compra, comparando preços de produtos entre diferentes supermercados e sugerindo alternativas semelhantes quando houver possibilidade de economia.

Nesta primeira versão, o foco é validar:

* Fluxo de navegação;
* Experiência visual;
* Organização das telas;
* Regras iniciais de comparação;
* Sugestões de produtos similares;
* Estrutura de componentes;
* Base para evolução futura do produto.

---

## Estado atual do projeto

O projeto encontra-se na fase de **mockup funcional e documentado**.

Atualmente, o Comparaqui possui:

* Home com apresentação do produto;
* Tela de montagem da lista de compras;
* Busca e filtros de produtos;
* Controle de quantidade de itens;
* Sugestões de produtos similares;
* Tela de revisão da lista;
* Comparação entre mercados;
* Destaque de melhor preço;
* Detalhes de mercado;
* Produtos encontrados e não encontrados;
* Cálculo visual de economia potencial;
* Design system vivo;
* Dados mockados;
* Documentação técnica inicial.

Esta versão ainda não possui backend, autenticação, banco de dados, APIs reais ou crawlers.

---

## Fotos do projeto

> Espaço reservado para imagens do projeto.
## Fotos do projeto

### Home

<img width="1794" height="1495" alt="home" src="https://github.com/user-attachments/assets/b00f3b8e-33eb-4fee-8c6a-64318054b033" />

---

### Criação da lista

<img width="1794" height="1008" alt="create-list" src="https://github.com/user-attachments/assets/8dcbc02e-9079-4ef9-b5e6-e816c5c5a405" />

---

### Revisão da lista

<img width="1794" height="1134" alt="list-review" src="https://github.com/user-attachments/assets/7c7a4a65-6025-4267-a870-e06b3fa11769" />

---

### Comparação de mercados

<img width="1794" height="1597" alt="compare" src="https://github.com/user-attachments/assets/55465a76-12ca-488a-a2b1-55a5d05f0b78" />

---

## Tecnologias usadas atualmente

| Tecnologia | Para que serve no projeto                                         |
| ---------- | ----------------------------------------------------------------- |
| HTML5      | Estruturação das páginas e telas do mockup.                       |
| CSS3       | Estilização visual, responsividade, tokens e componentes.         |
| JavaScript | Controle de interações, renderização dinâmica e lógica das telas. |
| Vanilla JS | Implementação das funcionalidades sem uso de frameworks.          |
| SVG        | Renderização de ícones centralizados no projeto.                  |
| Markdown   | Documentação técnica e organização das decisões do projeto.       |
| Mock Data  | Simulação de produtos, mercados, preços, listas e comparações.    |

---

## Tecnologias futuras planejadas

| Tecnologia           | Para que servirá no projeto                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| Next.js              | Construção do front-end moderno, componentizado e escalável.                       |
| React                | Criação de componentes reutilizáveis para telas, cards, tabelas e fluxos.          |
| NestJS               | Construção do backend, APIs e regras de negócio.                                   |
| TypeScript           | Tipagem estática para maior segurança e manutenção do código.                      |
| PostgreSQL           | Armazenamento de usuários, produtos, mercados, ofertas e listas.                   |
| Prisma ORM           | Comunicação entre backend e banco de dados.                                        |
| Redis                | Cache de consultas frequentes, produtos, mercados e comparações.                   |
| JWT/Auth             | Autenticação e controle de sessão de usuários.                                     |
| Crawlers             | Coleta automatizada de preços e produtos em mercados parceiros ou fontes públicas. |
| APIs externas        | Integração com dados reais de supermercados, produtos e preços.                    |
| Docker               | Padronização do ambiente de desenvolvimento e execução.                            |
| Testes automatizados | Validação de componentes, regras de negócio e APIs.                                |
| Analytics            | Análise de comportamento, economia gerada e padrões de compra.                     |

---

## Estrutura do projeto

```txt
cpa-mockup/
├─ cpa-admin/
│  ├─ index.html
│  ├─ compras.html
│  ├─ revisao.html
│  ├─ comparacao.html
│  ├─ detalhes.html
│  ├─ design-system.html
│  ├─ assets/
│  ├─ scripts/
│  └─ styles/
│
└─ cpa-docs/
   ├─ index.md
   ├─ design-system.md
   ├─ components.md
   ├─ responsive-rules.md
   ├─ implementation-guide.md
   ├─ business-rules.md
   ├─ screens/
   ├─ flows/
   └─ assets-reference/
```

---

## Principais telas

### Home

Apresenta a proposta do Comparaqui, categorias, lista inteligente, comparação entre mercados, alerta de produto e painéis informativos.

### Compras

Permite montar uma lista de compras, pesquisar produtos, aplicar filtros, alterar quantidades e visualizar produtos similares.

### Revisão

Exibe a lista oficial antes da comparação, com sugestões de substituição e economia potencial.

### Comparação

Mostra diferentes mercados, preços encontrados, produtos disponíveis, ordenação, busca e destaque do melhor preço.

### Detalhes do mercado

Apresenta informações detalhadas de um mercado específico, incluindo produtos encontrados, produtos não encontrados, sugestões e economia final.

---

## Design system

O projeto possui um design system vivo em:

```txt
cpa-admin/design-system.html
```

E sua documentação em:

```txt
cpa-docs/design-system.md
```

Esse design system concentra padrões visuais, tokens, componentes, botões, cards, ícones, estados e regras de interface usados no mockup.

---

## Dados mockados

Os dados do projeto estão centralizados principalmente em:

```txt
cpa-admin/scripts/mock-data.js
```

Esse arquivo simula:

* Produtos;
* Marcas;
* Categorias;
* Mercados;
* Preços;
* Produtos similares;
* Sugestões;
* Comparações;
* Estados das telas.

Na evolução futura, esses dados deverão ser normalizados e posteriormente substituídos por APIs reais.

---

## Próximas fases planejadas

### Fase 1.0 — Mockup navegável

Estado atual do projeto.
O foco é validar a experiência visual e o fluxo principal.

### Fase 1.1 — Consolidação do mockup

Organização do projeto, versionamento com Git, auditoria da documentação, revisão do design system, checklist de QA e documentação das limitações atuais.

### Fase 1.2 — Domínio mockado forte

Normalização dos dados mockados, regras mais claras para produtos similares, substituições, comparação de mercados e cálculo de economia.

### Fase 2.0 — Preparação para Next.js + NestJS

Planejamento da migração para uma arquitetura moderna, com separação entre frontend, backend, contratos de API e entidades do domínio.

### Fase 3.0 — Produto com backend

Implementação de backend, autenticação, banco de dados, APIs reais, listas salvas e comparação persistente.

### Fase 4.0 — Dados reais e análise

Uso de crawlers, integrações externas, histórico de preços, alertas, recomendações inteligentes e análise de economia.

---

## Como executar o projeto atualmente

Como o projeto é estático, basta abrir os arquivos HTML diretamente no navegador.

Exemplo:

```txt
cpa-admin/index.html
```

Também é possível usar uma extensão como **Live Server** no VS Code para navegar entre as páginas com mais facilidade.

---

## Limitações atuais

Esta versão ainda não possui:

* Backend;
* API real;
* Banco de dados;
* Autenticação;
* Usuários reais;
* Persistência de listas;
* Dados reais de supermercados;
* Crawlers;
* Testes automatizados;
* Deploy de produção;
* Integração com sistemas externos.

---

## Visão futura

A visão futura do Comparaqui é evoluir de um mockup navegável para uma plataforma real de comparação de compras, permitindo que usuários montem listas, comparem supermercados, recebam sugestões inteligentes e acompanhem oportunidades de economia com base em dados reais.

O projeto deverá evoluir gradualmente, mantendo a documentação como uma especificação viva para orientar decisões técnicas, visuais e de produto.

---

## Status

**Versão atual:** 1.0
**Tipo:** Mockup navegável
**Stack atual:** HTML, CSS e Vanilla JS
**Backend:** Não implementado
**Banco de dados:** Não implementado
**API real:** Não implementada
**Documentação:** Em desenvolvimento
**Próxima etapa:** Consolidação do mockup e organização das fases de evolução

---
