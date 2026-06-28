# Passo a passo - Fase 4.0 - Dados reais, crawlers e análise

## Objetivo

Conectar o produto a dados reais de supermercados e gerar inteligência confiável sobre preços.

## Etapa 1 - Definir fontes e estratégia de coleta

### Descrição

Escolher como os dados reais serão obtidos e auditados.

### Ações necessárias

- Mapear mercados prioritários.
- Identificar APIs disponíveis.
- Identificar necessidade de crawlers.
- Definir frequência de atualização.
- Definir política de auditoria de fontes.

### Arquivos envolvidos

- Documentação futura de fontes.
- Backend da fase 3.0.
- Módulos de ofertas e histórico.

### Critério de conclusão

Existe estratégia documentada para coleta, atualização e auditoria.

## Etapa 2 - Normalizar e cruzar produtos

### Descrição

Transformar dados externos inconsistentes em produtos comparáveis.

### Ações necessárias

- Normalizar nomes de produtos.
- Relacionar marcas, volumes e unidades.
- Aplicar grupos de similaridade.
- Definir confiança do matching.
- Tratar inconsistências e duplicidades.

### Arquivos envolvidos

- Módulos de produtos.
- Módulos de ofertas.
- Módulos de similares.
- Base de histórico de preços.

### Critério de conclusão

Produtos reais podem ser comparados com regra rastreável.

## Etapa 3 - Criar inteligência de preços

### Descrição

Usar histórico e dados reais para gerar alertas, recomendações e análises.

### Ações necessárias

- Criar histórico de preços.
- Calcular variação de preço.
- Criar alertas de queda.
- Criar recomendações inteligentes.
- Medir economia recorrente.
- Identificar melhores mercados por região.

### Arquivos envolvidos

- Backend da fase 3.0.
- Módulos de histórico, ofertas e comparação.
- Frontend futuro.

### Critério de conclusão

O produto gera recomendações e análises baseadas em dados reais confiáveis.

## Checklist final da fase

- [ ] Fontes reais definidas.
- [ ] Estratégia de coleta documentada.
- [ ] Crawlers ou integrações implementados.
- [ ] Normalização de produtos definida.
- [ ] Matching auditável implementado.
- [ ] Histórico de preços criado.
- [ ] Alertas de preço disponíveis.
- [ ] Recomendações inteligentes disponíveis.
- [ ] Métricas de confiabilidade acompanhadas.
- [ ] Tratamento de dados inconsistentes implementado.
