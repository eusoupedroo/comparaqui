# Design System - CPA Mockup

## 1. Objetivo

O design system do **CPA Mockup (Comparaqui)** define os tokens, componentes e regras de manutencao usados em `cpa-admin`.

`cpa-admin/design-system.html` e o catalogo vivo. Ele deve usar o mesmo CSS e os mesmos helpers JavaScript das paginas reais, mas no estado atual tambem roda com `shellVariant: "mvp"`, sem sidebar, header global ou navegacao mobile.

## 2. Arquitetura de arquivos

As paginas carregam estilos nesta ordem:

1. `styles/base.css`: tokens, reset leve, tipografia, botoes legados e utilitarios globais.
2. `styles/navigation.css`: sidebar/header/drawer preparados para fase futura e ocultos no shell MVP.
3. `styles/layout.css`: estruturas de pagina, grids, hero e layouts compartilhados.
4. `styles/components.css`: componentes reutilizaveis reais.
5. `styles/home.css`: componentes e composicao especificos da Home.
6. `styles/design-system.css`: apenas layout do catalogo, prefixado com `.ds-*`.

`design-system.html` e HTML estatico editado manualmente. Nao existe build, bundler ou `scripts/design-system.js`.

## 3. Shell MVP

Todas as paginas atuais chamam:

```js
initShell({ activePage: "...", shellVariant: "mvp" });
```

No modo MVP:

- `data-shell="mvp"` e aplicado no `documentElement`.
- Sidebar e header global ficam ocultos quando existirem no HTML.
- Bottom navigation e status bar nao existem.
- A navegacao acontece por CTAs e links internos.

Sidebar, header, drawer, notificacoes e conta em `ui.js`/`navigation.css` devem ser tratados como preparacao futura, nao como requisito ativo.

## 4. Tokens oficiais

Os tokens oficiais ficam em `:root` dentro de `styles/base.css`.

### Cores

| Token | Uso |
| --- | --- |
| `--verde-primario` | CTAs, bordas e destaques principais |
| `--verde-escuro` | Titulos fortes e estados ativos |
| `--verde-medio` | Gradientes e hover |
| `--verde-claro` / `--verde-apoio` | Fundos positivos e chips |
| `--fundo-esverdeado` | Fundo geral |
| `--branco` / `--surface-base` | Cards e superficies |
| `--cinza-texto` / `--cinza-escuro` | Texto principal |
| `--cinza-secundario` / `--cinza-medio` | Texto auxiliar |
| `--cinza-borda` / `--cinza-claro` | Bordas |
| `--vermelho-alerta` | Estados negativos |
| `--laranja-promocional` | Promocoes |

### Escalas

- Tipografia: `--fs-xs`, `--fs-sm`, `--fs-base`, `--fs-md`, `--fs-lg`, `--fs-xl`, `--fs-2xl`, `--fs-3xl`, `--fs-page-title`, `--fs-metric-value`, `--fs-hero-title`.
- Espacamento: `--space-2` ate `--space-48`.
- Raios: `--radius-xs`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-pill`.
- Sombras: `--shadow-soft`, `--shadow-card`, `--shadow-whisper`, `--shadow-floating`, `--shadow-sidebar`.
- Outros: `--gradiente-verde`, `--transition-base`, `--content-max-width`, `--home-max-width`, `--sidebar-width`.

Nao usar tokens antigos de documentos legados como padrao atual. Se um componente precisar de um valor novo, criar token em `base.css` e documentar aqui.

## 5. Componentes documentados

O catalogo e a documentacao devem cobrir estes componentes reais:

- Botoes: `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`, `.btn--inverted`, tamanhos e classes legadas.
- Badges/status: `.badge`, `.promo-badge`, `.market-badge`, `.table-badge`, `.status-chip`.
- Busca/filtros/quantidade: `.search-field`, `.filter-strip`, `.filter-chip`, `.quantity-controls`.
- Cards: `.ui-card` e variantes; `.card`, `.home-card`, `.panel-card` como compatibilidade.
- Produtos e tabelas: `.product-card`, `.market-table`, `.products-table`, `productCell()`, `productsTableMarkup()`.
- Home: `.smart-list-card`, `.home-help-item`, `.price-trend-item`, `.product-alert-card`, `.product-alert__*`.
- Compra/revisao/detalhes: `.list-summary`, `.swap-card`, `.market-header`.
- Comparacao: `.comparison-toolbar`, `.comparison-sort`, `.comparison-search`, `.comparison-nav`.
- Formularios: `.form-*`, usados no catalogo e preparados para autenticacao futura.
- Skeletons: `.skeleton`, `.skeleton-line`, `.skeleton-card`, `.skeleton-row`, `.skeleton-stack`.
- Utilitarios leves: `.cluster`, `.stack`, `.text-meta`, `.text-price`, `.table-note`.
- Empty state: `renderEmptyState()`, `emptyStateMarkup()` e `.empty-state`.

### Product Alert

O componente usa somente a nomenclatura BEM atual:

```html
<article class="panel-card product-alert-card highlight-decrease">
  <h3 class="panel-card__title product-alert-card__title">Alerta Produto</h3>
  <article class="product-alert">
    <div class="product-alert__media">...</div>
    <div class="product-alert__body">
      <strong class="product-alert__name">Arroz Camil 5kg</strong>
      <p class="product-alert__text">Preco caiu <span class="product-alert__percent">12%</span></p>
    </div>
  </article>
  <div class="product-alert__dots">
    <button class="product-alert__dot product-alert__dot--active" type="button"></button>
    <button class="product-alert__dot" type="button"></button>
  </div>
</article>
```

Nao usar aliases antigos para dots.

## 6. Icones

O projeto usa `icon()` de `scripts/icons.js`.

Regras:

- Novos SVGs de interface entram em `ICON_PATHS` ou `ICON_PATHS_FILLED`.
- Consumir via `icon("nome", { size, strokeWidth, className })`.
- Evitar SVG inline manual em paginas novas.
- Nao importar W3Schools, SVG Repo, Line Awesome ou nova biblioteca de icones.

## 7. Autenticacao futura

As classes `auth-*` em `components.css` sao preparacao para uma etapa futura com autenticacao. O MVP atual nao tem tela de login ativa, usuario real, sessao, conta ou permissao.

## 8. Checklist de manutencao

- Manter `design-system.html` sem bloco `<style>` inline.
- Manter estilos exclusivos do catalogo em `design-system.css`.
- Manter componentes reutilizaveis em `components.css`.
- Atualizar `design-system.md` e o catalogo vivo quando um componente real for criado.
- Validar o catalogo por servidor HTTP local, pois ele usa ES modules.
