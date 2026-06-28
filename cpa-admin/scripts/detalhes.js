import { markets, marketProductAvailability, getProductById, prices } from "./data.js";
import {
  getShoppingList,
  getSelectedMarket,
  setSelectedMarket,
  toggleFavouriteMarket,
  getFavouriteMarkets,
  applySubstitution
} from "./state.js";
import { icon } from "./icons.js";
import { formatCurrency, getQueryParam, initShell, renderEmptyState, showToast } from "./ui.js";

initShell({ activePage: "minha-lista", shellVariant: "mvp" });

const headerContainer = document.querySelector("[data-market-header]");
const foundContainer = document.querySelector("[data-products-found]");
const missingContainer = document.querySelector("[data-products-missing]");
const suggestionsContainer = document.querySelector("[data-market-suggestions]");
const economyContainer = document.querySelector("[data-market-economy]");

let marketId = getQueryParam("marketId") ?? getSelectedMarket() ?? markets[0]?.id;
let market = markets.find((item) => item.id === marketId) ?? markets[0];

if (market) {
  setSelectedMarket(market.id);
}

renderDetails();

function renderDetails() {
  const list = getShoppingList();
  if (!list.length) {
    renderEmptyState(foundContainer, {
      title: "Sua lista está vazia",
      description: "Volte para a tela de compras e adicione itens antes de visualizar os detalhes de um mercado.",
      action: { label: "Montar lista", href: "./compras.html" }
    });
    if (headerContainer) headerContainer.innerHTML = "";
    if (missingContainer) missingContainer.innerHTML = "";
    if (suggestionsContainer) suggestionsContainer.innerHTML = "";
    if (economyContainer) economyContainer.innerHTML = "";
    return;
  }

  const marketTotals = calculateMarketTotals(list);
  const currentTotals = marketTotals.find((entry) => entry.market.id === market.id);
  if (!currentTotals) return;

  renderHeader(currentTotals);
  renderFoundProducts(currentTotals);
  renderMissingProducts(currentTotals, list);
  renderSuggestions(currentTotals, list);
  renderEconomyCard(currentTotals, marketTotals);
  bindInteractions(currentTotals);
}

function calculateMarketTotals(list) {
  return markets.map((marketItem) => {
    const availability = marketProductAvailability[marketItem.id];
    let total = 0;
    const foundItems = [];

    list.forEach((item) => {
      const baseProduct = getProductById(item.productId);
      const price = prices.find((entry) => entry.productId === item.productId && entry.marketId === marketItem.id);
      const priceSource = item.substitution?.price ?? getEffectivePrice(price);
      const isUnavailable = !item.substitution && !price?.available;

      if (!isUnavailable && typeof priceSource === "number") {
        total += priceSource * item.quantity;
        foundItems.push({
          productId: item.productId,
          product: baseProduct,
          substitution: item.substitution,
          unitPrice: priceSource,
          quantity: item.quantity
        });
      }
    });

    return {
      market: marketItem,
      total: Number(total.toFixed(2)),
      foundItems,
      availability
    };
  });
}

