import {
  getShoppingList,
  getListMetrics,
  incrementItem,
  decrementItem,
  removeItem,
  applySubstitution,
  removeSubstitution
} from "./state.js";
import {
  getProductById,
  marketProductAvailability
} from "./data.js";
import { icon } from "./icons.js";
import { formatCurrency, initShell, renderEmptyState } from "./ui.js";

const DEFAULT_SUGGESTION_MARKET = "pao-de-acucar";

initShell({ activePage: "minha-lista", shellVariant: "mvp" });

const officialListContainer = document.querySelector("[data-official-list]");
const productsContainer = document.querySelector("[data-products-review]");
const alternativeContainer = document.querySelector("[data-alternative-list]");
const totalEconomyContainer = document.querySelector("[data-total-economy-card]");

renderReview();

function renderReview() {
  const list = getShoppingList();

  if (!list.length) {
    renderEmptyState(productsContainer, {
      title: "Sua lista está vazia",
      description: "Adicione itens na tela de compras para revisar e comparar mercados.",
      action: { label: "Montar minha lista", href: "./compras.html" }
    });
    if (officialListContainer) officialListContainer.innerHTML = "";
    if (alternativeContainer) alternativeContainer.innerHTML = "";
    hideTotalEconomyCard();
    return;
  }

  const metrics = getListMetrics(getProductById);
  renderOfficialCard(list, metrics);
  renderProductsTable(list);
  renderSuggestions(list);
  renderTotalEconomyCard(list, metrics);
  bindReviewInteractions();
}

function renderOfficialCard(list, metrics) {
  if (!officialListContainer) return;

  const substitutionsApplied = list.filter((item) => item.substitution).length;

  officialListContainer.innerHTML = `
    <div class="cluster cluster--between cluster--wrap">
      <div>
        <span class="eyebrow">Lista oficial</span>
        <h2 class="section-title">${metrics.items} ${metrics.items === 1 ? "item" : "itens"}</h2>
        <p class="inline-metric">Valor médio estimado: <strong>${formatCurrency(metrics.total)}</strong></p>
      </div>
      <div class="cluster cluster--wrap">
        ${substitutionsApplied ? `<span class="badge">${substitutionsApplied} substituições aplicadas</span>` : ""}
        <a class="btn-primary" href="./comparacao.html">${icon("bar-chart-2", { size: 18, strokeWidth: 1.75 })} Comparar mercados</a>
      </div>
    </div>
  `;
}

