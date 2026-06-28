# Fase 2.0 - Preparação para Next.js + NestJS

## Objetivo da fase

Preparar tecnicamente a migração futura para uma arquitetura moderna com Next.js e NestJS, sem ainda implementar a aplicação real.

## Contexto

A fase 2.0 deve transformar o aprendizado do mockup consolidado em plano de arquitetura. Ela depende das fases 1.1 e 1.2 para evitar migrar telas, dados e regras inconsistentes.

## Status atual

Planejada para depois da consolidação do mockup e da normalização do domínio mockado.

## O que já foi concluído

- Existem telas HTML que podem ser mapeadas para rotas.
- Existem scripts JavaScript que podem ser analisados como origem de componentes.
- Existem mocks que podem inspirar contratos futuros.
- Existe design system vivo que pode orientar componentes React.

## O que ainda está pendente

- Mapear páginas atuais para futuras rotas do Next.js.
- Mapear scripts atuais para futuros componentes.
- Identificar partes de `ui.js` que podem virar componentes React.
- Identificar dados mockados que podem virar contratos de API.
- Planejar estrutura de pastas futura.
- Planejar separação entre frontend e backend.
- Planejar entidades principais do domínio.
- Documentar endpoints conceituais.
- Documentar contratos de dados.
- Preparar o design system para componentização.
- Definir o que será mantido, descartado ou reescrito.

## Entregáveis esperados

- Plano de rotas Next.js.
- Plano de módulos NestJS.
- Mapa de componentes futuros.
- Mapa de contratos de API.
- Documento de decisões sobre manter, descartar ou reescrever partes do mockup.

## Critérios de conclusão da fase

- Cada tela atual possui rota futura sugerida.
- Cada domínio principal possui módulo backend conceitual.
- Os contratos de dados principais estão descritos em nível suficiente para orientar implementação futura.
- A migração está planejada sem executar a reescrita.

## Riscos da fase

- Alto: migrar antes de resolver divergências da fase 1.1.
- Alto: transformar mock acoplado em contrato de API definitivo.
- Médio: componentizar visualmente sem respeitar regras de domínio.
- Médio: planejar módulos backend demais para o estágio do produto.
- Baixo: nomes de rotas ou módulos exigirem ajustes futuros.

## Observações

Rotas futuras sugeridas:

```txt
/
/compras
/revisao
/comparacao
/mercados/[id]
/design-system
```

Módulos futuros sugeridos para backend:

```txt
users
markets
products
brands
categories
offers
shopping-lists
comparisons
substitutions
similar-products
price-history
```

Endpoints conceituais sugeridos:

```txt
GET /products
GET /products/:id
GET /products/:id/similars
GET /markets
POST /shopping-lists
GET /shopping-lists/:id
POST /comparisons
GET /comparisons/:id
```
