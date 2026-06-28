# Detalhes do Mercado

## Papel da tela

Exibir os detalhes de um mercado especifico: identidade, fachada, totais, produtos encontrados, indisponiveis, sugestoes e economia final.

## Estado atual

A tela fica em `cpa-admin/detalhes.html` e usa `scripts/detalhes.js`.

O mercado e selecionado por parametro de query quando disponivel. Dados e alteracoes sao mockados no front-end.

## Layout e componentes

- Cabecalho local com `.market-header` e `.market-header__*`.
- Identidade do mercado, logo, metadados e fachada.
- Cards/metricas de total, economia, distancia e indisponiveis.
- Produtos encontrados com tabela/lista.
- Produtos nao encontrados com status negativo.
- Sugestoes com `.swap-card`.
- Card de economia final com CTA para comparar mercados.

## Responsividade

- Desktop: composicao em grid com area principal e painel lateral.
- Mobile/tablet: blocos empilhados e tabelas com rolagem horizontal quando necessario.

## Regras visuais

- Usar tokens reais do design system.
- Usar `icon()` para novos icones.
- Imagens de mercado devem ter `object-fit: cover` e respeitar os raios do layout.
- Favoritar e abrir rota sao simulacoes visuais, nao persistidas.

## Fora de escopo atual

- Favoritos reais por usuario.
- Rotas reais ou integracao com mapas.
- API de substituicao.
- Conta, perfil e navegacao global.