function renderHeader(currentTotals) {
  if (!headerContainer) return;

  const favourites = getFavouriteMarkets();
  const isFavourited = favourites.includes(currentTotals.market.id);
  const unavailableCount = getShoppingList().filter((item) =>
    currentTotals.availability?.unavailable?.includes(item.productId)
  ).length;
  const favouriteLabel = isFavourited ? "Remover dos favoritos" : "Favoritar mercado";

  headerContainer.innerHTML = `
    <div class="top-row">
      <div class="market-header__identity">
        <div class="market-header__logo">
          <img src="${currentTotals.market.logo}" alt="${currentTotals.market.name}" />
        </div>
        <div>
          <h2 class="market-header__title">${currentTotals.market.name}</h2>
          <div class="market-header__meta-row">
            <span>&#9733; ${currentTotals.market.rating.toFixed(1)}</span>
            <span>${currentTotals.market.address}</span>
            <span>${currentTotals.market.distance}</span>
          </div>
        </div>
      </div>
      <div class="actions-row">
        <button
          class="icon-button market-header__favourite ${isFavourited ? "active" : ""}"
          type="button"
          data-action="toggle-favourite"
          aria-label="${favouriteLabel}"
          title="${favouriteLabel}"
        >
          ${icon("heart", { size: 20, strokeWidth: 1.75, filled: isFavourited })}
        </button>
      </div>
    </div>
    <div class="market-header__summary-grid">
      <div class="market-stats">
        <div class="stat-card">
          <span class="stat-card__icon" aria-hidden="true">${icon("bar-chart-2", { size: 18, strokeWidth: 1.8 })}</span>
          <div><span>Total estimado</span><strong>${formatCurrency(currentTotals.total)}</strong></div>
        </div>
        <div class="stat-card">
          <span class="stat-card__icon" aria-hidden="true">${icon("circle-check", { size: 18, strokeWidth: 1.8 })}</span>
          <div><span>Itens encontrados</span><strong>${currentTotals.foundItems.length}</strong></div>
        </div>
        <div class="stat-card">
          <span class="stat-card__icon" aria-hidden="true">${icon("ban", { size: 18, strokeWidth: 1.8 })}</span>
          <div><span>Itens indisponíveis</span><strong>${unavailableCount}</strong></div>
        </div>
        <div class="stat-card">
          <span class="stat-card__icon" aria-hidden="true">${icon("map-pin", { size: 18, strokeWidth: 1.8 })}</span>
          <div><span>Distância</span><strong>${currentTotals.market.distance}</strong></div>
        </div>
      </div>
      <div class="market-header__facade">
        <img src="${currentTotals.market.facade}" alt="Fachada do mercado ${currentTotals.market.name}" />
      </div>
    </div>
  `;
}

