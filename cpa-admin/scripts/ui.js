import {
  userProfile,
  deliveryAddress,
  notifications,
  accountMenuItems,
  markets
} from "./data.js";
import { icon } from "./icons.js";

const NAV_ITEMS_DESKTOP = [
  {
    id: "inicio",
    label: "Início", 
    href: "index.html",
    iconName: "home"
  },
  {
    id: "minha-lista",
    label: "Minha lista", 
    href: "compras.html",
    iconName: "shopping-cart"
  },
  {
    id: "design-system",
    label: "Design system",
    href: "design-system.html",
    iconName: "settings"
  },
  {
    id: "dashboard",
    label: "Dashboard", 
    href: "#",
    iconName: "layout-dashboard",
    disabled: true
  }
];

const DRAWER_BP = 1024;

export function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

export function formatPercent(value) {
  return `${Math.round(value)}%`;
}

export function formatDistance(kmString) {
  return kmString;
}

export function initShell({ activePage, shellVariant = "default" }) {
  if (shellVariant === "mvp") {
    document.documentElement.dataset.shell = "mvp";
    disableSidebarForMvp();
    disableHeaderForMvp();
    return;
  }

  renderSidebar(activePage);
  renderAppHeader();
  ensureSidebarOverlay();
  applySidebarState();
  bindNavGuards();
  bindHeaderDropdowns();
  bindSidebarToggle();
  bindSidebarResponsive();
}

function disableSidebarForMvp() {
  const sidebar = document.querySelector("[data-sidebar]");
  if (!sidebar) return;

  sidebar.hidden = true;
  sidebar.setAttribute("aria-hidden", "true");
}

function disableHeaderForMvp() {
  const header = document.querySelector("[data-app-header]");
  if (!header) return;

  header.hidden = true;
  header.setAttribute("aria-hidden", "true");
}

function renderSidebar(activePage) {
  const sidebar = document.querySelector("[data-sidebar]");
  if (!sidebar) return;

  sidebar.innerHTML = `
    <nav class="sidebar__primary">
      ${NAV_ITEMS_DESKTOP.map((item) => renderNavItem(item, activePage)).join("")}
    </nav>
    <div class="sidebar-promo">
      <img class="sidebar-promo__image" src="./assets/promotional-bag.png" alt="" />
      <div class="sidebar-promo__body">
        <h4 class="sidebar-promo__title">Economize tempo e dinheiro</h4>
        <p class="sidebar-promo__text">Compare mercados próximos e faça sempre a melhor escolha.</p>
        <a class="btn-primary sidebar-promo__cta" href="./compras.html">Montar minha lista</a>
      </div>
    </div>
  `;
}

function renderNavItem(item, activePage) {
  const isActive = item.id === activePage;
  const classes = ["sidebar-nav-item"]
    .concat(isActive ? ["sidebar-nav-item--active"] : [])
    .concat(item.disabled ? ["sidebar-nav-item--disabled"] : [])
    .join(" ");

  const attrs = item.disabled ? 'aria-disabled="true"' : "";
  const href = item.disabled ? "javascript:void(0)" : item.href;
  const iconMarkup = icon(item.iconName, {
    size: 20,
    strokeWidth: 1.75,
    filled: isActive
  });
  const description = item.description
    ? `<span class="sidebar-nav-item__desc">${item.description}</span>`
    : "";

  return `
    <a class="${classes}" href="${href}" data-nav-id="${item.id}" ${attrs}>
      <span class="sidebar-nav-item__icon">${iconMarkup}</span>
      <span class="sidebar-nav-item__text">
        <span class="sidebar-nav-item__title">${item.label}</span>
        ${description}
      </span>
    </a>
  `;
}

function renderAccountMenuItem(entry) {
  const iconMarkup = entry.iconName ? icon(entry.iconName, { size: 16, strokeWidth: 1.75 }) : "";

  if (entry.href) {
    return `
      <a
        class="app-header__dropdown-item"
        href="${entry.href}"
        data-account-item="${entry.id}"
      >
        ${iconMarkup}
        ${entry.label}
      </a>
    `;
  }

  return `
    <button
      class="app-header__dropdown-item"
      type="button"
      data-account-item="${entry.id}"
      ${entry.disabled ? 'data-disabled="true"' : ""}
    >
      ${iconMarkup}
      ${entry.label}
    </button>
  `;
}

