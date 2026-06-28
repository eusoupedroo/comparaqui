import {
  homeCategories,
  homeEconomyMarkets,
  homeEconomySavings,
  homeHelpItems,
  homePriceTrends,
  homeProductAlerts,
  howItWorksSteps,
  markets
} from "./data.js";
import { icon } from "./icons.js";
import { formatCurrency, initShell, renderEconomyPanel } from "./ui.js";

let activeAlertIndex = 0;
let alertTimerId;

initShell({ activePage: "inicio", shellVariant: "mvp" });

renderHeroCta();
renderSteps();
renderEconomyCards();
renderCategories();
renderMarketComparison();
renderHomePanel();

function renderHeroCta() {
  const cta = document.querySelector("[data-hero-cta]");
  if (!cta) return;
  cta.innerHTML = `${icon("shopping-cart", { size: 18, strokeWidth: 2 })} Montar minha lista`;
}

function renderSteps() {
  const container = document.querySelector("[data-home-steps]");
  if (!container) return;

  container.innerHTML = howItWorksSteps
    .map(
      (step, index) => `
        <article class="step-item">
          <div class="step-item__icon">${icon(step.icon, { size: 28, strokeWidth: 1.75 })}</div>
          <span class="step-item__number">${index + 1}</span>
          <span class="step-item__label">${step.title}</span>
          <p class="step-item__description">${step.description}</p>
        </article>
      `
    )
    .join("");
}

function renderEconomyCards() {
  const desktop = document.querySelector("[data-home-economy-desktop]");
  const mobile = document.querySelector("[data-home-economy-mobile]");

  renderEconomyPanel(desktop, {
    title: "Exemplo de economia",
    markets: homeEconomyMarkets,
    savingsAmount: homeEconomySavings,
    variant: "desktop"
  });

  renderEconomyPanel(mobile, {
    title: "Exemplo de economia",
    markets: homeEconomyMarkets,
    savingsAmount: homeEconomySavings,
    variant: "mobile"
  });
}

function renderCategories() {
  const container = document.querySelector("[data-home-categories]");
  if (!container) return;

  container.innerHTML = homeCategories
    .map(
      (category) => `
        <a class="category-item" href="./compras.html?categoria=${category.id}">
          <div class="category-item__icon">
            ${icon(category.icon, { size: 28, strokeWidth: 1.75 })}
          </div>
          <span>${category.label}</span>
        </a>
      `
    )
    .join("");
}

function renderMarketComparison() {
  const container = document.querySelector("[data-home-market-comparison]");
  if (!container) return;

  const maxSavings = Math.max(...markets.map((m) => m.savings));
  const minTotal = Math.min(...markets.map((m) => m.total));

  container.innerHTML = `
    <table class="market-table products-table">
      <thead>
        <tr>
          <th data-priority="1">Mercado</th>
          <th data-priority="1">Total</th>
          <th data-priority="2">Itens encontrados</th>
          <th data-priority="3">Itens indisponíveis</th>
          <th data-priority="1">Economia</th>
        </tr>
      </thead>
      <tbody>
        ${markets
          .map((market) => {
            const barWidth = Math.round((market.savings / maxSavings) * 100);
            const logoMarkup = market.logo
              ? `<img src="${market.logo}" alt="${market.name}" class="market-table__logo" />`
              : "";
            return `
              <tr class="${market.total === minTotal ? "market-table__row--cheapest highlight-better-price" : ""}">
                <td data-priority="1">
                  <div class="market-table__name">
                    ${logoMarkup}
                    <span>${market.name}</span>
                  </div>
                </td>
                <td data-priority="1"><strong>${formatCurrency(market.total)}</strong></td>
                <td data-priority="2">${market.foundItems}</td>
                <td data-priority="3">${market.unavailableItems}</td>
                <td data-priority="1">
                  <div class="market-table__savings">
                    <div class="market-table__bar" aria-hidden="true">
                      <span class="market-table__bar-fill" style="width: ${barWidth}%"></span>
                    </div>
                    <span>${formatCurrency(market.savings)}</span>
                  </div>
                </td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;
}

