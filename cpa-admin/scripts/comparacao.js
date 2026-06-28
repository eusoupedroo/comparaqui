import { compareCart, markets, prices, products } from "./data.js";
import { getShoppingList, setSelectedMarket } from "./state.js";
import { formatCurrency, initShell, renderEmptyState } from "./ui.js";
import { icon } from "./icons.js";

initShell({ activePage: "minha-lista", shellVariant: "mvp" });

const summaryContainer = document.querySelector("[data-comparison-summary]");
const cardsContainer = document.querySelector("[data-market-cards]");
const tableContainer = document.querySelector("[data-comparison-table]");
const pageHeader = document.querySelector(".page-header");

const marketById = new Map(markets.map((market) => [market.id, market]));
const productById = new Map(products.map((product) => [product.id, product]));
const tableMarkets = markets.map((market) => market.id);

let marketCards = [];
let productRows = [];
let tableTotals = {};
let comparisonSummary = [];
let bestSavingsAmount = 0;

const DEFAULT_SORT_MODE = "best-savings";

renderComparison();

function renderComparison() {
  renderHeader();

  const list = getShoppingList();
  if (!list.length) {
    renderEmptyComparison();
    return;
  }

  prepareComparisonData(list);
  renderMarketSectionHeader();
  renderTableSectionHeader();
  renderSummary();
  renderMarketCards(DEFAULT_SORT_MODE);
  renderComparisonTable();
  bindComparisonControls();
  bindMarketActions();
}

function prepareComparisonData(list) {
  const cartItems = list.map((item) => ({
    productId: item.productId,
    quantity: item.quantity
  }));
  const cartComparison = compareCart(cartItems);
  const minTotal = Math.min(...cartComparison.map((entry) => entry.total));
  const maxSavings = Math.max(...cartComparison.map((entry) => entry.savings));
  const fewestUnavailable = Math.min(...cartComparison.map((entry) => entry.unavailableItems));
  const nearestMarket = [...markets].sort((a, b) => parseDistance(a.distance) - parseDistance(b.distance))[0];

  comparisonSummary = [
    { iconName: "tag", value: formatCurrency(minTotal), label: "Menor preço" },
    { iconName: "piggy-bank", value: formatCurrency(maxSavings), label: "Economia máxima" },
    { iconName: "list", value: `${fewestUnavailable} itens`, label: "Itens indisponíveis mínimos" },
    { iconName: "map-pin", value: `${nearestMarket.name} (${nearestMarket.distance})`, label: "Mercado mais próximo" }
  ];

  marketCards = cartComparison.map((entry) => {
    const market = marketById.get(entry.marketId);
    return {
      id: entry.marketId,
      badge: entry.total === minTotal ? "Melhor oferta" : entry.unavailableItems === fewestUnavailable ? "Mais completo" : "Oferta analisada",
      distance: market?.distance ?? "",
      total: entry.total,
      savings: entry.savings,
      foundCount: entry.foundItems,
      unavailableCount: entry.unavailableItems
    };
  });

  productRows = list
    .map((item) => {
      const product = productById.get(item.productId);
      if (!product) return null;

      return {
        id: product.id,
        name: product.name,
        unit: product.unit,
        icon: product.icon,
        quantity: item.quantity,
        prices: Object.fromEntries(
          tableMarkets.map((marketId) => {
            const price = prices.find((entry) => entry.productId === product.id && entry.marketId === marketId);
            return [marketId, getEffectivePrice(price)];
          })
        )
      };
    })
    .filter(Boolean);

  tableTotals = Object.fromEntries(cartComparison.map((entry) => [entry.marketId, entry.total]));
  bestSavingsAmount = Math.max(...marketCards.map((entry) => entry.savings));
}

function renderEmptyComparison() {
  if (summaryContainer) summaryContainer.innerHTML = "";
  if (tableContainer) tableContainer.innerHTML = "";
  clearSectionHeading(cardsContainer);
  clearSectionHeading(tableContainer);

  if (cardsContainer) {
    renderEmptyState(cardsContainer, {
      title: "Sua lista está vazia",
      description: "Monte sua lista de compras antes de comparar preços entre mercados.",
      action: { label: "Montar minha lista", href: "./compras.html" }
    });
  }
}

