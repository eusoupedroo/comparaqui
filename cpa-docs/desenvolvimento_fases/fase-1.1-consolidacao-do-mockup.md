# Fase 1.1 - Consolidação do Mockup

## Objetivo da fase

Transformar o mockup atual em uma base confiável, documentada e pronta para evoluir.

Frase-guia:

```txt
Antes de transformar o Comparaqui em sistema, transformar o mockup em uma especificação viva confiável.
```

## Contexto

A fase 1.1 é a próxima fase recomendada. Ela não adiciona backend, não cria APIs reais e não migra para Next.js/NestJS. Seu foco é organizar, auditar, documentar limitações e proteger o projeto antes de refactors maiores.

## Status atual

Planejada. Deve começar após reconhecer a fase 1.0 como versão base do mockup navegável.

## O que já foi concluído

- Mockup navegável funcional.
- Documentação inicial de telas, componentes, design system e regras de negócio.
- Estrutura visual e fluxo principal suficientes para auditoria.

## O que ainda está pendente

- Iniciar Git.
- Criar commit base.
- Congelar a versão atual como `v1.0`.
- Criar documentação de release.
- Auditar `cpa-admin` contra `cpa-docs`.
- Verificar divergências entre `cpa-admin/design-system.html` e `cpa-docs/design-system.md`.
- Revisar se todos os componentes usados nas telas estão no design system.
- Identificar componentes documentados que não são usados.
- Classificar problemas por severidade: alto, médio e baixo.
- Revisar consistência visual.
- Revisar nomes de classes.
- Revisar componentes reutilizáveis.
- Criar checklist manual de QA.
- Documentar limitações atuais.
- Mapear riscos antes de refactors maiores.

## Entregáveis esperados

- Repositório Git iniciado.
- Commit base criado.
- Versão `v1.0` congelada.
- Documento de release da versão 1.0.
- Relatório de auditoria entre implementação e documentação.
- Matriz de design system contra uso real.
- Checklist manual de QA.
- Documento de limitações conhecidas.
- Lista priorizada de pendências com severidade.

## Critérios de conclusão da fase

- Existe uma referência estável da versão 1.0.
- As divergências entre documentação e implementação estão mapeadas.
- O design system foi comparado contra as telas reais.
- O checklist manual de QA cobre Home, Compras, Revisão, Comparação e Detalhes.
- As limitações atuais estão documentadas.
- Nenhum backend foi implementado nesta fase.

## Riscos da fase

- Alto: documentação afirmar funcionalidades inexistentes.
- Alto: design system divergir das telas reais.
- Alto: avançar para arquitetura real sem regras de domínio revisadas.
- Médio: componentes semelhantes se multiplicarem com nomes diferentes.
- Médio: checklist de QA ficar incompleto.
- Baixo: inconsistências de nomenclatura em textos e títulos.

## Observações

Arquivos importantes para auditoria:

- `cpa-admin/design-system.html`
- `cpa-admin/scripts/mock-data.js`
- `cpa-admin/scripts/data.js`
- `cpa-admin/scripts/ui.js`
- `cpa-admin/scripts/icons.js`
- `cpa-admin/scripts/state.js`
- `cpa-admin/profile-account.html`
- `cpa-docs/index.md`
- `cpa-docs/design-system.md`
- `cpa-docs/components.md`
- `cpa-docs/business-rules.md`
- `cpa-docs/screens/`
- `cpa-docs/flows/`

Exemplo de matriz de componentes:

| Componente | Existe no DS? | Usado nas telas? | Observação |
| --- | --- | --- | --- |
| Button | Sim | Sim | Validar variações |
| Product Card | Sim | Sim | Ver estados e similares |
| Market Card | Sim | Sim | Validar responsivo |
| Comparison Table | Sim | Sim | Validar comportamento mobile |
| Dropdown Similar | Parcial | Sim | Documentar melhor |
| Alert Product | Sim | Sim | Validar nomenclatura BEM |
| Empty State | Sim | Parcial | Confirmar uso real |
| Loading State | Sim | Parcial | Tratar como estado simulado |
