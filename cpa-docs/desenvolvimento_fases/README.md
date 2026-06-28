# Desenvolvimento por fases - CPA Mockup / Comparaqui

## Objetivo

Esta pasta documenta a evolução planejada do **CPA Mockup / Comparaqui**, saindo do mockup navegável atual até uma aplicação futura com frontend, backend, APIs, banco de dados, crawlers e análise de dados.

O objetivo imediato é transformar o estado atual em uma especificação viva, confiável e rastreável antes de qualquer migração técnica maior.

## Fase atual

O projeto está na fase:

```txt
CPA Mockup / Comparaqui 1.0 - Mockup navegável
```

O próximo passo recomendado é:

```txt
CPA Mockup 1.1 - Consolidação do Mockup
```

Frase-guia da fase 1.1:

```txt
Antes de transformar o Comparaqui em sistema, transformar o mockup em uma especificação viva confiável.
```

## Ordem das fases

1. [Fase 1.0 - Mockup navegável](./fase-1.0-mockup-navegavel.md)
2. [Fase 1.1 - Consolidação do Mockup](./fase-1.1-consolidacao-do-mockup.md)
3. [Fase 1.2 - Domínio mockado forte](./fase-1.2-dominio-mockado-forte.md)
4. [Fase 2.0 - Preparação para Next.js + NestJS](./fase-2.0-preparacao-next-nest.md)
5. [Fase 3.0 - Produto com backend](./fase-3.0-produto-com-backend.md)
6. [Fase 4.0 - Dados reais, crawlers e análise](./fase-4.0-dados-reais-crawlers-analise.md)

## Guia operacional

Os passos práticos de cada fase ficam em [passo_a_passo](./passo_a_passo/README.md).

## Checklist macro antes de migrar para Next.js/NestJS

- Git iniciado.
- Versão 1.0 congelada.
- Documentação de release criada.
- Auditoria entre `cpa-admin` e `cpa-docs` concluída.
- Design system validado contra uso real.
- Componentes revisados.
- `mock-data.js` normalizado.
- Regra de similares formalizada.
- Regra de substituições formalizada.
- Regra de comparação formalizada.
- Checklist manual de QA criado.
- Limitações atuais documentadas.
- Escopo da versão 1.1 concluído.
- Escopo da versão 1.2 concluído.
- Plano de migração 2.0 documentado.

## Regras de severidade para auditorias

### Alto

Problemas que afetam a lógica principal, impedem evolução ou podem gerar decisões erradas no futuro.

Exemplos: regra de similaridade inexistente ou contraditória, comparação de mercado sem critério claro, `mock-data.js` acoplado demais às telas, design system divergente das telas ou documentação afirmando algo que o sistema não possui.

### Médio

Problemas que não impedem o uso atual, mas dificultam manutenção e evolução.

Exemplos: nomes inconsistentes de componentes, variações visuais não documentadas, arquivos com responsabilidade misturada, duplicação de lógica JavaScript ou ausência de checklist de QA.

### Baixo

Problemas menores de texto, organização ou refinamento.

Exemplos: inconsistência de nomenclatura, pequenos ajustes visuais, documentação incompleta em pontos não críticos ou ausência de exemplos secundários.

## Observações

- Esta documentação não implementa backend.
- Esta documentação não migra o projeto para Next.js ou NestJS.
- Esta documentação não cria funcionalidades reais fora do mockup.
- A fonte visual atual continua sendo `cpa-admin`.
- A documentação existente em `cpa-docs` continua sendo a referência técnica e de produto do MVP.