function renderProductsTable(list) {
  if (!productsContainer) return;

  const rows = list
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;

      const substitution = item.substitution;
      const displayName = substitution?.name ?? product.name;
      const displayIcon = substitution?.icon ?? product.icon;
      const unit = product.unit;
      const unitPrice = substitution?.price ?? product.price;
      const totalPrice = unitPrice * item.quantity;
      const substitutionLabel = substitution
        ? `<span class="product-cell__meta">Substituído de <strong>${product.name}</strong></span>`
        : "";

      return `
        <tr data-product-row="${item.productId}">
          <td class="table-cell--thumb" data-priority="2">
            <div class="thumb">${displayIcon}</div>
          </td>
          <td data-priority="1">
            <strong>${displayName}</strong>
            <span class="text-meta">${unit}</span>
            ${substitutionLabel}
          </td>
          <td data-priority="1">
            <div class="quantity-controls quantity-controls--center">
              <button data-action="decrement" data-product-id="${item.productId}" aria-label="Diminuir">-</button>
              <span>${item.quantity}</span>
              <button data-action="increment" data-product-id="${item.productId}" aria-label="Aumentar">+</button>
            </div>
          </td>
          <td data-priority="2"><strong>${formatCurrency(unitPrice)}</strong></td>
          <td data-priority="1"><strong>${formatCurrency(totalPrice)}</strong></td>
          <td class="products-table__actions" data-priority="1">
            <div class="table-actions">
              <button
                class="icon-button icon-button--danger"
                type="button"
                data-action="remove"
                data-product-id="${item.productId}"
                aria-label="Remover da lista"
                title="Remover da lista"
              >
                ${icon("trash-2", { size: 18, strokeWidth: 1.75 })}
              </button>
              ${substitution ? `
                <button
                  class="icon-button icon-button--neutral"
                  type="button"
                  data-action="undo-substitution"
                  data-product-id="${item.productId}"
                  aria-label="Reverter substituição"
                  title="Reverter substituição"
                >
                  ${icon("git-compare", { size: 18, strokeWidth: 1.75 })}
                </button>
              ` : ""}
            </div>
          </td>
        </tr>
      `;
    })
    .filter(Boolean)
    .join("");

  productsContainer.innerHTML = `
    <h3 class="card-heading">Itens selecionados</h3>
    <div class="table-note">Altere quantidades, remova itens ou reverta substituições.</div>
    <div class="market-table-wrap">
      <table class="market-table products-table">
        <thead>
          <tr>
            <th data-priority="2"></th>
            <th data-priority="1">Produto</th>
            <th data-priority="1">Quantidade</th>
            <th data-priority="2">Preço unitário</th>
            <th data-priority="1">Total</th>
            <th data-priority="1">Ações</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderSuggestions(list) {
  if (!alternativeContainer) return;

  const suggestionSource = marketProductAvailability[DEFAULT_SUGGESTION_MARKET];
  const suggestions = suggestionSource?.suggestions ?? [];
  const applicableSuggestions = suggestions.filter((suggestion) => {
    const targetItem = list.find((item) => item.productId === suggestion.originalId);
    return Boolean(targetItem) && !targetItem.substitution;
  });
  const substitutionAppliedCount = list.filter((item) => item.substitution).length;

  alternativeContainer.innerHTML = `
    <div class="cluster cluster--between cluster--wrap">
      <div>
        <span class="eyebrow">Lista alternativa</span>
        <h3 class="section-title">Sugestões para economizar mais</h3>
        <p class="inline-metric">Aplique substituições com base em produtos similares encontrados no Pão de Açúcar.</p>
      </div>
      ${applicableSuggestions.length > 1
        ? `<button class="btn-secondary" data-action="apply-all">Aplicar todas as substituições</button>`
        : ""}
    </div>
    <div class="content-grid content-grid--tight content-grid--spaced">
      ${applicableSuggestions.length
        ? applicableSuggestions.map((suggestion) => renderSuggestionCard(suggestion)).join("")
        : `<div class="empty-state empty-state--compact">
            <span class="empty-state__icon">🌱</span>
            <h3>Todas as substituições aplicadas</h3>
            <p>${substitutionAppliedCount ? "Você já está aproveitando as melhores ofertas disponíveis." : "Nenhuma substituição recomendada para os itens da sua lista."}</p>
          </div>`}
    </div>
  `;
}

function renderSuggestionCard(suggestion) {
  const product = getProductById(suggestion.originalId);
  if (!product) return "";

  return `
    <article class="swap-card">
      <div class="swap-info">
        <strong>${product.name}</strong>
        <span class="text-meta">${product.unit}</span>
        <div class="swap-products">
          <span>${product.icon}</span>
          <span class="text-meta">→</span>
          <span>${suggestion.suggested.icon}</span>
          <strong>${suggestion.suggested.name}</strong>
        </div>
        <span class="swap-info economy">Economia estimada: ${formatCurrency(suggestion.economy)}</span>
      </div>
      <div class="swap-card__footer">
        <div>
          <span class="swap-card__price-label">Preço sugerido</span>
          <strong class="swap-card__price">${formatCurrency(suggestion.suggested.price)}</strong>
        </div>
        <button
          class="icon-button icon-button--neutral"
          type="button"
          data-action="apply-substitution"
          data-product-id="${suggestion.originalId}"
          aria-label="Substituir produto"
          title="Substituir produto"
        >
          ${icon("git-compare", { size: 18, strokeWidth: 1.75 })}
        </button>
      </div>
    </article>
  `;
}

function renderTotalEconomyCard(list, metrics) {
  if (!totalEconomyContainer) return;

  const hasPositiveSubstitution = list.some((item) => item.substitution) && metrics.economy > 0;
  if (!hasPositiveSubstitution) {
    hideTotalEconomyCard();
    return;
  }

  const originalTotal = metrics.total + metrics.economy;
  const economyPercent = originalTotal > 0 ? (metrics.economy / originalTotal) * 100 : 0;

  totalEconomyContainer.hidden = false;
  totalEconomyContainer.innerHTML = `
    <div class="total-economy-card__head">
      <h3>Economia total</h3>
      <span class="total-economy-card__icon" aria-hidden="true">
        ${icon("bar-chart-2", { size: 20, strokeWidth: 1.8 })}
      </span>
    </div>
    <p>
      Com essa substituição, você economizará
      <span class="total-economy-card__value">${formatCurrency(metrics.economy)}</span>
      (${economyPercent.toFixed(1)}% de economia) na sua lista atual. Compare os mercados
      para encontrar o melhor valor final.
    </p>
    <a class="btn btn--inverted btn--md" href="./comparacao.html">Comparar mercados</a>
  `;
}

function hideTotalEconomyCard() {
  if (!totalEconomyContainer) return;
  totalEconomyContainer.hidden = true;
  totalEconomyContainer.innerHTML = "";
}

function bindReviewInteractions() {
  productsContainer.querySelectorAll("[data-action='increment']").forEach((button) => {
    button.addEventListener("click", () => {
      incrementItem(button.dataset.productId);
      renderReview();
    });
  });

  productsContainer.querySelectorAll("[data-action='decrement']").forEach((button) => {
    button.addEventListener("click", () => {
      decrementItem(button.dataset.productId);
      renderReview();
    });
  });

  productsContainer.querySelectorAll("[data-action='remove']").forEach((button) => {
    button.addEventListener("click", () => {
      removeItem(button.dataset.productId);
      renderReview();
    });
  });

  productsContainer.querySelectorAll("[data-action='undo-substitution']").forEach((button) => {
    button.addEventListener("click", () => {
      removeSubstitution(button.dataset.productId);
      renderReview();
    });
  });

  alternativeContainer.querySelectorAll("[data-action='apply-substitution']").forEach((button) => {
    button.addEventListener("click", () => {
      const suggestion = findSuggestion(button.dataset.productId);
      if (!suggestion) return;
      applySubstitution(button.dataset.productId, suggestion.suggested);
      renderReview();
    });
  });

  const applyAllButton = alternativeContainer.querySelector("[data-action='apply-all']");
  if (applyAllButton) {
    applyAllButton.addEventListener("click", () => {
      const suggestionSource = marketProductAvailability[DEFAULT_SUGGESTION_MARKET];
      suggestionSource.suggestions.forEach((suggestion) => {
        applySubstitution(suggestion.originalId, suggestion.suggested);
      });
      renderReview();
    });
  }
}

function findSuggestion(productId) {
  const suggestionSource = marketProductAvailability[DEFAULT_SUGGESTION_MARKET];
  return suggestionSource?.suggestions?.find((suggestion) => suggestion.originalId === productId);
}