function renderHeader() {
  if (!pageHeader) return;

  pageHeader.innerHTML = `
    <div>
      <span class="eyebrow">DECIDA COM CLAREZA</span>
      <h1 class="page-title">Comparação de mercados</h1>
      <p class="page-subtitle">Veja o valor total da sua lista em cada mercado, identifique a melhor oferta e escolha onde comprar.</p>
    </div>
    <a class="btn-secondary" href="./compras.html?modo=editar">${icon("list", { size: 18 })} Editar minha lista</a>
  `;
  pageHeader.classList.add("page-header--comparison");
}

function renderMarketSectionHeader() {
  const sectionHeading = cardsContainer?.closest(".stacked-section")?.querySelector(".section-heading");
  if (!sectionHeading) return;

  sectionHeading.innerHTML = `
    <div>
      <span class="eyebrow">MERCADOS AVALIADOS</span>
      <h2 class="page-title section-title--large">Compare ofertas lado a lado</h2>
    </div>
    <div class="comparison-toolbar">
      <label class="comparison-sort">
        <span>Ordenar por</span>
        <select data-market-sort>
          <option value="best-savings" selected>Melhor economia</option>
          <option value="lowest-price">Menor preço</option>
          <option value="fewest-unavailable">Menos indisponíveis</option>
          <option value="nearest">Mais próximo</option>
        </select>
      </label>
      <div class="comparison-nav" aria-label="Navegação dos mercados">
        <button class="icon-button" type="button" data-card-nav="previous" aria-label="Mercados anteriores">${icon("chevron-left", { size: 18 })}</button>
        <button class="icon-button" type="button" data-card-nav="next" aria-label="Próximos mercados">${icon("chevron-right", { size: 18 })}</button>
      </div>
    </div>
  `;
}

function renderTableSectionHeader() {
  const sectionHeading = tableContainer?.closest(".stacked-section")?.querySelector(".section-heading");
  if (!sectionHeading) return;

  sectionHeading.innerHTML = `
    <div>
      <span class="eyebrow">DETALHAMENTO DOS VALORES</span>
      <h2 class="page-title section-title--large">Tabela comparativa</h2>
    </div>
    <div class="comparison-table-actions">
      <button class="btn-secondary btn-secondary--compact" type="button">${icon("filter", { size: 18 })} Filtrar produtos</button>
      <label class="comparison-search">
        ${icon("search", { size: 18 })}
        <input type="search" placeholder="Buscar produto" data-product-search />
      </label>
    </div>
  `;
}

function renderSummary() {
  if (!summaryContainer) return;

  summaryContainer.innerHTML = comparisonSummary
    .map(
      (metric) => `
        <div class="metric-card metric-card--with-icon">
          <span class="metric-card__icon">${icon(metric.iconName, { size: 20 })}</span>
          <strong>${metric.value}</strong>
          <span>${metric.label}</span>
        </div>
      `
    )
    .join("");
}

function renderMarketCards(sortMode) {
  if (!cardsContainer) return;

  const orderedCards = getOrderedMarketCards(sortMode);

  cardsContainer.innerHTML = orderedCards
    .map((entry) => {
      const market = marketById.get(entry.id);
      if (!market) return "";
      const isBestSavings = entry.savings === bestSavingsAmount;

      return `
        <article class="comparison-card${isBestSavings ? " highlight-better-price" : ""}" data-market-card="${entry.id}">
          <span class="market-badge">${entry.badge}</span>
          <div class="header">
            <div class="market-icon"><img src="${market.logo}" alt="${market.name}" /></div>
            <div>
              <strong>${market.name}</strong>
              <div class="comparison-card__meta">${entry.distance}</div>
            </div>
          </div>
          <div>
            <span class="comparison-card__label">Valor da sua lista</span>
            <div class="price">${formatCurrency(entry.total)}</div>
          </div>
          <ul>
            <li><strong>${formatCurrency(entry.savings)}</strong> de economia vs mercado mais caro</li>
            <li><strong>${entry.foundCount}</strong> ${entry.foundCount === 1 ? "item encontrado" : "itens encontrados"}</li>
            <li><span class="status-chip negative">${entry.unavailableCount} indisponíveis</span></li>
          </ul>
          <a class="btn-primary" data-action="view-details" data-market-id="${entry.id}">Ver detalhes</a>
        </article>
      `;
    })
    .join("");
}

