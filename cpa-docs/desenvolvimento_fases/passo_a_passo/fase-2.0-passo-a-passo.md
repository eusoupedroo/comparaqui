# Passo a passo - Fase 2.0 - Preparação para Next.js + NestJS

## Objetivo

Planejar a migração futura para Next.js e NestJS sem executar a reescrita nesta fase.

## Etapa 1 - Mapear rotas futuras

### Descrição

Relacionar páginas HTML atuais com rotas do futuro frontend.

### Ações necessárias

- Mapear Home para `/`.
- Mapear Compras para `/compras`.
- Mapear Revisão para `/revisao`.
- Mapear Comparação para `/comparacao`.
- Mapear Detalhes para `/mercados/[id]`.
- Mapear design system para `/design-system`.

### Arquivos envolvidos

- `cpa-admin/index.html`
- `cpa-admin/compras.html`
- `cpa-admin/revisao.html`
- `cpa-admin/comparacao.html`
- `cpa-admin/detalhes.html`
- `cpa-admin/design-system.html`

### Critério de conclusão

Cada tela atual possui rota futura definida.

## Etapa 2 - Mapear componentes e dados

### Descrição

Identificar o que pode virar componente React e o que pode virar contrato de API.

### Ações necessárias

- Revisar `ui.js`.
- Revisar scripts por tela.
- Revisar helpers de tabela e produto.
- Revisar estrutura mockada da fase 1.2.
- Separar comportamento de UI de regra de domínio.

### Arquivos envolvidos

- `cpa-admin/scripts/ui.js`
- `cpa-admin/scripts/mock-data.js`
- `cpa-admin/scripts/state.js`
- `cpa-admin/scripts/*.js`
- `cpa-docs/design-system.md`

### Critério de conclusão

Existe um mapa de componentes e contratos conceituais.

## Etapa 3 - Planejar módulos backend

### Descrição

Definir módulos NestJS futuros com base no domínio consolidado.

### Ações necessárias

- Mapear módulos de usuários, mercados, produtos, marcas, categorias e ofertas.
- Mapear listas de compras, comparações, substituições e similares.
- Definir endpoints conceituais.
- Definir entidades principais em nível documental.

### Arquivos envolvidos

- Documentação da fase 2.0.
- Documentação da fase 1.2.
- `cpa-docs/business-rules.md`

### Critério de conclusão

O backend futuro está planejado sem implementação prematura.

## Checklist final da fase

- [ ] Rotas futuras mapeadas.
- [ ] Componentes futuros mapeados.
- [ ] Dados mockados associados a contratos conceituais.
- [ ] Módulos NestJS sugeridos.
- [ ] Endpoints conceituais documentados.
- [ ] Itens mantidos, descartados e reescritos definidos.
- [ ] Nenhuma migração executada.
