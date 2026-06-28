# Fase 4.0 - Dados reais, crawlers e análise

## Objetivo da fase

Evoluir o produto para consumir dados reais de supermercados e gerar inteligência sobre preços.

## Contexto

Esta é uma fase futura e mais complexa. Ela envolve dados externos, manutenção contínua, confiabilidade das informações, normalização de produtos e auditoria de fontes.

## Status atual

Futura. Não deve ser iniciada antes de existir produto com backend, persistência e contratos claros.

## O que já foi concluído

- O mockup demonstra comparação, economia, produtos encontrados e não encontrados.
- As fases anteriores devem preparar regras de domínio, APIs e persistência.

## O que ainda está pendente

- Criar crawlers ou integrações com APIs de mercados.
- Coletar preços reais.
- Normalizar nomes de produtos.
- Fazer matching entre produtos semelhantes.
- Criar histórico de preços.
- Analisar variação de preço.
- Criar alertas de preço.
- Criar recomendações inteligentes.
- Analisar economia recorrente.
- Detectar melhores mercados por região.
- Criar métricas de confiabilidade dos dados.
- Tratar dados inconsistentes.
- Auditar fontes.
- Definir regras de atualização de preços.

## Entregáveis esperados

- Pipeline de coleta ou integração.
- Base de preços reais.
- Regras de matching e normalização.
- Histórico de preços.
- Métricas de confiabilidade.
- Alertas e análises baseados em dados reais.
- Processo de auditoria de fontes.

## Critérios de conclusão da fase

- O sistema consome dados reais de fontes definidas.
- Preços têm data de coleta e rastreabilidade.
- Produtos equivalentes são normalizados com regra auditável.
- O usuário consegue receber recomendações baseadas em dados reais.
- Falhas e inconsistências de fonte são tratadas.

## Riscos da fase

- Alto: fontes externas mudarem formato ou bloquearem coleta.
- Alto: matching incorreto gerar comparação enganosa.
- Alto: dados desatualizados afetarem confiança do usuário.
- Médio: custo operacional de manutenção de crawlers crescer rápido.
- Médio: regiões diferentes exigirem regras específicas.
- Baixo: ajustes de apresentação visual dependerem de dados incompletos.

## Observações

Esta fase exige atenção especial a confiabilidade, rastreabilidade, auditoria e manutenção contínua. Dados reais não devem ser tratados como simples substituição dos mocks.
