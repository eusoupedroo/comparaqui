# Componentes - Comparaqui MVP

Este documento resume os componentes reutilizaveis atuais. A fonte detalhada do design system e `design-system.md`; o catalogo vivo fica em `cpa-admin/design-system.html`.

## Componentes atuais

| Componente | Classes / helper | Uso atual |
| --- | --- | --- |
| Logo | `assets/logo.svg` | Marca do projeto |
| Botoes canonicos | `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`, `.btn--inverted`, `.btn--sm`, `.btn--md`, `.btn--pill` | CTAs e acoes novas |
| Botoes legados | `.btn-primary`, `.btn-secondary`, `.pill-button`, `.btn-white` | Compatibilidade temporaria |
| Cards | `.ui-card`, `.ui-card--section`, `.ui-card--panel`, `.ui-card--metric`, `.ui-card--promo` | Base recomendada para novos cards |
| Cards legados | `.card`, `.home-card`, `.panel-card` | Compatibilidade com telas existentes |
| Produto | `.product-card`, `productCell()`, `productsTableMarkup()` | Compras, revisao, detalhes e tabelas |
| Status e badges | `.badge`, `.promo-badge`, `.market-badge`, `.table-badge`, `.status-chip` | Estados, destaques e disponibilidade |
| Busca e filtros | `.search-field`, `.search-input`, `.filter-strip`, `.filter-chip` | Compras e comparacao |
| Quantidade | `.quantity-controls`, `.quantity-controls--center` | Incremento/decremento de itens |
| Lista resumida | `.list-summary` | Resumo de itens e total na tela de compras |
| Dropdown contextual | `.app-header__dropdown`, `.product-similar-menu` | Produtos similares e menus curtos |
| Alerta Produto | `.product-alert-card`, `.product-alert__*` | Painel da Home |
| Lista inteligente | `.smart-list-card` | CTA promocional da Home |
| Painel compacto | `.home-help-item`, `.price-trend-item` | Ajuda e tendencias da Home |
| Substituicoes | `.swap-card`, `.swap-info`, `.swap-products` | Revisao e detalhes |
| Cabecalho de mercado | `.market-header`, `.market-header__*` | Detalhes do mercado |
| Comparacao | `.comparison-toolbar`, `.comparison-sort`, `.comparison-search`, `.comparison-nav` | Controles da tela de comparacao |
| Formularios | `.form-*` | Catalogo e preparacao de autenticacao futura |
| Skeletons | `.skeleton`, `.skeleton-line`, `.skeleton-card`, `.skeleton-row`, `.skeleton-stack` | Estados de carregamento simulados |
| Empty state | `renderEmptyState()`, `emptyStateMarkup()`, `.empty-state` | Listas vazias e estados sem dados |

## Componentes futuros ou inativos

- Sidebar, header global e drawer mobile existem em `ui.js`/`navigation.css`, mas o MVP chama `shellVariant: "mvp"` e nao renderiza esses componentes.
- `auth-*` e estilos relacionados estao preparados para autenticacao futura. Nao ha tela de login ativa nem usuario real no MVP.
- Bottom navigation, status bar e monthly summary nao estao implementados e nao devem ser exigidos agora.

## Icones

Todos os novos icones de interface devem ser adicionados em `cpa-admin/scripts/icons.js` e consumidos com `icon(nome, opcoes)`.

Padrao:

- `viewBox="0 0 24 24"`.
- `stroke="currentColor"`.
- `fill="none"` para icones lineares.
- `strokeWidth` preferencial entre `1.75` e `2`.

Nao importar W3Schools, SVG Repo, Line Awesome ou novas dependencias externas para iconografia.
