# Passo a passo - Fase 1.2 - Domínio mockado forte

## Objetivo

Evoluir os dados mockados para representar o domínio do produto, preparando regras e contratos futuros.

## Etapa 1 - Mapear dados atuais

### Descrição

Entender como os mocks atuais alimentam as telas e onde há acoplamento com apresentação.

### Ações necessárias

- Revisar `mock-data.js`.
- Revisar `data.js`.
- Identificar produtos, mercados, ofertas, listas, sugestões e resultados.
- Marcar dados duplicados ou misturados.

### Arquivos envolvidos

- `cpa-admin/scripts/mock-data.js`
- `cpa-admin/scripts/data.js`
- Scripts de tela em `cpa-admin/scripts/`

### Critério de conclusão

Existe um mapa claro dos dados atuais e de seus usos.

## Etapa 2 - Definir modelo conceitual mockado

### Descrição

Separar os conceitos principais do domínio sem implementar backend.

### Ações necessárias

- Definir `products`.
- Definir `brands`.
- Definir `categories`.
- Definir `markets`.
- Definir `marketOffers`.
- Definir `shoppingList`.
- Definir `similarGroups`.
- Definir `substitutionSuggestions`.
- Definir `comparisonResults`.

### Arquivos envolvidos

- `cpa-admin/scripts/mock-data.js`
- `cpa-docs/business-rules.md`
- Documentação da fase 1.2.

### Critério de conclusão

Cada conceito possui responsabilidade clara e pode ser usado em cenários mockados.

## Etapa 3 - Formalizar regras de domínio

### Descrição

Documentar as regras que orientam similares, substituições, produto encontrado, produto não encontrado, melhor mercado e economia.

### Ações necessárias

- Criar grupos explícitos de similaridade.
- Definir substituições permitidas.
- Definir cálculo de economia potencial.
- Definir critério de melhor mercado.
- Definir critérios de disponibilidade por mercado.

### Arquivos envolvidos

- `cpa-docs/business-rules.md`
- `cpa-docs/screens/revisao-produtos.md`
- `cpa-docs/screens/comparacao-mercados.md`
- `cpa-docs/screens/detalhes-mercado.md`

### Critério de conclusão

As regras deixam de depender apenas de interpretação visual das telas.

## Checklist final da fase

- [ ] Dados atuais mapeados.
- [ ] Conceitos de domínio separados.
- [ ] Grupos de similaridade definidos.
- [ ] Regras de substituição formalizadas.
- [ ] Regra de melhor mercado formalizada.
- [ ] Regra de produto encontrado e não encontrado formalizada.
- [ ] Cálculo de economia potencial formalizado.
- [ ] Cenários mockados preparados para QA.
