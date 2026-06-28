# Guia de Implementacao - CPA Admin

## 1. Estado tecnico atual

`cpa-admin` e um mockup estatico em HTML, CSS e Vanilla JS. Nao ha build, bundler, TypeScript, backend, banco de dados ou API real.

Estrutura atual:

```txt
cpa-admin/
  *.html
  assets/
  scripts/
  styles/
```

## 2. Regras de implementacao

- Criar ou alterar telas diretamente em HTML, CSS e JS modular.
- Usar dados mockados em `scripts/data.js`, `scripts/mock-data.js` e `scripts/state.js`.
- Manter chamadas `initShell({ ..., shellVariant: "mvp" })` ate nova decisao de produto.
- Nao ativar sidebar, header global, drawer mobile, bottom navigation, status bar, login ou conta.
- Nao criar APIs, migrations, servidor Nest ou app Next nesta etapa.

## 3. Tokens e estilos

Usar tokens reais de `styles/base.css`:

- Cores: `--verde-*`, `--cinza-*`, `--surface-*`, `--vermelho-alerta`, `--laranja-promocional`.
- Tipografia: `--fs-*`, `--fw-*`, `--lh-*`.
- Espacamento: `--space-*`.
- Raios: `--radius-*`.
- Sombras: `--shadow-*`.

Nao introduzir novos componentes usando nomes de tokens legados. Se faltar um token, adicionar em `base.css` e documentar no design system.

## 4. Componentes

- Preferir `.btn` com variantes (`.btn--primary`, `.btn--secondary`, `.btn--inverted`) para novos botoes.
- Manter `.btn-primary`, `.btn-secondary`, `.btn-white` e `.card` apenas como compatibilidade enquanto existirem telas antigas.
- Novos cards devem partir de `.ui-card` ou de componente ja documentado.
- Componentes reutilizaveis devem ficar em `styles/components.css`.
- Estilos especificos da Home devem ficar em `styles/home.css`.
- Layouts compartilhados ficam em `styles/layout.css`.

## 5. Icones

Todos os icones de interface devem ser definidos em `scripts/icons.js` e renderizados via `icon()`.

Nao importar icones de W3Schools, SVG Repo, Line Awesome ou novas bibliotecas externas. Essa decisao evita dependencias visuais externas e mantem os SVGs versionados no projeto.

## 6. Fluxo futuro com backend

A migracao futura prevista e:

- Nest para backend e APIs.
- Next para frontend.
- Persistencia real para usuarios, listas, historico, mercados e precos.

Enquanto essa migracao nao existir, documentar qualquer endpoint apenas como futuro e manter o comportamento do mockup no front-end.

## 7. Validacao

Antes de finalizar alteracoes:

- Rodar buscas por tokens e classes obsoletas relevantes.
- Abrir as paginas via servidor HTTP local, pois os scripts usam ES modules.
- Verificar desktop e mobile para Home, Design System e paginas tocadas.
