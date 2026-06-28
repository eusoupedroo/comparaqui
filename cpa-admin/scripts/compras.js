import { categories, getProductById, getSimilarProductsByProductId, products } from "./data.js";
import { icon } from "./icons.js";
import { emptyStateMarkup, formatCurrency, getQueryParam, initShell, productsTableMarkup, statusChip } from "./ui.js";
import {
  getShoppingList,
  incrementItem,
  decrementItem,
  removeItem,
  clearList,
  getListMetrics
} from "./state.js";

initShell({ activePage: "minha-lista", shellVariant: "mvp" });

const filterStrip = document.querySelector("[data-filter-strip]");
const productsGrid = document.querySelector("[data-products-grid]");
const productsTable = document.querySelector("[data-products-table]");
const searchInput = document.querySelector("[data-search-input]");
const searchIcon = document.querySelector("[data-search-icon]");
const desktopItems = document.querySelector("[data-desktop-items]");
const desktopTotal = document.querySelector("[data-desktop-total]");
const desktopSummary = document.querySelector("[data-desktop-summary]");
const summaryIcon = document.querySelector("[data-summary-icon]");
const totalItemsBadge = document.querySelector("[data-total-items-badge]");

let activeCategory = getQueryParam("categoria") ?? "todos";
let searchTerm = "";
let activeSimilarMenuId = null;

const noProductsMarkup = emptyStateMarkup({
  icon: "🔍",
  title: "Não encontramos produtos",
  description: 'Tente buscar por outra marca ou volte para a categoria "Todos".'
});

if (summaryIcon) {
  summaryIcon.innerHTML = icon("shopping-cart", { size: 24, strokeWidth: 2 });
}

if (searchIcon) {
  searchIcon.innerHTML = icon("search", { size: 20, strokeWidth: 1.75 });
}

if (getQueryParam("modo") !== "editar") {
  clearList();
}
renderFilters();
renderProducts();
updateSummaries();

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.toLowerCase();
    activeSimilarMenuId = null;
    renderProducts();
  });
}

document.addEventListener("click", () => {
  if (!activeSimilarMenuId) return;
  activeSimilarMenuId = null;
  renderProducts();
});

function getCategoryLabel(categoryId) {
  return categories.find((category) => category.id === categoryId)?.label ?? categoryId;
}

function getProductPrice(product) {
  return typeof product.promoPrice === "number" ? product.promoPrice : product.price;
}