function renderComparisonTable() {
  if (!tableContainer) return;

  const headerRow = ["Produto", ...tableMarkets.map((marketId) => marketById.get(marketId)?.name ?? marketId)]
    .map((cell) => `<th>${cell}</th>`)
    .join("");

  const rows = productRows
    .map((product) => {
      const cells = tableMarkets.map((marketId) => {
        const price = product.prices[marketId];
        if (price === null) {
          return `<td><span class="status-chip negative">Indisponível</span></td>`;
        }
        return `<td>${formatCurrency(price)}</td>`;
      });

      return `
        <tr>
          <td>
            <div class="product-cell product-cell--compact">
              <span class="product-cell__icon product-cell__icon--plain">${product.icon}</span>
              <div>
                <strong>${product.name}</strong>
                <span class="product-cell__meta">${product.unit} • Qtd. ${product.quantity}</span>
              </div>
            </div>
          </td>
          ${cells.join("")}
        </tr>
      `;
    })
    .join("");

  const footerTotals = tableMarkets
    .map((marketId) => `<td><strong>${formatCurrency(tableTotals[marketId] ?? 0)}</strong></td>`)
    .join("");

  tableContainer.innerHTML = `
    <div class="market-table-wrap">
      <table class="market-table products-table">
        <thead>
          <tr>${headerRow}</tr>
        </thead>
        <tbody data-comparison-table-body>
          ${rows}
        </tbody>
        <tfoot>
          <tr>
            <th>Total por mercado</th>
            ${footerTotals}
          </tr>
        </tfoot>
      </table>
    </div>
  `;
}

function bindComparisonControls() {
  const sortSelect = document.querySelector("[data-market-sort]");
  sortSelect?.addEventListener("change", () => {
    renderMarketCards(sortSelect.value);
    bindMarketActions();
  });

  document.querySelectorAll("[data-card-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.cardNav === "previous" ? -1 : 1;
      cardsContainer?.scrollBy({
        left: direction * 320,
        behavior: "smooth"
      });
    });
  });

  document.querySelector("[data-product-search]")?.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll("[data-comparison-table-body] tr").forEach((row) => {
      row.hidden = query.length > 0 && !row.textContent.toLowerCase().includes(query);
    });
  });
}

function bindMarketActions() {
  document.querySelectorAll("[data-action='view-details']").forEach((button) => {
    button.addEventListener("click", () => {
      const marketId = button.dataset.marketId;
      setSelectedMarket(marketId);
      window.location.href = `./detalhes.html?marketId=${marketId}`;
    });
  });
}

function getOrderedMarketCards(sortMode) {
  const cards = [...marketCards];

  if (sortMode === "best-savings") {
    return cards.sort((a, b) => b.savings - a.savings);
  }

  if (sortMode === "lowest-price") {
    return cards.sort((a, b) => a.total - b.total);
  }

  if (sortMode === "fewest-unavailable") {
    return cards.sort((a, b) => a.unavailableCount - b.unavailableCount);
  }

  if (sortMode === "nearest") {
    return cards.sort((a, b) => parseDistance(a.distance) - parseDistance(b.distance));
  }

  return cards;
}

function clearSectionHeading(container) {
  const sectionHeading = container?.closest(".stacked-section")?.querySelector(".section-heading");
  if (sectionHeading) sectionHeading.innerHTML = "";
}

function parseDistance(distance) {
  return Number.parseFloat(String(distance).replace(",", "."));
}

function getEffectivePrice(price) {
  if (!price?.available) return null;
  return price.promotionalPrice ?? price.clubPrice ?? price.regularPrice;
}
