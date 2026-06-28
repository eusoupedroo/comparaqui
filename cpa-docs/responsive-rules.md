# Regras Responsivas - Comparaqui MVP

## Estado atual

O MVP e uma colecao de paginas HTML responsivas. Todas as paginas usam o shell em modo `mvp`, portanto **nao ha navegacao global ativa** em desktop ou mobile.

Nao implementar nesta etapa:

- Sidebar fixa desktop.
- Header global.
- Drawer mobile.
- Bottom navigation.
- Status bar.
- Resumo mensal dependente de usuario.

Esses elementos podem permanecer documentados como preparacao futura, mas nao sao requisitos do MVP atual.

## Breakpoints

| Faixa | Comportamento atual |
| --- | --- |
| 0-480px | Layout em coluna, categorias compactas e tabelas com rolagem horizontal quando necessario |
| 481-767px | Layout mobile amplo, cards empilhados e CTAs adaptados |
| 768-1023px | Transicao tablet, grids passam a empilhar quando necessario |
| >= 1024px | Grid de conteudo com coluna principal e painel lateral quando a pagina possui sidebar local |

## Home

Todas as secoes atuais da Home devem aparecer em mobile e desktop, variando apenas layout e densidade:

| Secao atual | Mobile | Desktop |
| --- | --- | --- |
| Hero | Sim | Sim |
| Como funciona | Sim | Sim |
| Exemplo/cenario de economia | Sim | Sim |
| Categorias populares | Sim | Sim |
| Lista Inteligente | Sim | Sim |
| Comparacao de mercados | Sim, com rolagem horizontal se necessario | Sim |
| Alerta Produto | Sim | Sim |
| Como o Comparaqui ajuda voce | Sim | Sim |
| Tendencias de preco | Sim | Sim |

## Regras de layout

- Usar uma unica estrutura HTML por tela e adaptar com CSS.
- Preservar `page-grid`, `page-main`, `page-side`, `content-grid`, `stacked-section` e utilitarios existentes.
- Tabelas devem manter wrapper com overflow horizontal quando a largura for insuficiente.
- CTAs principais devem continuar visiveis e sem sobrepor conteudo.
- A Home usa `mobile-only` e `desktop-only` apenas para variantes locais, como o painel de economia.

## Itens futuros

Quando o shell completo for retomado, revisar `navigation.css` e `ui.js` para ativar sidebar/header/drawer de forma coordenada. Bottom navigation e status bar nao existem hoje em `cpa-admin` e devem ser especificados antes de qualquer implementacao.