function renderFilters() {
  if (!filterStrip) return;

  const filterItems = [{ id: "todos", label: "Todos" }, ...categories.filter((category) => category.id !== "todos")];

  filterStrip.innerHTML = filterItems
    .map(
      (category) => `
        <button class="filter-chip ${category.id === activeCategory ? "active" : ""}" data-filter-id="${category.id}">
          ${category.label}
        </button>
      `
    )
    .join("");

  filterStrip.querySelectorAll("[data-filter-id]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.filterId;
      activeSimilarMenuId = null;
      renderFilters();
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  return products.filter((product) => {
    const matchesCategory = activeCategory === "todos" || product.category === activeCategory;
    const matchesSearch = !searchTerm
      || product.name.toLowerCase().includes(searchTerm)
      || product.brand.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const list = getShoppingList();
  const filteredProducts = getFilteredProducts();

  if (filteredProducts.length === 0) {
    if (productsGrid) productsGrid.innerHTML = noProductsMarkup;
    if (productsTable) productsTable.innerHTML = noProductsMarkup;
    return;
  }

  if (productsGrid) {
    productsGrid.innerHTML = filteredProducts.map(renderProductCard(list)).join("");
    bindProductEvents(productsGrid);
  }

  if (productsTable) {
    productsTable.innerHTML = renderProductTable(filteredProducts, list);
    bindProductEvents(productsTable);
  }
}

function renderProductTable(filteredProducts, list) {
  return productsTableMarkup({
    headers: [
      { label: "Produto", attrs: 'data-priority="1"' },
      { label: "Categoria", attrs: 'data-priority="3"' },
      { label: "Quantidade", attrs: 'data-priority="1"' },
      { label: "Preço estimado", attrs: 'data-priority="2"' },
      { label: "Ações", attrs: 'data-priority="1"' }
    ],
    rows: filteredProducts.map((product) => renderProductTableRow(product, list)),
    wrap: false
  });
}

function renderProductTableRow(product, list) {
  const listItem = list.find((item) => item.productId === product.id);
  const quantity = listItem?.quantity ?? 0;
  const hasPromo = typeof product.promoPrice === "number";
  const priceLabel = formatCurrency(getProductPrice(product));
  const secondaryPrice = hasPromo
    ? `<span class="products-table__price-old">${formatCurrency(product.price)}</span>`
    : "";

  return `
    <tr class="${!product.available ? "unavailable" : ""}">
      <td data-priority="1">
        <div class="products-table__name">
          <span class="products-table__icon">${product.icon}</span>
          <div>
            <span>${product.name}</span>
            <span class="products-table__meta">${product.brand} • ${product.unit}</span>
          </div>
        </div>
      </td>
      <td data-priority="3"><span class="table-badge">${getCategoryLabel(product.category)}</span></td>
      <td data-priority="1">${renderProductActions(product, quantity)}</td>
      <td data-priority="2">
        <strong class="products-table__price">${priceLabel}</strong>
        ${secondaryPrice}
      </td>
      <td class="products-table__actions" data-priority="1">
        <div class="table-actions product-actions">
          ${renderSimilarButton(product, "table")}
          ${renderSimilarDropdown(product, "table")}
          <button
            class="icon-button icon-button--danger"
            type="button"
            data-action="remove"
            data-product-id="${product.id}"
            aria-label="Remover da lista"
            title="Remover da lista"
          >
            ${icon("trash-2", { size: 18, strokeWidth: 1.75 })}
          </button>
        </div>
      </td>
    </tr>
  `;
}

function renderProductCard(list) {
  return (product) => {
    const listItem = list.find((item) => item.productId === product.id);
    const quantity = listItem?.quantity ?? 0;
    const hasPromo = typeof product.promoPrice === "number";
    const priceLabel = hasPromo ? formatCurrency(product.promoPrice) : formatCurrency(product.price);
    const secondaryPrice = hasPromo ? `<span class="products-table__price-old">${formatCurrency(product.price)}</span>` : "";
    const tags = product.tags?.length
      ? `<span class="badge promo-badge">${product.tags[0]}</span>`
      : "";
    const availabilityChip = !product.available
      ? statusChip("Indisponível", "negative")
      : "";

    return `
      <article class="product-card ${!product.available ? "unavailable" : ""}">
        <div class="product-thumb">${product.icon}</div>
        <div class="product-info">
          <div class="product-card__header">
            <h3>${product.name}</h3>
            ${tags}
          </div>
          <p>${product.brand} • ${product.unit}</p>
          <div class="product-meta">
            <div>
              <span class="price">${priceLabel}</span>
              ${secondaryPrice}
            </div>
            ${availabilityChip}
          </div>
          <div class="card-actions product-actions">
            ${renderProductActions(product, quantity)}
            ${renderSimilarButton(product, "grid")}
            ${renderSimilarDropdown(product, "grid")}
          </div>
        </div>
      </article>
    `;
  };
}

function renderProductActions(product, quantity) {
  if (quantity > 0) {
    return `
      <div class="quantity-controls" data-quantity>
        <button type="button" data-action="decrement" data-product-id="${product.id}" aria-label="Remover unidade">-</button>
        <span>${quantity}</span>
        <button type="button" data-action="increment" data-product-id="${product.id}" aria-label="Adicionar unidade">+</button>
      </div>
    `;
  }

  const disabledAttr = product.available ? "" : "disabled";
  const disabledClass = product.available ? "" : " is-disabled";
  return `
    <button class="pill-button${disabledClass}" type="button" data-action="add" data-product-id="${product.id}" ${disabledAttr}>
      ${product.available ? "Adicionar" : "Indisponível"}
    </button>
  `;
}

function renderSimilarButton(product, scope) {
  const similarCount = getSimilarProductsByProductId(product.id).length;
  const disabledAttr = similarCount ? "" : "disabled";
  const menuId = getSimilarMenuId(product.id, scope);
  const activeClass = activeSimilarMenuId === menuId ? " active" : "";

  return `
    <button
      class="icon-button icon-button--neutral product-similar-button${activeClass}"
      type="button"
      data-action="toggle-similar"
      data-product-id="${product.id}"
      data-similar-scope="${scope}"
      aria-label="Ver produtos similares"
      title="Ver similares"
      ${disabledAttr}
    >
      ${icon("replace", { size: 18, strokeWidth: 1.75 })}
    </button>
  `;
}

function renderSimilarDropdown(product, scope) {
  if (activeSimilarMenuId !== getSimilarMenuId(product.id, scope)) return "";

  const similarProducts = getSimilarProductsByProductId(product.id);
  const items = similarProducts.length
    ? similarProducts.map(renderSimilarItem).join("")
    : `<div class="app-header__notification"><strong>Nenhum similar encontrado</strong><span>Este produto ainda não possui alternativas cadastradas.</span></div>`;

  return `
    <div class="app-header__dropdown app-header__dropdown--notifications product-similar-menu" data-similar-menu>
      <div class="app-header__dropdown-head">Produtos similares</div>
      ${items}
    </div>
  `;
}

function renderSimilarItem(product) {
  return `
    <article class="app-header__notification product-similar-menu__item">
      <div class="product-similar-menu__row">
        <span class="products-table__icon">${product.icon}</span>
        <div>
          <strong>${product.name}</strong>
          <span>${product.subcategory} • ${product.unit}</span>
          <time>${product.brand}</time>
        </div>
      </div>
      <div class="product-similar-menu__footer">
        <strong class="product-similar-menu__price">${formatCurrency(getProductPrice(product))}</strong>
        <button
          class="btn-secondary btn-secondary--compact"
          type="button"
          data-action="add-similar"
          data-product-id="${product.id}"
        >
          ${icon("shopping-cart", { size: 16, strokeWidth: 1.75 })} Incluir
        </button>
      </div>
    </article>
  `;
}

function bindProductEvents(container) {
  container.querySelectorAll("[data-action='toggle-similar']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const productId = button.dataset.productId;
      const menuId = getSimilarMenuId(productId, button.dataset.similarScope);
      activeSimilarMenuId = activeSimilarMenuId === menuId ? null : menuId;
      renderProducts();
    });
  });

  container.querySelectorAll("[data-similar-menu]").forEach((menu) => {
    menu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  container.querySelectorAll("[data-action='add-similar']").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      activeSimilarMenuId = null;
      incrementItem(button.dataset.productId);
      renderProducts();
      updateSummaries();
    });
  });

  container.querySelectorAll("[data-action='add']").forEach((button) => {
    button.addEventListener("click", () => {
      activeSimilarMenuId = null;
      incrementItem(button.dataset.productId);
      renderProducts();
      updateSummaries();
    });
  });

  container.querySelectorAll("[data-action='increment']").forEach((button) => {
    button.addEventListener("click", () => {
      activeSimilarMenuId = null;
      incrementItem(button.dataset.productId);
      renderProducts();
      updateSummaries();
    });
  });

  container.querySelectorAll("[data-action='decrement']").forEach((button) => {
    button.addEventListener("click", () => {
      activeSimilarMenuId = null;
      decrementItem(button.dataset.productId);
      renderProducts();
      updateSummaries();
    });
  });

  container.querySelectorAll("[data-action='remove']").forEach((button) => {
    button.addEventListener("click", () => {
      activeSimilarMenuId = null;
      removeItem(button.dataset.productId);
      renderProducts();
      updateSummaries();
    });
  });
}

function getSimilarMenuId(productId, scope) {
  return `${scope}:${productId}`;
}

function updateSummaries() {
  const metrics = getListMetrics(getProductById);

  if (totalItemsBadge) {
    totalItemsBadge.textContent = `${metrics.items} ${metrics.items === 1 ? "item" : "itens"}`;
  }

  if (desktopItems) {
    desktopItems.textContent =
      metrics.items === 1
        ? "1 produto adicionado"
        : `${metrics.items} produtos adicionados`;
  }
  if (desktopTotal) desktopTotal.textContent = formatCurrency(metrics.total);

  if (desktopSummary) {
    desktopSummary.style.display = metrics.items > 0 ? "flex" : "none";
  }
}
