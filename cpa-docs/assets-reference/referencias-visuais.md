# Referencias Visuais - CPA Mockup

## 1. Objetivo

Orientar a evolucao visual do Comparaqui mantendo aderencia ao estado real de `cpa-admin` e ao design system atual.

Os arquivos de imagem em `assets-reference/images/` sao referencias historicas e podem conter elementos futuros, como navegacao global e status bar. Quando houver divergencia, priorize o MVP implementado em `cpa-admin`.

## 2. Direcao visual atual

- Interface clara, utilitaria e focada em economia.
- Verde como cor principal, usando tokens `--verde-*`.
- Fundos e superficies com `--surface-*`, `--branco` e `--fundo-esverdeado`.
- Textos com `--cinza-*`.
- Cards com raios `--radius-*` e sombras `--shadow-*`.
- CTAs novos com `.btn` e variantes.
- Iconografia via `scripts/icons.js` e helper `icon()`.

Nao importar icones de W3Schools, SVG Repo, Line Awesome ou bibliotecas externas.

## 3. Estrutura visual mobile

- Layout em coluna.
- Cards empilhados com espacamento suficiente.
- Filtros horizontais podem rolar.
- Tabelas ficam em wrappers com rolagem horizontal.
- CTAs devem continuar legiveis e sem sobrepor conteudo.

Nao ha bottom navigation, status bar ou header global no MVP atual.

## 4. Estrutura visual desktop

- Conteudo com largura controlada por `.page-inner`.
- Paginas com suporte usam `.page-grid`, `.page-main` e `.page-side`.
- Tabelas e cards podem ter maior densidade.
- Painel lateral local e permitido quando fizer parte da pagina, como na Home e nos detalhes.

Nao ha sidebar desktop ativa no MVP atual.

## 5. Referencia por tela

### Home

- Hero com CTA para montar lista.
- Como funciona com tres etapas.
- Economia em painel local.
- Categorias populares.
- Lista Inteligente com `smart-list-card`.
- Comparacao de mercados.
- Alerta Produto, ajuda e tendencias no painel.

### Compras

- Busca, filtros, produtos e controles de quantidade.
- Similares em dropdown contextual.
- Resumo de itens e total estimado.

### Revisao

- Lista oficial.
- Sugestoes de substituicao em `swap-card`.
- Economia potencial.

### Comparacao

- Cards de mercado.
- Toolbar de ordenacao/busca/navegacao.
- Tabela comparativa.
- Destaque para melhor preco.

### Detalhes

- `market-header` com identidade e fachada.
- Produtos encontrados e nao encontrados.
- Sugestoes e economia final.

## 6. Componentes recorrentes

| Componente | Diretriz |
| --- | --- |
| Card de produto | Usar borda/sombra do sistema, preco em destaque e controle de quantidade |
| Card de mercado | Nome, logo, total, economia, distancia, disponibilidade e CTA |
| Badge/status | Pill curto, cor semantica e texto direto |
| Controle de quantidade | Alvos clicaveis claros e valor central |
| Dropdown contextual | Lista curta, fecha ao clicar fora |
| Product Alert | Usar somente classes `.product-alert__*` atuais |
| Skeleton | Usar `.skeleton-*` para estados simulados |

## 7. Padroes a preservar

- Clareza sobre economia e preco total.
- Separacao entre lista oficial, sugestoes e indisponiveis.
- Tokens centralizados em `base.css`.
- Icones versionados no projeto.
- Layout responsivo com uma unica estrutura HTML por tela.

## 8. Padroes a evitar

- Reintroduzir navegacao global como requisito atual.
- Criar componentes novos quando uma classe documentada ja atende.
- Usar tokens legados ou literais de cor recorrentes em novos componentes.
- Adicionar dependencias externas para icones.
- Criar fluxo de usuario/autenticacao sem nova decisao de produto.
