# Fase 3.0 - Produto com backend

## Objetivo da fase

Transformar o Comparaqui em uma aplicação real com frontend, backend, autenticação, persistência e APIs.

## Contexto

Esta fase só deve começar após concluir as fases 1.1, 1.2 e 2.0. A intenção é implementar o produto real com base em especificações consolidadas, domínio mockado forte e plano técnico de migração.

## Status atual

Futura. Não deve ser iniciada no estado atual do projeto.

## O que já foi concluído

- Existe um mockup navegável que demonstra a experiência.
- Existem documentos de telas, fluxo, componentes e regras iniciais.
- As fases anteriores devem produzir base de domínio e plano arquitetural.

## O que ainda está pendente

- Criar backend em NestJS.
- Criar frontend em Next.js.
- Implementar autenticação de usuários.
- Implementar cadastro e login.
- Persistir listas de compras.
- Criar cadastro de produtos.
- Criar cadastro de mercados.
- Criar ofertas por mercado.
- Criar comparação real via API.
- Criar histórico básico de listas.
- Criar favoritos.
- Implementar regras de substituição no backend.
- Implementar regras de similares no backend.
- Escolher e modelar banco de dados.
- Validar dados de entrada.
- Tratar erros.
- Versionar API.

## Entregáveis esperados

- Aplicação Next.js funcional.
- API NestJS funcional.
- Banco de dados configurado.
- Autenticação básica.
- Persistência de listas.
- Comparação de mercados via API.
- Regras de domínio executadas no backend.
- Contratos de API versionados.

## Critérios de conclusão da fase

- Usuário consegue criar conta, entrar e salvar listas.
- Produtos, mercados e ofertas são consultados via API.
- Comparações são calculadas por backend.
- Dados relevantes persistem entre sessões.
- Erros e validações básicas são tratados.
- O mockup deixa de ser a experiência principal do produto.

## Riscos da fase

- Alto: iniciar backend sem contratos e regras consolidados.
- Alto: persistir dados com modelo de domínio frágil.
- Alto: misturar regras de comparação entre frontend e backend.
- Médio: autenticação consumir esforço antes do fluxo principal estabilizar.
- Médio: criar endpoints sem versionamento.
- Baixo: ajustes visuais de migração atrasarem entregas centrais.

## Observações

Esta fase depende explicitamente da conclusão das fases 1.1, 1.2 e 2.0. Antes disso, qualquer backend tende a cristalizar decisões prematuras.