function renderAppHeader() {
  const header = document.querySelector("[data-app-header]");
  if (!header) return;

  const unreadCount = notifications.filter((entry) => !entry.read).length;
  const defaultAddress = deliveryAddress.find((entry) => entry.isDefault) ?? deliveryAddress[0];

  header.innerHTML = `
    <div class="app-header__inner">
      <button class="app-header__btn app-header__btn--menu" data-mobile-sidebar-toggle aria-label="Abrir menu" title="Abrir menu">
        ${icon("menu", { size: 20, strokeWidth: 1.75 })}
      </button>
      <div class="app-header__address" data-header-dropdown="address">
        <button class="app-header__btn app-header__btn--address" data-dropdown-trigger="address" aria-expanded="false">
          ${icon("map-pin", { size: 18, strokeWidth: 1.75 })}
          <span class="app-header__address-text" data-address-text>${defaultAddress.label}</span>
          ${icon("chevron-down", { size: 16, strokeWidth: 2, className: "app-header__chevron" })}
        </button>
        <div class="app-header__dropdown" data-dropdown-panel="address" hidden>
          <div class="app-header__dropdown-head">Endereço de entrega</div>
          ${deliveryAddress
            .map(
              (entry) => `
            <button
              class="app-header__dropdown-item${entry.isDefault ? " app-header__dropdown-item--active" : ""}"
              data-address-id="${entry.id}"
              data-address-label="${entry.label}"
            >${entry.label}</button>
          `
            )
            .join("")}
        </div>
      </div>
      <div class="app-header__actions">
        <div class="app-header__notifications" data-header-dropdown="notifications">
          <button class="app-header__btn app-header__btn--icon" data-dropdown-trigger="notifications" aria-expanded="false" aria-label="Notificações">
            ${icon("bell", { size: 20, strokeWidth: 1.75 })}
            ${unreadCount ? `<span class="app-header__badge">${unreadCount}</span>` : ""}
          </button>
          <div class="app-header__dropdown app-header__dropdown--notifications" data-dropdown-panel="notifications" hidden>
            <div class="app-header__dropdown-head">Notificações</div>
            ${notifications
              .map(
                (entry) => `
              <div class="app-header__notification${entry.read ? "" : " app-header__notification--unread"}" data-notif-id="${entry.id}">
                <strong>${entry.title}</strong>
                <span>${entry.message}</span>
                <time>${entry.time}</time>
              </div>
            `
              )
              .join("")}
          </div>
        </div>
        <div class="app-header__account" data-header-dropdown="account">
          <button class="app-header__btn app-header__btn--account" data-dropdown-trigger="account" aria-expanded="false">
            <img class="app-header__avatar" src="${userProfile.avatarUrl}" alt="${userProfile.name}" />
            <span>Olá, ${userProfile.name}!</span>
            ${icon("chevron-down", { size: 16, strokeWidth: 2, className: "app-header__chevron" })}
          </button>
          <div class="app-header__dropdown app-header__dropdown--account" data-dropdown-panel="account" hidden>
            ${accountMenuItems
              .map((entry) => renderAccountMenuItem(entry))
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function showToast(message) {
  let toast = document.querySelector(".cpa-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "cpa-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2800);
}

function bindNavGuards() {
  document.querySelectorAll("[data-nav-id]").forEach((link) => {
    if (link.getAttribute("aria-disabled") === "true") {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast("Funcionalidade disponível em breve no mockup.");
      });
    }
  });
}

function bindHeaderDropdowns() {
  const triggers = document.querySelectorAll("[data-dropdown-trigger]");
  const panels = document.querySelectorAll("[data-dropdown-panel]");

  function closeAll() {
    triggers.forEach((trigger) => trigger.setAttribute("aria-expanded", "false"));
    panels.forEach((panel) => {
      panel.hidden = true;
    });
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const name = trigger.dataset.dropdownTrigger;
      const panel = document.querySelector(`[data-dropdown-panel="${name}"]`);
      if (!panel) return;

      const isOpen = !panel.hidden;
      closeAll();
      if (!isOpen) {
        panel.hidden = false;
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener("click", closeAll);

  document.querySelectorAll("[data-address-id]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const label = button.dataset.addressLabel;
      const textEl = document.querySelector("[data-address-text]");
      if (textEl) textEl.textContent = label;

      document.querySelectorAll("[data-address-id]").forEach((entry) => {
        entry.classList.toggle("app-header__dropdown-item--active", entry === button);
      });

      closeAll();
    });
  });

  document.querySelectorAll("[data-account-item]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      if (item.dataset.disabled === "true" || item.dataset.accountItem === "logout") {
        showToast("Funcionalidade disponível em breve no mockup.");
      }
      closeAll();
    });
  });
}

function bindSidebarToggle() {
  const sidebar = document.querySelector("[data-sidebar]");
  const toggleBtns = document.querySelectorAll("[data-mobile-sidebar-toggle]");
  if (!sidebar || !toggleBtns.length) return;

  toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
      if (isDrawerViewport()) {
        const isOpen = document.documentElement.dataset.drawerOpen === "true";
        setDrawerOpen(!isOpen);
      }
    });
  });
}

function bindSidebarResponsive() {
  const sidebar = document.querySelector("[data-sidebar]");
  const overlay = document.querySelector("[data-sidebar-overlay]");

  window.addEventListener("resize", applySidebarState);
  overlay?.addEventListener("click", () => setDrawerOpen(false));

  sidebar?.querySelectorAll("a[href]").forEach((link) => {
    link.addEventListener("click", () => {
      if (isDrawerViewport()) setDrawerOpen(false);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isDrawerViewport()) setDrawerOpen(false);
  });
}

function ensureSidebarOverlay() {
  if (document.querySelector("[data-sidebar-overlay]")) return;
  const overlay = document.createElement("button");
  overlay.type = "button";
  overlay.className = "sidebar-overlay";
  overlay.dataset.sidebarOverlay = "";
  overlay.setAttribute("aria-label", "Fechar menu");
  document.body.appendChild(overlay);
}

function applySidebarState() {
  const sidebar = document.querySelector("[data-sidebar]");
  if (!sidebar) return;

  if (isDrawerViewport()) {
    document.documentElement.dataset.sidebar = "drawer";
    updateSidebarToggles();
    return;
  }

  document.documentElement.dataset.sidebar = "expanded";
  delete document.documentElement.dataset.drawerOpen;
  updateSidebarToggles();
}

function setDrawerOpen(isOpen) {
  if (!isDrawerViewport()) return;
  document.documentElement.dataset.sidebar = "drawer";
  document.documentElement.dataset.drawerOpen = isOpen ? "true" : "false";
  updateSidebarToggles();
}

function updateSidebarToggles() {
  const isDrawerOpen = document.documentElement.dataset.drawerOpen === "true";

  document.querySelectorAll("[data-mobile-sidebar-toggle]").forEach((button) => {
    button.innerHTML = icon(isDrawerOpen ? "x" : "menu", { size: 20, strokeWidth: 1.75 });
    button.setAttribute("aria-label", isDrawerOpen ? "Fechar menu" : "Abrir menu");
    button.title = isDrawerOpen ? "Fechar menu" : "Abrir menu";
    button.setAttribute("aria-expanded", isDrawerOpen ? "true" : "false");
  });
}

function isDrawerViewport() {
  return window.innerWidth < DRAWER_BP;
}

export function renderEconomyPanel(container, { title, markets: marketList, savingsAmount, variant = "mobile" }) {
  if (!container) return;

  const isDesktop = variant === "desktop";
  const savingsText = isDesktop
    ? `Você economiza ${formatCurrency(Math.round(savingsAmount))}`
    : `Você economiza até ${formatCurrency(savingsAmount)}`;
  const footerIcon = isDesktop ? icon("leaf", { size: 16, strokeWidth: 2 }) : "";

  container.innerHTML = `
    <div class="economy-panel__header">${title}</div>
    <ul class="economy-panel__list">
      ${marketList
        .map((entry) => {
          const marketData = markets.find((market) => market.id === entry.id);
          const logoMarkup = marketData?.logo
            ? `<img src="${marketData.logo}" alt="${entry.name}" class="economy-panel__logo" />`
            : `<span class="market-dot" style="background:${entry.color}"></span>`;
          return `
        <li class="economy-panel__item${entry.highlight ? " economy-panel__item--highlight highlight-better-price" : ""}">
          ${logoMarkup}
          <span>${entry.name}</span>
          <strong>${formatCurrency(entry.total)}</strong>
        </li>
      `;
        })
        .join("")}
    </ul>
    <div class="economy-panel__footer${isDesktop ? " economy-panel__footer--highlight" : ""}">
      ${footerIcon}
      <span>${savingsText}</span>
    </div>
  `;
}

export function getQueryParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

export function renderEmptyState(container, { title, description, action }) {
  if (!container) return;
  container.innerHTML = emptyStateMarkup({ title, description, action });
}

export function emptyStateMarkup({ title, description, action, icon: iconMarkup = "", variant = "default" }) {
  const classes = ["empty-state"].concat(variant !== "default" ? [`empty-state--${variant}`] : []).join(" ");
  return `
    <div class="${classes}">
      ${iconMarkup ? `<span class="empty-state__icon">${iconMarkup}</span>` : ""}
      <h3>${title}</h3>
      <p>${description}</p>
      ${action ? `<a class="btn-primary" href="${action.href}">${action.label}</a>` : ""}
    </div>
  `;
}

export function statusChip(label, variant = "positive") {
  return `<span class="status-chip ${variant}">${label}</span>`;
}

export function productCell({ icon: productIcon = "", title, meta = "", compact = false, plainIcon = false }) {
  const classes = ["product-cell"].concat(compact ? ["product-cell--compact"] : []).join(" ");
  const iconClasses = ["product-cell__icon"].concat(plainIcon ? ["product-cell__icon--plain"] : []).join(" ");
  return `
    <div class="${classes}">
      ${productIcon ? `<span class="${iconClasses}">${productIcon}</span>` : ""}
      <div>
        <strong>${title}</strong>
        ${meta ? `<span class="product-cell__meta">${meta}</span>` : ""}
      </div>
    </div>
  `;
}

export function productsTableMarkup({ headers, rows, footer = "", wrap = true }) {
  const headerMarkup = headers
    .map((header) => {
      if (typeof header === "string") return `<th>${header}</th>`;
      return `<th ${header.attrs ?? ""}>${header.label}</th>`;
    })
    .join("");
  const table = `
      <table class="market-table products-table">
        <thead>
          <tr>${headerMarkup}</tr>
        </thead>
        <tbody>
          ${rows.join("")}
        </tbody>
        ${footer}
      </table>
  `;

  if (!wrap) return table;

  return `
    <div class="market-table-wrap">
      ${table}
    </div>
  `;
}
