# Fluxo Principal de Compra

## Visao geral

Este documento descreve o fluxo principal do MVP estatico do Comparaqui. O fluxo acontece inteiramente no front-end, com HTML, CSS, Vanilla JS e dados mockados.

Nao ha API real nesta etapa. Qualquer referencia a endpoints deve ser tratada como plano futuro.

## Disclaimer tecnico

O projeto deve permanecer como mockup estatico por enquanto. Em uma etapa futura, a arquitetura prevista e:

- Nest para backend e criacao das APIs.
- Next para frontend.
- Persistencia real para usuarios, listas, mercados, precos e historico.

Essa migracao futura nao deve ser implementada dentro do MVP atual.

## Etapas atuais

### 1. Home (`index.html`)

O usuario acessa a Home e encontra:

- Hero com CTA "Montar minha lista".
- Como funciona.
- Exemplo/cenario de economia.
- Categorias populares.
- Lista Inteligente.
- Comparacao de mercados.
- Alerta Produto, ajuda e tendencias de preco.

O CTA leva para `compras.html`.

### 2. Compras (`compras.html`)

O usuario monta a lista:

- Busca produtos por nome/marca.
- Filtra por categoria.
- Ajusta quantidade com controles `-` e `+`.
- Ve sugestoes de similares em dropdown contextual.
- Acompanha total de itens e valor estimado.
- Avanca para `revisao.html` ou `comparacao.html`.

Tudo e atualizado no estado mockado do front-end.

### 3. Revisao (`revisao.html`)

O usuario revisa a lista:

- Confere itens selecionados.
- Ajusta quantidades.
- Remove produtos.
- Ve sugestoes de substituicao.
- Aplica uma ou todas as substituicoes disponiveis.
- Ve a economia potencial.
- Avanca para `comparacao.html`.

### 4. Comparacao (`comparacao.html`)

O usuario compara mercados:

- Ve resumo da comparacao.
- Ordena e navega entre cards de mercado.
- Consulta tabela comparativa por produto.
- Clica em "Ver detalhes" para acessar `detalhes.html`.

### 5. Detalhes do mercado (`detalhes.html`)

O usuario analisa um mercado especifico:

- Ve identidade, fachada e metadados do mercado.
- Confere produtos encontrados e nao encontrados.
- Avalia sugestoes de substituicao.
- Ve economia final.
- Usa acoes simuladas como favoritar ou abrir rota quando disponiveis.

## Rotas atuais

| Etapa | Arquivo |
| --- | --- |
| Home | `index.html` |
| Compras | `compras.html` |
| Revisao | `revisao.html` |
| Comparacao | `comparacao.html` |
| Detalhes | `detalhes.html` |
| Design system | `design-system.html` |

## APIs futuras

Quando a migracao Nest/Next for iniciada, endpoints poderao cobrir:

- Adicionar item a lista.
- Alterar quantidade.
- Remover item.
- Aplicar substituicao.
- Aplicar todas as substituicoes.
- Obter estado atual da lista.
- Persistir usuario, historico e preferencias.

Esses endpoints nao existem no MVP atual.
