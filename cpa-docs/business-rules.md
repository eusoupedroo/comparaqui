# Regras de Negócio — CPA Mockup

## 1. Objetivo

Este documento descreve as regras de negócio iniciais do projeto CPA Mockup.

As regras aqui descritas devem orientar a criação das telas, componentes, fluxos e dados mockados utilizados no projeto.

O sistema tem como objetivo permitir que o usuário monte uma lista de compras e compare os preços dessa lista entre diferentes mercados, identificando onde é possível economizar mais.

---

## 2. Contexto do sistema

O sistema representa uma solução de comparação inteligente de supermercados.

A proposta principal é ajudar o usuário a:

* Montar uma lista de compras;
* Visualizar produtos por categoria;
* Adicionar e remover produtos da lista;
* Alterar quantidades;
* Revisar a lista antes da comparação;
* Receber sugestões de substituição por itens similares mais baratos;
* Comparar mercados;
* Identificar o mercado mais barato;
* Ver itens encontrados e não encontrados;
* Visualizar economia estimada;
* Abrir rota até o mercado escolhido.

---

## 3. Escopo inicial do mockup

Neste primeiro momento, o sistema será apenas um mockup navegável.

Não é obrigatório implementar:

* Autenticação real;
* Banco de dados real;
* Integração com APIs reais;
* Histórico real de compras;
* Favoritos persistentes;
* Alertas reais de preço;
* Contas de usuário completas;
* Pagamento;
* Checkout real;
* Geolocalização real;
* Cálculo real de rotas.

Podem ser utilizados dados mockados para simular o funcionamento da aplicação.

---

## 4. Fluxo principal

O fluxo principal do usuário será:

1. Acessar a [Home](./screens/home.md);
2. Clicar em "Montar minha lista";
3. Acessar a tela de [Compras](./screens/compras.md);
4. Buscar ou filtrar produtos;
5. Adicionar produtos à lista;
6. Alterar quantidades, se necessário;
7. [Revisar](./screens/revisao-produtos.md) os produtos selecionados;
8. Visualizar sugestões de substituição;
9. Ver economia potencial;
10. [Comparar](./screens/comparacao-mercados.md) a lista entre mercados;
11. Escolher um mercado;
12. Acessar os [detalhes do mercado](./screens/detalhes-mercado.md);
13. Ver produtos encontrados, não encontrados e sugestões;
14. Visualizar economia final;
15. Abrir rota para o mercado.

---

## 5. Home

A especificação da tela Home está no arquivo [`screens/home.md`](./screens/home.md).

---

## 6. Produtos

Cada produto mockado pode conter:

* ID interno;
* Nome;
* Marca;
* Categoria;
* Subcategoria;
* Imagem;
* Quantidade;
* Unidade de medida;
* Preço médio;
* Preço promocional, se houver;
* Mercado de origem;
* Informação se está disponível ou indisponível;
* Tags, como promoção, mais barato ou sugestão.

Exemplo de produto:

```json
{
  "id": 1,
  "name": "Arroz Branco Tio João",
  "unitDescription": "5kg",
  "category": "Mercearia",
  "price": 24.90,
  "image": "arroz-tio-joao.png",
  "quantity": 1,
  "available": true
}
```

---

## 7. Categorias iniciais

As categorias iniciais previstas são:

* Todos;
* Hortifrúti;
* Açougue;
* Bebidas;
* Higiene;
* Limpeza;
* Doces;
* Congelados;
* Padaria;
* Mercearia.

As categorias podem aparecer como filtros horizontais na tela de [Compras](./screens/compras.md) e como ícones na [Home](./screens/home.md).

---

## 8. Lista de compras

A especificação da tela de Compras está no arquivo [`screens/compras.md`](./screens/compras.md).

---

## 9. Revisão de produtos

A especificação da tela de Revisão de Produtos está no arquivo [`screens/revisao-produtos.md`](./screens/revisao-produtos.md).

---

## 10. Lista oficial

A especificação da lista oficial está no arquivo [`screens/revisao-produtos.md`](./screens/revisao-produtos.md).

---

## 11. Lista alternativa

A especificação da lista alternativa está no arquivo [`screens/revisao-produtos.md`](./screens/revisao-produtos.md).

---

## 12. Economia potencial

A especificação da economia potencial está no arquivo [`screens/revisao-produtos.md`](./screens/revisao-produtos.md) (na revisão) e em [`screens/detalhes-mercado.md`](./screens/detalhes-mercado.md) (no detalhe do mercado).

---

## 13. Comparação de mercados

A especificação da tela de Comparação de Mercados está no arquivo [`screens/comparacao-mercados.md`](./screens/comparacao-mercados.md).

---

## 14. Critérios de destaque dos mercados

A especificação dos critérios de destaque está no arquivo [`screens/comparacao-mercados.md`](./screens/comparacao-mercados.md).

---

## 15. Resumo da comparação

A especificação do resumo da comparação está no arquivo [`screens/comparacao-mercados.md`](./screens/comparacao-mercados.md).

---

## 16. Detalhes do mercado

A especificação da tela de Detalhes do Mercado está no arquivo [`screens/detalhes-mercado.md`](./screens/detalhes-mercado.md).

---

## 17. Produtos encontrados

A especificação de produtos encontrados está no arquivo [`screens/detalhes-mercado.md`](./screens/detalhes-mercado.md).

---

## 18. Produtos não encontrados

A especificação de produtos não encontrados está no arquivo [`screens/detalhes-mercado.md`](./screens/detalhes-mercado.md).

---

## 19. Sugestões para o usuário

A especificação de sugestões está no arquivo [`screens/detalhes-mercado.md`](./screens/detalhes-mercado.md).

---

## 20. Favoritos

A especificação da ação de favoritar está no arquivo [`screens/detalhes-mercado.md`](./screens/detalhes-mercado.md).

---

## 21. Rota

A especificação da ação "Abrir rota" está no arquivo [`screens/detalhes-mercado.md`](./screens/detalhes-mercado.md).

---

## 22. Dados mockados

Como o projeto está em fase de mockup, os dados podem ser criados manualmente.

Os dados mockados devem ser coerentes e realistas, simulando produtos e mercados brasileiros.

Exemplos de mercados:

* Verde Market;
* Central Foods;
* Super Casa;
* Pão de Açúcar;
* Carrefour;
* Assaí;
* Atacadão;
* Savegnago;
* Mercado local.

Exemplos de produtos:

* Arroz Branco Tio João 5kg;
* Contra Filé Bovino 1kg;
* Óleo de Soja Liza 900ml;
* Café Pilão Tradicional 500g;
* Shampoo Dove 400ml;
* Banana Prata 1kg;
* Leite Integral Italac 1L;
* Papel Higiênico Neve 12un;
* Sabonete Dove 90g;
* Sabonete Lux 85g.

---

## 23. Princípios de negócio

O sistema deve priorizar:

1. Economia para o usuário;
2. Clareza na comparação;
3. Facilidade para montar a lista;
4. Transparência nos preços;
5. Boa visualização dos produtos indisponíveis;
6. Sugestões úteis, sem forçar substituições;
7. Experiência simples e direta;
8. Comparação entre mercados próximos;
9. Decisão rápida baseada em preço, distância e disponibilidade.

---

## 24. Observação para o agente

Ao criar o mockup, o agente deve lembrar que o objetivo não é construir o sistema final, mas sim uma representação visual e navegável da experiência.

Sempre que uma regra ainda não estiver definida, o agente deve usar dados mockados e manter o comportamento simples, claro e coerente com a proposta do projeto.

O agente deve respeitar os mockups desktop e mobile como referência visual principal.
