# Revisao de Produtos

## Papel da tela

Permitir que o usuario valide os produtos escolhidos, ajuste quantidades, veja sugestoes mais economicas e avance para comparacao.

## Estado atual

A tela fica em `cpa-admin/revisao.html` e usa `scripts/revisao.js`.

Todas as alteracoes acontecem no estado mockado do front-end. Nao ha API, recarregamento por backend ou persistencia real.

## Layout e componentes

- Card "Lista oficial" com metricas da lista.
- Tabela/lista de produtos selecionados.
- Controle de quantidade com `.quantity-controls`.
- Acao de remover item.
- Lista alternativa com `.swap-card`.
- Acao de aplicar uma substituicao ou todas as substituicoes disponiveis.
- Card de economia potencial com CTA para comparacao.

## Responsividade

- Desktop: lista oficial e paineis laterais usam grid quando houver espaco.
- Mobile/tablet: blocos empilhados e tabelas com rolagem horizontal quando necessario.

## Regras visuais

- Usar tokens reais do design system.
- Usar `icon()` para novos icones.
- Usar `.ui-card` para novos cards; `.card` permanece como compatibilidade.
- Usar `.btn` e variantes em novos CTAs.

## Fora de escopo atual

- Backend para aplicar substituicoes.
- Usuario, historico e preferencias.
- Navegacao global.
