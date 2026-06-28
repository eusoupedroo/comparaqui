# Fase 1.0 - Mockup navegável

## Objetivo da fase

Representar a experiência principal do Comparaqui em um mockup estático navegável, suficiente para validar fluxo, proposta de valor, estrutura visual e regras básicas de negócio.

## Contexto

A fase 1.0 é o estado atual do projeto. O mockup está em `cpa-admin`, construído com HTML, CSS e Vanilla JS, sem backend, autenticação real, API, banco de dados, crawlers ou análise de dados.

`cpa-docs` documenta o estado atual, as telas, os componentes, as regras de negócio e os fluxos principais.

## Status atual

Concluída como protótipo navegável validável, mas ainda não consolidada como especificação viva confiável.

## O que já foi concluído

- Estrutura estática em HTML, CSS e Vanilla JS.
- Home navegável com hero, categorias, lista inteligente, comparação de mercados, alerta de produto e painéis informativos.
- Tela de compras com busca, filtros, produtos, quantidades, similares e resumo da lista.
- Tela de revisão com lista oficial, sugestões de substituição e economia potencial.
- Tela de comparação com cards de mercado, tabela comparativa, busca, ordenação e destaque de melhor preço.
- Tela de detalhes do mercado com dados do mercado, produtos encontrados, produtos não encontrados, sugestões e economia final.
- Design system vivo em `cpa-admin/design-system.html`.
- Documentação inicial em `cpa-docs`.
- Dados mockados em `cpa-admin/scripts/mock-data.js`.
- Estado da lista em `cpa-admin/scripts/state.js`.
- Helpers e componentes JavaScript em `cpa-admin/scripts/ui.js`.
- Ícones SVG centralizados em `cpa-admin/scripts/icons.js`.
- Tokens visuais em `cpa-admin/styles/base.css`.
- Componentes reutilizáveis em `cpa-admin/styles/components.css`.
- Regras básicas de negócio em `cpa-docs/business-rules.md`.

## O que ainda está pendente

- Iniciar Git.
- Organizar releases.
- Criar documentação formal de release.
- Auditar divergências entre `cpa-admin` e `cpa-docs`.
- Auditar divergências entre `design-system.html` e `design-system.md`.
- Normalizar mocks para representar melhor o domínio.
- Formalizar completamente regras de similaridade, substituição, comparação e economia.
- Criar checklist manual de QA.
- Definir testes automatizados futuros.
- Implementar backend.
- Implementar autenticação.
- Criar APIs.
- Criar banco de dados.
- Criar crawlers ou integrações reais.
- Criar análise de dados.

## Entregáveis esperados

- Mockup navegável em `cpa-admin`.
- Documentação inicial em `cpa-docs`.
- Fluxo principal de compra validável.
- Design system vivo consultável.
- Dados mockados suficientes para demonstrar o produto.

## Critérios de conclusão da fase

- As telas principais abrem e permitem navegar pelo fluxo principal.
- Os dados mockados sustentam a demonstração da proposta de valor.
- O design system vivo existe e representa parte relevante dos componentes.
- A documentação inicial descreve telas, regras e fluxo principal.

## Riscos da fase

- Tratar o mockup como aplicação real antes da hora.
- Tomar decisões de arquitetura com base em mocks ainda acoplados às telas.
- Evoluir telas sem atualizar documentação.
- Criar novos componentes fora do design system.
- Basear similaridade e substituição apenas em categoria.

## Observações

A fase 1.0 não deve ser expandida com backend ou APIs reais. O próximo passo recomendado é a fase 1.1, focada em consolidação, auditoria e rastreabilidade.
