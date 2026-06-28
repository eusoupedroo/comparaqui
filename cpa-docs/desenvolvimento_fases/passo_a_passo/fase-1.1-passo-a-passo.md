# Passo a passo - Fase 1.1 - Consolidação do Mockup

## Objetivo

Consolidar o mockup atual como base confiável, auditada e rastreável antes de evoluções maiores.

## Etapa 1 - Iniciar controle de versão

### Descrição

Criar a base de versionamento do projeto.

### Ações necessárias

Status: concluída.

- [x] Iniciar Git.
- [x] Criar commit base.
- [x] Marcar a versão atual como `v1.0`.
- [x] Criar documentação de release da versão 1.0.

### Arquivos envolvidos

- Raiz do projeto.
- `cpa-docs`.
- `cpa-docs/desenvolvimento_fases/releases/1.0.md`.

### Critério de conclusão

Existe um ponto estável e rastreável da versão 1.0.

## Etapa 2 - Auditar documentação contra implementação

### Descrição

Comparar o que está documentado com o que realmente existe em `cpa-admin`.

### Ações necessárias

- Revisar telas HTML.
- Revisar scripts principais.
- Revisar estilos principais.
- Comparar com documentos de `cpa-docs`.
- Classificar divergências por severidade.

### Arquivos envolvidos

- `cpa-admin/*.html`
- `cpa-admin/scripts/mock-data.js`
- `cpa-admin/scripts/data.js`
- `cpa-admin/scripts/ui.js`
- `cpa-admin/scripts/icons.js`
- `cpa-admin/scripts/state.js`
- `cpa-docs/index.md`
- `cpa-docs/screens/`
- `cpa-docs/flows/`

### Critério de conclusão

Existe uma lista de divergências classificada em alto, médio e baixo.

## Etapa 3 - Revisar design system contra uso real

### Descrição

Validar se o design system vivo representa os componentes usados nas telas.

### Ações necessárias

- Comparar `design-system.html` com `design-system.md`.
- Confirmar componentes usados nas telas.
- Identificar componentes documentados e não usados.
- Identificar componentes usados e não documentados.
- Montar matriz de componentes.

### Arquivos envolvidos

- `cpa-admin/design-system.html`
- `cpa-docs/design-system.md`
- `cpa-docs/components.md`
- `cpa-admin/styles/components.css`
- `cpa-admin/styles/base.css`

### Critério de conclusão

A matriz de design system reflete o uso real das telas.

## Etapa 4 - Criar checklist manual de QA

### Descrição

Definir validações manuais enquanto não houver testes automatizados.

### Ações necessárias

- Criar itens de QA para Home.
- Criar itens de QA para Compras.
- Criar itens de QA para Revisão.
- Criar itens de QA para Comparação.
- Criar itens de QA para Detalhes.
- Incluir validações de responsividade.

### Arquivos envolvidos

- `cpa-admin/index.html`
- `cpa-admin/compras.html`
- `cpa-admin/revisao.html`
- `cpa-admin/comparacao.html`
- `cpa-admin/detalhes.html`
- Documentação da fase 1.1.

### Critério de conclusão

O projeto possui checklist manual suficiente para proteger refactors.

## Checklist final da fase

- [x] Git iniciado.
- [x] Commit base criado.
- [x] Versão `v1.0` congelada.
- [x] Release 1.0 documentada.
- [ ] Auditoria `cpa-admin` contra `cpa-docs` concluída.
- [ ] Design system auditado.
- [ ] Componentes revisados.
- [ ] Problemas classificados por severidade.
- [ ] Checklist manual de QA criado.
- [ ] Limitações atuais documentadas.
- [ ] Nenhum backend implementado.
