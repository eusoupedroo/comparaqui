# Fase 1.2 - Domínio mockado forte

## Objetivo da fase

Melhorar a estrutura dos dados mockados para que eles representem melhor o domínio real do produto, reduzindo acoplamento com telas e preparando contratos futuros.

## Contexto

Hoje os mocks funcionam para renderizar a experiência. A fase 1.2 deve evoluir esses dados para simular como o sistema pensaria: produtos, marcas, categorias, mercados, ofertas, listas, similares, substituições e resultados de comparação.

## Status atual

Planejada. Deve começar depois da consolidação da fase 1.1.

## O que já foi concluído

- Existem dados mockados em `cpa-admin/scripts/mock-data.js`.
- O mockup já demonstra produtos, mercados, sugestões, comparação e economia.
- A documentação inicial registra regras básicas de negócio.

## O que ainda está pendente

- Normalizar `mock-data.js`.
- Separar produtos, marcas, categorias, mercados e ofertas.
- Criar estrutura clara para lista de compras.
- Criar estrutura para produtos similares.
- Criar estrutura para sugestões de substituição.
- Criar estrutura para comparação de mercados.
- Criar cenários de teste mockados.
- Formalizar regras de similaridade.
- Formalizar regras de substituição.
- Formalizar regras de melhor mercado.
- Formalizar regra de produto encontrado e produto não encontrado.
- Formalizar cálculo de economia potencial.

## Entregáveis esperados

- Modelo conceitual de dados mockados.
- Mocks separados por conceito de domínio.
- Grupos explícitos de similaridade.
- Regras documentadas para substituição e comparação.
- Cenários mockados para QA manual e futura automação.

## Critérios de conclusão da fase

- Os dados mockados deixam de ser apenas dados de tela.
- Produtos, marcas, categorias, mercados e ofertas possuem responsabilidades claras.
- A similaridade usa grupos explícitos, não apenas categoria.
- A comparação de mercados possui critérios documentados.
- A economia potencial possui regra rastreável.

## Riscos da fase

- Alto: criar regra de similaridade genérica demais.
- Alto: misturar produto, oferta e mercado no mesmo objeto sem fronteira clara.
- Alto: preparar contratos futuros a partir de dados inconsistentes.
- Médio: duplicar dados entre telas.
- Médio: criar nomes de IDs instáveis.
- Baixo: exemplos secundários ficarem incompletos.

## Observações

Estrutura conceitual recomendada:

```js
products = [
  {
    id: "pizza-frango-catupiry-sadia-460g",
    name: "Pizza Congelada Frango C Catupiry Sadia 460g",
    brandId: "sadia",
    categoryId: "congelados",
    similarGroupId: "pizza-congelada-frango-requeijao"
  }
]
```

Conceitos a separar:

- `products`
- `brands`
- `categories`
- `markets`
- `marketOffers`
- `shoppingList`
- `similarGroups`
- `substitutionSuggestions`
- `comparisonResults`

Similaridade não deve ser baseada apenas em categoria.

Exemplo:

```txt
Coca-Cola 2L
-> similares permitidos: Pepsi 2L, Cola marca própria 2L
-> similares proibidos: Guaraná, Fanta, Sprite
```

Grupos recomendados:

```txt
pizza-congelada-frango-requeijao
refrigerante-cola-2l
arroz-branco-tipo-1-5kg
leite-integral-1l
```
