# Compras

## Papel da tela

Permitir que o usuario monte a lista de produtos, filtre itens, ajuste quantidades, veja similares e avance para revisao ou comparacao.

## Estado atual

A tela fica em `cpa-admin/compras.html` e usa `scripts/compras.js`.

O estado da lista e mockado no front-end. Incrementos, decrementos, remocoes e similares nao chamam API.

## Layout e componentes

- Titulo "Minha lista" com badge de quantidade.
- Campo de busca com `.search-field` e `.search-input`.
- Filtros por categoria com `.filter-strip` e `.filter-chip`.
- Cards/tabela de produtos com `.product-card`, `.product-cell`, `productsTableMarkup()`.
- Controle de quantidade com `.quantity-controls`.
- Dropdown de similares com `.app-header__dropdown` e `.product-similar-menu`.
- Resumo de lista com `.list-summary`.
- CTAs para revisar compra e comparar mercados.

## Responsividade

- Mobile: listagem em uma coluna, filtros com rolagem horizontal e resumo adaptado.
- Desktop: conteudo em grid/tabela conforme a tela permitir, mantendo resumo visivel.
- Tabelas devem ficar dentro de wrapper com rolagem horizontal quando necessario.

## Regras visuais

- Usar tokens reais de `base.css`: `--verde-*`, `--cinza-*`, `--surface-*`, `--space-*`, `--radius-*`, `--shadow-*`.
- Usar `icon()` de `scripts/icons.js` para novos icones.
- Preferir `.btn` e variantes para novos CTAs; classes legadas permanecem apenas por compatibilidade.

## Fora de escopo atual

- POST `/api/list/add`, `/api/list/quantity` ou qualquer endpoint real.
- Persistencia em backend.
- Header global, sidebar, bottom nav e status bar.
