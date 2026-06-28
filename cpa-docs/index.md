# CPA Mockup - Documentacao Geral

## 1. Visao geral

Este repositorio contem o mockup visual e funcional do **Comparaqui**, uma experiencia de comparacao inteligente de compras em supermercados.

O estado atual do projeto e um MVP navegavel em `cpa-admin`, construido com **HTML estatico**, **CSS** e **JavaScript puro (Vanilla JS)**. Nao ha build, bundler, backend, banco de dados, autenticacao real ou API real nesta etapa.

`cpa-admin` e a fonte de verdade visual atual. `cpa-docs` deve documentar esse estado e separar claramente itens futuros.

## 2. Estrutura principal

```txt
cpa-mockup/
  cpa-admin/   Mockup estatico navegavel
  cpa-docs/    Documentacao, regras, fluxos e referencias
```

## 3. Decisoes vigentes do MVP

- As paginas usam `initShell({ ..., shellVariant: "mvp" })`.
- O shell MVP nao renderiza sidebar, header global, drawer mobile, bottom navigation ou status bar.
- A navegacao acontece por CTAs e links entre paginas HTML.
- Nao existe usuario logado, conta, perfil, resumo mensal por usuario ou autenticacao real.
- Dados de produtos, mercados, listas, precos, economia e sugestoes sao mockados no front-end.
- Tokens oficiais sao os declarados em `cpa-admin/styles/base.css`, com nomes como `--verde-*`, `--cinza-*`, `--surface-*`, `--space-*`, `--radius-*`, `--shadow-*` e `--fs-*`.
- Icones devem vir de `cpa-admin/scripts/icons.js` via helper `icon()`. Nao importar W3Schools, SVG Repo, Line Awesome ou bibliotecas externas para novos icones.

## 4. Telas atuais

- Home: hero, como funciona, exemplo de economia, categorias populares, lista inteligente, comparacao de mercados, alerta de produto, ajuda e tendencias de preco.
- Compras: busca, filtros por categoria, produtos, controles de quantidade, similares e resumo da lista.
- Revisao: lista oficial, sugestoes de substituicao, economia potencial e CTA de comparacao.
- Comparacao: resumo, cards de mercados, ordenacao, navegacao entre cards e tabela comparativa.
- Detalhes do mercado: identidade do mercado, fachada, produtos encontrados, indisponiveis, sugestoes e economia final.
- Design system: catalogo vivo dos tokens e componentes reais.

## 5. Itens preparados para futuro

Os seguintes elementos podem existir em CSS/JS ou em documentacao tecnica, mas nao fazem parte da experiencia ativa do MVP:

- Sidebar desktop e header global.
- Drawer mobile, bottom navigation e status bar.
- Conta de usuario, perfil, notificacoes reais e autenticacao.
- Fluxos com backend, APIs e persistencia.
- Migracao futura para Nest no backend e Next no frontend.

Esses itens nao devem ser implementados ou ativados sem uma nova decisao de produto.

## 6. Ordem de consulta para novas alteracoes

1. `cpa-docs/index.md`
2. `cpa-docs/design-system.md`
3. `cpa-docs/business-rules.md`
4. Documento da tela em `cpa-docs/screens/`
5. Fluxos em `cpa-docs/flows/`
6. Referencias visuais em `cpa-docs/assets-reference/`

Quando houver divergencia, priorize o estado real de `cpa-admin` e atualize a documentacao junto com a mudanca.
