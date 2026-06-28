# Comparacao de Mercados

## Papel da tela

Comparar mercados disponiveis para a lista atual e destacar preco, economia, distancia e disponibilidade.

## Estado atual

A tela fica em `cpa-admin/comparacao.html` e usa `scripts/comparacao.js`.

Os totais e precos sao calculados a partir de dados mockados no front-end.

## Layout e componentes

- Cabecalho da pagina com resumo do contexto.
- Resumo de comparacao.
- Cards de mercado com badges e CTA "Ver detalhes".
- Toolbar com ordenacao, busca e navegacao: `.comparison-toolbar`, `.comparison-sort`, `.comparison-search`, `.comparison-nav`.
- Tabela comparativa com `.market-table` e `.products-table`.
- Destaques com `.highlight-better-price`.

## Responsividade

- Desktop: cards e tabela com maior densidade.
- Mobile/tablet: cards em fluxo adaptado e tabela com rolagem horizontal.

## Regras visuais

- Usar tokens reais de `base.css`.
- Usar `icon()` de `scripts/icons.js`.
- Melhor oferta deve usar destaque consistente com `.highlight-better-price`.
- CTAs novos devem usar `.btn` e variantes.

## Fora de escopo atual

- Modal/drawer complexo de detalhes.
- API de comparacao.
- Persistencia de ordenacao ou filtros.
- Navegacao global.