function renderHomePanel() {
  renderProductAlert();
  renderHelpCard();
  renderPriceTrends();
}

function renderProductAlert() {
  const container = document.querySelector("[data-home-product-alert]");
  if (!container || !homeProductAlerts.length) return;

  const alert = homeProductAlerts[activeAlertIndex];
  const showDots = alert.carousel?.showDots && homeProductAlerts.length > 1;
  const productImage = alert.productImage
    ? `<img src="${alert.productImage}" alt="${alert.productName}" class="product-alert__image" />`
    : `<span class="product-alert__image product-alert__image--fallback" aria-hidden="true">${alert.fallbackIcon}</span>`;
  const alertMessage = alert.message.replace(
    `${Math.abs(alert.variationPercent)}%`,
    `<span class="product-alert__percent">${Math.abs(alert.variationPercent)}%</span>`
  );

  container.className = alert.className;
  container.innerHTML = `
    <h3 class="panel-card__title product-alert-card__title">
      ${icon("chart-up", { size: 16, strokeWidth: 2 })}
      <span>${alert.title}</span>
    </h3>
    <article class="product-alert" aria-live="polite">
      <div class="product-alert__media">${productImage}</div>
      <div class="product-alert__body">
        <strong class="product-alert__name">${alert.productName}</strong>
        <p class="product-alert__text">${alertMessage}</p>
      </div>
    </article>
    ${
      showDots
        ? `<div class="product-alert__dots" aria-label="Alertas de produto">
            ${homeProductAlerts
              .map(
                (_, index) => `
                  <button
                    type="button"
                    class="product-alert__dot${index === activeAlertIndex ? " product-alert__dot--active" : ""}"
                    aria-label="Mostrar alerta ${index + 1}"
                    aria-current="${index === activeAlertIndex ? "true" : "false"}"
                    data-alert-dot="${index}"
                  ></button>
                `
              )
              .join("")}
          </div>`
        : ""
    }
  `;

  container.querySelectorAll("[data-alert-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      activeAlertIndex = Number(button.dataset.alertDot);
      renderProductAlert();
      restartProductAlertCarousel();
    });
  });

  startProductAlertCarousel();
}

function startProductAlertCarousel() {
  if (alertTimerId || homeProductAlerts.length <= 1) return;

  alertTimerId = window.setInterval(() => {
    activeAlertIndex = (activeAlertIndex + 1) % homeProductAlerts.length;
    renderProductAlert();
  }, 4500);
}

function restartProductAlertCarousel() {
  if (alertTimerId) {
    window.clearInterval(alertTimerId);
    alertTimerId = undefined;
  }

  startProductAlertCarousel();
}

function renderHelpCard() {
  const container = document.querySelector("[data-home-help]");
  if (!container) return;

  container.innerHTML = homeHelpItems
    .map(
      (item) => `
        <div class="home-help-item">
          <span class="home-help-item__icon">${icon(item.icon, { size: 18, strokeWidth: 1.75 })}</span>
          <span>${item.label}</span>
        </div>
      `
    )
    .join("");
}

function renderPriceTrends() {
  const container = document.querySelector("[data-home-price-trends]");
  if (!container) return;

  container.innerHTML = homePriceTrends
    .map(
      (trend) => {
        const iconName =
          trend.variationDirection === "increase"
            ? "bar-chart-2"
            : trend.variationDirection === "decrease"
              ? "tag"
              : "circle-check";
        return `
        <article class="price-trend-item">
          <span class="price-trend-item__icon">${icon(iconName, { size: 17, strokeWidth: 1.75 })}</span>
          <p>${trend.text}</p>
        </article>
      `;
      }
    )
    .join("");
}