function renderFoundProducts(currentTotals) {
  if (!foundContainer) return;

  const rows = currentTotals.foundItems
    .map((entry) => {
      const product = entry.product;
      const substitution = entry.substitution;
      const name = substitution?.name ?? product?.name ?? "Produto";
      const productIcon = substitution?.icon ?? product?.icon ?? "🛍️";
      const unit = product?.unit ?? "";
      const totalPrice = entry.unitPrice * entry.quantity;
      const substitutionLabel = substitution ? `<span class="product-cell__meta">Substituído</span>` : "";

      return `
        <tr>
          <td>
            <div class="product-cell">
              <span class="product-cell__icon product-cell__icon--plain">${productIcon}</span>
              <div>
                <strong>${name}</strong>
                <span class="product-cell__meta">${unit}</span>
                ${substitutionLabel}
              </div>
            </div>
          </td>
          <td>${entry.quantity}</td>
          <td>${formatCurrency(entry.unitPrice)}</td>
          <td>${formatCurrency(totalPrice)}</td>
        </tr>
      `;
    })
    .join("");

  foundContainer.innerHTML = `
    <h3 class="card-heading">Produtos encontrados</h3>
    <div class="market-table-wrap">
      <table class="market-table products-table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd.</th>
            <th>Preço unitário</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderMissingProducts(currentTotals, list) {
  if (!missingContainer) return;
  const unavailable = list
    .map((item) => item.productId)
    .filter((productId) => currentTotals.availability?.unavailable?.includes(productId));

  if (!unavailable.length) {
    missingContainer.innerHTML = `
      <h3 class="card-heading">Produtos indisponíveis</h3>
      <div class="empty-state empty-state--compact">
        <span class="empty-state__icon">✓</span>
        <h3>Todos os itens foram encontrados</h3>
        <p>Este mercado possui 100% da sua lista disponível.</p>
      </div>
    `;
    return;
  }

  const rows = unavailable
    .map((productId) => {
      const product = getProductById(productId);
      return `
        <tr>
          <td>
            <div class="product-cell">
              <span class="product-cell__icon product-cell__icon--plain">${product?.icon ?? "!"}</span>
              <div>
                <strong>${product?.name ?? "Produto"}</strong>
                <span class="product-cell__meta">${product?.unit ?? ""}</span>
              </div>
            </div>
          </td>
          <td><span class="status-chip negative">Indisponível</span></td>
        </tr>
      `;
    })
    .join("");

  missingContainer.innerHTML = `
    <h3 class="card-heading">Produtos indisponíveis</h3>
    <div class="market-table-wrap">
      <table class="market-table products-table">
        <thead><tr><th>Produto</th><th>Status</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderSuggestions(currentTotals, list) {
  if (!suggestionsContainer) return;
  const suggestions = currentTotals.availability?.suggestions ?? [];
  const applicable = suggestions.filter((suggestion) =>
    list.some((item) => item.productId === suggestion.originalId && !item.substitution)
  );

  if (!applicable.length) {
    suggestionsContainer.innerHTML = `
      <h3 class="card-heading">Sugestões para você</h3>
      <div class="empty-state empty-state--compact">
        <span class="empty-state__icon">🛒</span>
        <h3>Nenhuma sugestão extra</h3>
        <p>Todos os itens já estão com os melhores preços neste mercado.</p>
      </div>
    `;
    return;
  }

  const cards = applicable
    .map((suggestion) => {
      const product = getProductById(suggestion.originalId);
      return `
        <article class="swap-card">
          <div class="swap-info">
            <strong>${product?.name ?? "Produto"}</strong>
            <span class="text-meta">${product?.unit ?? ""}</span>
            <div class="swap-products">
              <span>${product?.icon ?? "🛍️"}</span>
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
            <button class="btn-primary" data-action="apply-substitution" data-product-id="${suggestion.originalId}">Substituir</button>
          </div>
        </article>
      `;
    })
    .join("");

  suggestionsContainer.innerHTML = `
    <h3 class="card-heading">Sugestões para você</h3>
    <div class="content-grid content-grid--tight">${cards}</div>
  `;
}

function renderEconomyCard(currentTotals, allTotals) {
  if (!economyContainer) return;
  const totals = allTotals.map((entry) => entry.total);
  const maxTotal = Math.max(...totals);
  const economyValue = maxTotal - currentTotals.total;
  const economyPercent = maxTotal ? (economyValue / maxTotal) * 100 : 0;

  economyContainer.innerHTML = `
    <div class="total-economy-card__head">
      <h3>Economia neste mercado</h3>
      <span class="total-economy-card__icon" aria-hidden="true">
        ${icon("bar-chart-2", { size: 20, strokeWidth: 1.8 })}
      </span>
    </div>
    <p>
      Você economiza
      <span class="total-economy-card__value">${formatCurrency(economyValue)}</span>
      (${economyPercent.toFixed(1)}%) escolhendo o ${currentTotals.market.name} em relação ao mercado mais caro da sua análise.
    </p>
    <a class="btn btn--inverted btn--md" href="./comparacao.html">Comparar mercados</a>
  `;
}

function bindInteractions(currentTotals) {
  const favouriteButton = document.querySelector("[data-action='toggle-favourite']");
  if (favouriteButton) {
    favouriteButton.addEventListener("click", () => {
      toggleFavouriteMarket(currentTotals.market.id);
      renderDetails();
    });
  }

  suggestionsContainer.querySelectorAll("[data-action='apply-substitution']").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const suggestion = currentTotals.availability?.suggestions?.find((item) => item.originalId === productId);
      if (!suggestion) return;
      applySubstitution(productId, suggestion.suggested);
      showToast("Substituição aplicada na sua lista");
      renderDetails();
    });
  });
}

function getEffectivePrice(price) {
  if (!price?.available) return null;
  return price.promotionalPrice ?? price.clubPrice ?? price.regularPrice;
}
