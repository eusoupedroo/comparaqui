import {
  userProfile,
  monthlySummary,
  homePurchaseHistory
} from "./data.js";
import { formatCurrency, initShell } from "./ui.js";
import { icon } from "./icons.js";

initShell({ activePage: "", shellVariant: "mvp" });

const savedLists = [
  { name: "Compra da semana", items: 18, updatedAt: "Atualizada hoje", status: "Ativa" },
  { name: "Churrasco de sábado", items: 12, updatedAt: "Atualizada ontem", status: "Salva" },
  { name: "Reposição limpeza", items: 9, updatedAt: "Atualizada em 02/06", status: "Salva" }
];

const monitoredItems = [
  { name: "Leite integral", target: "Abaixo de R$ 5,80", market: "Pão de Açúcar" },
  { name: "Arroz tipo 1", target: "Abaixo de R$ 24,00", market: "Assaí" },
  { name: "Café 500g", target: "Abaixo de R$ 18,00", market: "Carrefour" }
];

const rankingRows = [
  { label: "Economia acumulada", value: formatCurrency(monthlySummary.savings), iconName: "piggy-bank" },
  { label: "Compras comparadas", value: `${monthlySummary.purchases}`, iconName: "shopping-cart" },
  { label: "Ticket médio", value: formatCurrency(monthlySummary.averageTicket), iconName: "tag" },
  { label: "Listas criadas", value: `${monthlySummary.listsCreated}`, iconName: "list" }
];

renderProfileSummary();
renderPurchaseHistory();
renderSavedLists();
renderEconomyRanking();
renderMonitoredItems();

function renderProfileSummary() {
  const container = document.querySelector("[data-profile-summary]");
  if (!container) return;

  container.innerHTML = `
    <div class="cluster cluster--top cluster--between cluster--wrap">
      <div class="market-header__identity">
        <div class="market-header__logo">
          <img src="${userProfile.avatarUrl}" alt="${userProfile.name}" />
        </div>
        <div class="stack stack--sm">
          <span class="eyebrow">Perfil do usuário</span>
          <h2 class="section-title">${userProfile.name}</h2>
          <span class="text-meta">${userProfile.email}</span>
        </div>
      </div>
      <span class="badge">Cliente ativo</span>
    </div>
  `;
}

function renderPurchaseHistory() {
  const container = document.querySelector("[data-purchase-history]");
  if (!container) return;

  const rows = homePurchaseHistory
    .map(
      (entry) => `
        <tr>
          <td><strong>${entry.label}</strong><span class="text-meta">${entry.date}</span></td>
          <td>${formatCurrency(entry.total)}</td>
          <td><strong class="products-table__price">${formatCurrency(entry.savings)}</strong></td>
        </tr>
      `
    )
    .join("");

  container.innerHTML = `
    <div class="section-header section-header--wrap">
      <div>
        <span class="eyebrow">Histórico</span>
        <h2 class="section-title">Compras recentes</h2>
      </div>
      <span class="badge">${homePurchaseHistory.length} compras</span>
    </div>
    <div class="market-table-wrap">
      <table class="market-table products-table">
        <thead>
          <tr>
            <th>Compra</th>
            <th>Total</th>
            <th>Economia</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderSavedLists() {
  const container = document.querySelector("[data-saved-lists]");
  if (!container) return;

  container.innerHTML = `
    <div class="section-header section-header--wrap">
      <div>
        <span class="eyebrow">Listas</span>
        <h2 class="section-title">Listas salvas</h2>
      </div>
      <span class="badge">${savedLists.length} listas</span>
    </div>
    <div class="content-grid content-grid--tight content-grid--spaced">
      ${savedLists
        .map(
          (entry) => `
            <article class="ui-card ui-card--panel">
              <div class="cluster cluster--between cluster--wrap">
                <div class="stack">
                  <strong>${entry.name}</strong>
                  <span class="text-meta">${entry.items} itens - ${entry.updatedAt}</span>
                </div>
                <span class="status-chip positive">${entry.status}</span>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderEconomyRanking() {
  const container = document.querySelector("[data-economy-ranking]");
  if (!container) return;

  container.innerHTML = `
    <div class="section-header section-header--stack">
      <span class="eyebrow">Ranking</span>
      <h2 class="section-title">Economia</h2>
    </div>
    <div class="metrics-row">
      ${rankingRows
        .map(
          (entry) => `
            <div class="metric-card metric-card--with-icon">
              <span class="metric-card__icon">${icon(entry.iconName, { size: 20 })}</span>
              <strong>${entry.value}</strong>
              <span>${entry.label}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderMonitoredItems() {
  const container = document.querySelector("[data-monitored-items]");
  if (!container) return;

  container.innerHTML = `
    <div class="section-header section-header--stack">
      <span class="eyebrow">Monitoramento</span>
      <h2 class="section-title">Itens monitorados</h2>
    </div>
    <div class="content-grid content-grid--tight content-grid--spaced">
      ${monitoredItems
        .map(
          (entry) => `
            <article class="swap-card">
              <div class="swap-info">
                <strong>${entry.name}</strong>
                <span class="text-meta">${entry.target}</span>
                <span class="market-badge">${entry.market}</span>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}
