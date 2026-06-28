import { compareCart, markets, priceTrendInsights, productAlerts, products } from "./mock-data.js";

export * from "./mock-data.js";

const demoCartIds = products.slice(0, 18).map((product) => product.id);
const demoComparison = compareCart(demoCartIds);
const maxDemoTotal = Math.max(...demoComparison.map((entry) => entry.total));
const sortedDemoMarkets = [...demoComparison].sort((a, b) => a.total - b.total);

export const homeEconomyMarkets = sortedDemoMarkets.slice(0, 3).map((entry, index) => ({
  id: entry.marketId,
  name: entry.marketName,
  total: entry.total,
  color: ["#0B7A34", "#E85D04", "#004E9A"][index],
  highlight: index === 0
}));

export const homeEconomySavings = Number((maxDemoTotal - sortedDemoMarkets[0].total).toFixed(2));

export const deliveryAddress = [
  { id: "home", label: "Rua das Flores, 123 - São Paulo, SP", isDefault: true },
  { id: "work", label: "Av. Paulista, 1000 - São Paulo, SP", isDefault: false },
  { id: "other", label: "Rua Augusta, 500 - São Paulo, SP", isDefault: false }
];

export const notifications = [
  {
    id: "promo",
    title: "Promoção",
    message: "Coca-Cola 2L com preço de clube no Pão de Açúcar esta semana.",
    time: "Há 2h",
    read: false,
    type: "promo"
  },
  {
    id: "price-alert",
    title: "Alerta de preço",
    message: "Óleo de Soja Liza caiu no Assaí Atacadista.",
    time: "Há 5h",
    read: false,
    type: "price"
  },
  {
    id: "system",
    title: "Aviso do sistema",
    message: "Nova versão do ComparaAqui disponível com dados por mercado.",
    time: "Ontem",
    read: true,
    type: "system"
  },
  {
    id: "purchase",
    title: "Atualização de compra",
    message: "Sua lista foi comparada em 5 mercados. Confira a melhor oferta.",
    time: "Há 1 dia",
    read: false,
    type: "purchase"
  }
];

export const accountMenuItems = [
  { id: "profile", label: "Perfil", href: "profile-account.html", iconName: "user" },
  { id: "logout", label: "Sair", iconName: "log-out" }
];

export const userProfile = {
  name: "Juliana",
  email: "juliana@email.com",
  avatarInitials: "J",
  avatarUrl:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80"
};

export const monthlySummary = {
  savings: 430,
  purchases: 5,
  healthyPercent: 65,
  listsCreated: 5,
  favoriteMarket: "Pão de Açúcar",
  topCategory: "Hortifruti",
  averageTicket: sortedDemoMarkets[0].total
};

export const howItWorksSteps = [
  {
    title: "Escolha produtos",
    icon: "shopping-cart",
    description: "Monte sua lista de compras de forma rápida e fácil"
  },
  {
    title: "Compare mercados",
    icon: "bar-chart-2",
    description: "Veja preços e disponibilidade nos mercados cadastrados"
  },
  {
    title: "Economize na compra",
    icon: "circle-check",
    description: "Escolha o melhor mercado e economize tempo e dinheiro"
  }
];

export const homePurchaseHistory = [
  { label: "Compra de domingo", date: "01/06/2026", total: sortedDemoMarkets[0].total, savings: homeEconomySavings },
  { label: "Compra da semana", date: "25/05/2026", total: sortedDemoMarkets[1].total, savings: sortedDemoMarkets[1].savings },
  { label: "Compra completa", date: "18/05/2026", total: sortedDemoMarkets[2].total, savings: sortedDemoMarkets[2].savings }
];

export const homePreferences = [
  { id: "radius", label: "Raio de busca", icon: "map-pin" },
  { id: "brands", label: "Marcas favoritas", icon: "heart" },
  { id: "excluded", label: "Mercados excluídos", icon: "ban" },
  { id: "priority", label: "Prioridade", icon: "sliders-horizontal" }
];

export const homeProductAlerts = productAlerts;

export const homeHelpItems = [
  { label: "Compare preços em diferentes mercados", icon: "git-compare" },
  { label: "Descubra onde sua compra sai mais barata", icon: "piggy-bank" },
  { label: "Veja itens indisponíveis antes de decidir", icon: "circle-check" },
  { label: "Encontre alternativas mais econômicas", icon: "replace" }
];

export const homePriceTrends = priceTrendInsights;

export const homeCategories = [
  { id: "hortifruti", label: "Hortifruti", icon: "apple" },
  { id: "acougue", label: "Açougue", icon: "beef" },
  { id: "bebidas", label: "Bebidas", icon: "bottle" },
  { id: "higiene", label: "Higiene", icon: "soap-dispenser" },
  { id: "limpeza", label: "Limpeza", icon: "spray-can" },
  { id: "congelados", label: "Congelados", icon: "snowflake" },
  { id: "padaria", label: "Padaria", icon: "croissant" },
  { id: "doces", label: "Doces", icon: "candy" }
];
