# Pagina Home - Comparaqui MVP

## Papel da tela

Apresentar o Comparaqui, explicar o valor de economia e levar o visitante para montar a lista de compras.

## Estado atual

A Home atual fica em `cpa-admin/index.html` e usa `scripts/home.js`.

Ela roda com:

```js
initShell({ activePage: "inicio", shellVariant: "mvp" });
```

Portanto, nao ha header global, sidebar, bottom navigation, status bar, perfil ou conta de usuario.

## Secoes atuais

1. Hero com titulo, texto e CTA "Montar minha lista".
2. Como funciona com tres passos.
3. Exemplo/cenario de economia renderizado por `renderEconomyPanel()`.
4. Categorias populares.
5. Lista Inteligente (`smart-list-card`).
6. Comparacao de mercados em tabela.
7. Alerta Produto (`product-alert-card`).
8. Como o Comparaqui ajuda voce (`home-help-item`).
9. Tendencias de preco (`price-trend-item`).

Todas as secoes devem aparecer em mobile e desktop, com ajustes de layout por CSS.

## Componentes

- Hero: `.hero`, `.hero-content`, `.hero-title`, `.hero-actions`.
- Economia: `.economy-panel`, `.economy-panel--floating`, `.economy-panel--stacked`.
- Como funciona: `.how-it-works`, `.steps-row`.
- Categorias: `.categories-grid`.
- Lista inteligente: `.smart-list-card`.
- Comparacao: `.market-comparison`, `.market-table-wrap`.
- Painel lateral/local: `.side-panel`, `.panel-card`.
- Alertas e listas compactas: `.product-alert__*`, `.home-help-item`, `.price-trend-item`.

## Fora de escopo atual

- Resumo mensal dependente de usuario.
- Status bar.
- Bottom navigation.
- Sidebar ou perfil desktop.
- Login, conta e notificacoes reais.

Esses itens podem ser retomados em fase futura, mas nao devem ser reintroduzidos sem nova decisao.
