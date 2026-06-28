const now = "2026-06-09T12:00:00.000Z";
const collectedAt = "2026-06-09T09:30:00.000Z";

const categoryMeta = {
  hortifruti: ["Hortifruti", "🍎"],
  acougue: ["Açougue", "🥩"],
  bebidas: ["Bebidas", "🥤"],
  higiene: ["Higiene", "🧴"],
  limpeza: ["Limpeza", "🧽"],
  doces: ["Doces", "🍫"],
  congelados: ["Congelados", "🧊"],
  padaria: ["Padaria", "🥖"],
  mercearia: ["Mercearia", "🍚"],
  laticinios: ["Laticínios", "🥛"]
};

const iconsByCategory = {
  hortifruti: "🍎",
  acougue: "🥩",
  bebidas: "🥤",
  higiene: "🧴",
  limpeza: "🧽",
  doces: "🍫",
  congelados: "🧊",
  padaria: "🥖",
  mercearia: "🍚",
  laticinios: "🥛"
};

export const categories = [
  { id: "todos", label: "Todos", icon: "🛒" },
  ...Object.entries(categoryMeta).map(([id, [label, icon]]) => ({ id, label, icon }))
];

export const brands = [
  { id: "coca-cola", name: "Coca-Cola", slug: "coca-cola" },
  { id: "pepsi", name: "Pepsi", slug: "pepsi" },
  { id: "tio-joao", name: "Tio João", slug: "tio-joao" },
  { id: "camil", name: "Camil", slug: "camil" },
  { id: "dove", name: "Dove", slug: "dove" },
  { id: "sadia", name: "Sadia", slug: "sadia" },
  { id: "perdigao", name: "Perdigão", slug: "perdigao" },
  { id: "aurora", name: "Aurora", slug: "aurora" },
  { id: "italac", name: "Italac", slug: "italac" },
  { id: "pilao", name: "Pilão", slug: "pilao" },
  { id: "liza", name: "Liza", slug: "liza" },
  { id: "neve", name: "Neve", slug: "neve" },
  { id: "ype", name: "Ypê", slug: "ype" },
  { id: "comfort", name: "Comfort", slug: "comfort" },
  { id: "wickbold", name: "Wickbold", slug: "wickbold" },
  { id: "nestle", name: "Nestlé", slug: "nestle" },
  { id: "lacta", name: "Lacta", slug: "lacta" },
  { id: "renata", name: "Renata", slug: "renata" },
  { id: "friboi", name: "Friboi", slug: "friboi" },
  { id: "kibon", name: "Kibon", slug: "kibon" }
];

export const markets = [
  {
    id: "pao-de-acucar",
    name: "Pão de Açúcar",
    slug: "pao-de-acucar",
    logo: "./assets/logos/markets/pda.png",
    facade: "./assets/logos/facade/pda.jpg",
    distance: "2,1 km",
    rating: 4.8,
    address: "Praça Panamericana - Pinheiros, São Paulo, SP",
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "carrefour",
    name: "Carrefour",
    slug: "carrefour",
    logo: "./assets/logos/markets/carrefour.png",
    facade: "./assets/logos/facade/carrefour.jpg",
    distance: "3,4 km",
    rating: 4.6,
    address: "Marginal Pinheiros, 8000 - São Paulo, SP",
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "assai",
    name: "Assaí Atacadista",
    slug: "assai-atacadista",
    logo: "./assets/logos/markets/assai.jpg",
    facade: "./assets/logos/facade/assai.jpg",
    distance: "4,9 km",
    rating: 4.3,
    address: "Av. Anhanguera, 3400 - São Paulo, SP",
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "atacadao",
    name: "Atacadão",
    slug: "atacadao",
    logo: "./assets/logos/markets/atacadao.jpg",
    facade: "./assets/logos/facade/atacadao.jpg",
    distance: "5,2 km",
    rating: 4.1,
    address: "Av. Marquês de São Vicente, 1200 - Barra Funda, SP",
    active: true,
    createdAt: now,
    updatedAt: now
  },
  {
    id: "dia",
    name: "Dia",
    slug: "dia",
    logo: "./assets/logos/markets/dia.jpg",
    facade: "./assets/logos/facade/dia.jpg",
    distance: "1,9 km",
    rating: 4.0,
    address: "Rua Domingos de Morais, 2100 - Vila Mariana, SP",
    active: true,
    createdAt: now,
    updatedAt: now
  }
];

const productSeed = [
  ["coca-cola-original-200ml", "Coca-Cola Original Garrafa 200ml", "coca-cola-original-garrafa-200ml", "Coca-Cola", "bebidas", "Refrigerantes", "ml", 200, "7894900011517", "cola-original-individual"],
  ["coca-cola-zero-350ml", "Coca-Cola Zero Lata 350ml", "coca-cola-zero-lata-350ml", "Coca-Cola", "bebidas", "Refrigerantes", "ml", 350, "7894900700046", "cola-zero-lata"],
  ["coca-cola-original-350ml", "Coca-Cola Original Lata 350ml", "coca-cola-original-lata-350ml", "Coca-Cola", "bebidas", "Refrigerantes", "ml", 350, "7894900011609", "cola-original-lata"],
  ["coca-cola-original-600ml", "Coca-Cola Original Garrafa 600ml", "coca-cola-original-garrafa-600ml", "Coca-Cola", "bebidas", "Refrigerantes", "ml", 600, "7894900010015", "cola-original-individual"],
  ["coca-cola-original-1l", "Coca-Cola Original Garrafa 1L", "coca-cola-original-garrafa-1l", "Coca-Cola", "bebidas", "Refrigerantes", "L", 1, "7894900010398", "cola-original-familiar"],
  ["coca-cola-original-15l", "Coca-Cola Original Garrafa 1.5L", "coca-cola-original-garrafa-15l", "Coca-Cola", "bebidas", "Refrigerantes", "L", 1.5, "7894900010411", "cola-original-familiar"],
  ["coca-cola-original-2l", "Coca-Cola Original Garrafa 2L", "coca-cola-original-garrafa-2l", "Coca-Cola", "bebidas", "Refrigerantes", "L", 2, "7894900011753", "cola-original-familiar"],
  ["pepsi-cola-lata-350ml", "Pepsi Cola Lata 350ml", "pepsi-cola-lata-350ml", "Pepsi", "bebidas", "Refrigerantes", "ml", 350, "7892840813011", "cola-original-lata"],
  ["pepsi-black-lata-350ml", "Pepsi Black Lata 350ml", "pepsi-black-lata-350ml", "Pepsi", "bebidas", "Refrigerantes", "ml", 350, "7892840813028", "cola-zero-lata"],
  ["pepsi-cola-2l", "Pepsi Cola Garrafa 2L", "pepsi-cola-garrafa-2l", "Pepsi", "bebidas", "Refrigerantes", "L", 2, "7892840813059", "cola-original-familiar"],
  ["arroz-tio-joao-5kg", "Arroz Branco Tio João 5kg", "arroz-branco-tio-joao-5kg", "Tio João", "mercearia", "Arroz", "kg", 5, "7893500020515", "arroz-branco-5kg"],
  ["arroz-camil-5kg", "Arroz Camil 5kg", "arroz-camil-5kg", "Camil", "mercearia", "Arroz", "kg", 5, "7896006711017", "arroz-branco-5kg"],
  ["feijao-carioca-camil-1kg", "Feijão Carioca Camil 1kg", "feijao-carioca-camil-1kg", "Camil", "mercearia", "Feijão", "kg", 1, "7896006716111"],
  ["sabonete-dove-original-90g", "Sabonete Dove Original 90g", "sabonete-dove-original-90g", "Dove", "higiene", "Sabonetes", "g", 90, "7891150034097"],
  ["pizza-congelada-sadia-460g", "Pizza Congelada Frango C Catupiry Sadia 460g", "pizza-congelada-frango-catupiry-sadia-460g", "Sadia", "congelados", "Pizzas", "g", 460, "7891515520326", "pizza-frango-requeijao"],
  ["pizza-frango-perdigao-420g", "Pizza Congelada Frango Perdigão 420g", "pizza-congelada-frango-perdigao-420g", "Perdigão", "congelados", "Pizzas", "g", 420, "7891515520333", "pizza-frango-requeijao"],
  ["pizza-frango-requeijao-aurora-300g", "Pizza Congelada Frango C/ Requeijão Aurora 300g", "pizza-congelada-frango-requeijao-aurora-300g", "Aurora", "congelados", "Pizzas", "g", 300, "7891167010114", "pizza-frango-requeijao"],
  ["leite-integral-italac-1l", "Leite Integral Italac 1L", "leite-integral-italac-1l", "Italac", "laticinios", "Leites", "L", 1, "7898080640013"],
  ["cafe-pilao-500g", "Café Pilão Tradicional 500g", "cafe-pilao-tradicional-500g", "Pilão", "mercearia", "Cafés", "g", 500, "7896089012711"],
  ["oleo-soja-liza-900ml", "Óleo de Soja Liza 900ml", "oleo-de-soja-liza-900ml", "Liza", "mercearia", "Óleos", "ml", 900, "7892300000639"],
  ["macarrao-renata-500g", "Macarrão Renata Espaguete 500g", "macarrao-renata-espaguete-500g", "Renata", "mercearia", "Massas", "g", 500, "7896022200014"],
  ["papel-neve-12un", "Papel Higiênico Neve Folha Dupla 12un", "papel-higienico-neve-folha-dupla-12un", "Neve", "higiene", "Papel higiênico", "un", 12, "7891172437012"],
  ["detergente-ype-neutro-500ml", "Detergente Ypê Neutro 500ml", "detergente-ype-neutro-500ml", "Ypê", "limpeza", "Detergentes", "ml", 500, "7896098900207"],
  ["amaciante-comfort-1l", "Amaciante Comfort Concentrado 1L", "amaciante-comfort-concentrado-1l", "Comfort", "limpeza", "Amaciantes", "L", 1, "7891150074123"],
  ["pao-integral-wickbold-500g", "Pão Integral Wickbold 500g", "pao-integral-wickbold-500g", "Wickbold", "padaria", "Pães", "g", 500, "7896066300015"],
  ["iogurte-grego-nestle-100g", "Iogurte Grego Nestlé 100g", "iogurte-grego-nestle-100g", "Nestlé", "laticinios", "Iogurtes", "g", 100, "7891000100103"],
  ["sorvete-kibon-napolitano-15l", "Sorvete Kibon Napolitano 1.5L", "sorvete-kibon-napolitano-15l", "Kibon", "congelados", "Sorvetes", "L", 1.5, "7891150028157"],
  ["suco-laranja-dobem-1l", "Suco de Laranja Integral Do Bem 1L", "suco-de-laranja-integral-do-bem-1l", "Do Bem", "bebidas", "Sucos", "L", 1, "7898959793017"],
  ["biscoito-passatempo-130g", "Biscoito Passatempo Chocolate 130g", "biscoito-passatempo-chocolate-130g", "Nestlé", "doces", "Biscoitos", "g", 130, "7891000248799"],
  ["chocolate-lacta-90g", "Chocolate Lacta Ao Leite 90g", "chocolate-lacta-ao-leite-90g", "Lacta", "doces", "Chocolates", "g", 90, "7622210578248"],
  ["banana-prata-1kg", "Banana Prata 1kg", "banana-prata-1kg", "Orgânicos Brasil", "hortifruti", "Frutas", "kg", 1, ""],
  ["alface-crespa-un", "Alface Crespa Unidade", "alface-crespa-unidade", "Horta Verde", "hortifruti", "Verduras", "un", 1, ""],
  ["contra-file-friboi-1kg", "Contra Filé Bovino Friboi 1kg", "contra-file-bovino-friboi-1kg", "Friboi", "acougue", "Bovinos", "kg", 1, ""]
];

const productImagePaths = {};

const productRecords = productSeed.map(([id, name, slug, brand, category, subcategory, unit, quantity, ean, similarGroup = null]) => ({
  id,
  name,
  slug,
  brand,
  category,
  subcategory,
  unit,
  quantity,
  ean,
  similarGroup,
  image: productImagePaths[id] ?? "",
  icon: iconsByCategory[category],
  active: true,
  available: true,
  createdAt: now,
  updatedAt: now
}));

const priceMatrix = {
  "coca-cola-original-200ml": [2.49, 2.69, 2.39, 2.45, 2.59],
  "coca-cola-zero-350ml": [3.89, 3.79, 3.49, 3.59, null],
  "coca-cola-original-350ml": [3.79, 3.69, 3.39, 3.49, 3.89],
  "coca-cola-original-600ml": [5.49, 5.29, 4.99, 5.09, 5.59],
  "coca-cola-original-1l": [6.99, 6.79, 6.49, null, 7.19],
  "coca-cola-original-15l": [8.49, 8.29, 7.89, 7.99, null],
  "coca-cola-original-2l": [9.49, 9.19, 8.59, 8.79, 9.89],
  "pepsi-cola-lata-350ml": [3.59, 3.49, 3.19, 3.29, 3.69],
  "pepsi-black-lata-350ml": [3.69, 3.59, 3.29, 3.39, 3.79],
  "pepsi-cola-2l": [8.99, 8.69, 7.99, 8.19, 9.29],
  "arroz-tio-joao-5kg": [25.9, 24.99, 22.9, 23.49, 26.49],
  "arroz-camil-5kg": [25.49, 22.87, 23.29, 23.99, 24.49],
  "feijao-carioca-camil-1kg": [8.99, 8.49, 7.89, 7.99, 8.79],
  "sabonete-dove-original-90g": [4.29, 4.09, null, 3.89, 4.49],
  "pizza-congelada-sadia-460g": [19.9, 18.99, 17.49, null, null],
  "pizza-frango-perdigao-420g": [18.9, 17.99, 16.99, null, null],
  "pizza-frango-requeijao-aurora-300g": [15.9, 15.49, 14.79, null, null],
  "leite-integral-italac-1l": [4.99, 4.79, 4.59, 4.69, 5.09],
  "cafe-pilao-500g": [19.9, 18.9, 17.99, 18.49, 20.49],
  "oleo-soja-liza-900ml": [6.89, 6.49, 5.99, 6.19, null],
  "macarrao-renata-500g": [4.99, 4.69, 3.99, 4.29, 5.49],
  "papel-neve-12un": [24.9, 23.9, 22.49, 22.99, 25.9],
  "detergente-ype-neutro-500ml": [3.19, 2.99, 2.69, 2.79, 3.09],
  "amaciante-comfort-1l": [15.9, 14.99, 13.49, 13.99, null],
  "pao-integral-wickbold-500g": [10.9, 10.49, null, 9.99, 10.99],
  "iogurte-grego-nestle-100g": [4.49, 4.19, null, null, 4.29],
  "sorvete-kibon-napolitano-15l": [27.9, 25.9, 23.9, null, null],
  "suco-laranja-dobem-1l": [12.9, 12.49, 11.9, null, 13.29],
  "biscoito-passatempo-130g": [3.79, 3.59, 3.29, 3.39, 3.69],
  "chocolate-lacta-90g": [6.49, 5.99, 5.59, 5.69, 6.29],
  "banana-prata-1kg": [6.49, 5.99, 5.49, 5.59, 6.19],
  "alface-crespa-un": [4.49, 3.99, null, 3.79, 4.29],
  "contra-file-friboi-1kg": [48.9, 46.9, 42.9, 43.9, null]
};

const marketIds = markets.map((market) => market.id);

const scrapingCycleSeed = [
  ["scraping-cycle-2026-06-01-0815", 1, "2026-06-01T08:15:00.000Z", "2026-06-01T08:42:00.000Z"],
  ["scraping-cycle-2026-06-08-1230", 2, "2026-06-08T12:30:00.000Z", "2026-06-08T12:58:00.000Z"],
  ["scraping-cycle-2026-06-15-1745", 3, "2026-06-15T17:45:00.000Z", "2026-06-15T18:13:00.000Z"],
  ["scraping-cycle-2026-06-22-2130", 4, "2026-06-22T21:30:00.000Z", "2026-06-22T21:59:00.000Z"]
];

const marketRunOffsets = {
  "pao-de-acucar": { start: 1, duration: 7, unavailable: 1, sourceUrl: "https://www.paodeacucar.com" },
  carrefour: { start: 3, duration: 6, unavailable: 2, sourceUrl: "https://www.carrefour.com.br" },
  assai: { start: 9, duration: 5, unavailable: 3, sourceUrl: "https://www.assai.com.br" },
  atacadao: { start: 15, duration: 7, unavailable: 4, sourceUrl: "https://www.atacadao.com.br" },
  dia: { start: 22, duration: 5, unavailable: 2, sourceUrl: "https://www.dia.com.br" }
};

function addMinutes(isoDate, minutes) {
  return new Date(new Date(isoDate).getTime() + minutes * 60000).toISOString();
}

function cycleSlug(cycle) {
  return cycle.id.replace("scraping-cycle-", "");
}

export const scrapingCycles = scrapingCycleSeed.map(([id, cycleNumber, startedAt, finishedAt]) => ({
  id,
  cycleNumber,
  startedAt,
  finishedAt,
  status: "completed",
  scope: "all-markets",
  marketIds
}));

export const marketScrapingRuns = scrapingCycles.flatMap((cycle) =>
  marketIds.map((marketId) => {
    const offset = marketRunOffsets[marketId];
    return {
      id: `market-run-${cycleSlug(cycle)}-${marketId}`,
      scrapingCycleId: cycle.id,
      marketId,
      startedAt: addMinutes(cycle.startedAt, offset.start),
      finishedAt: addMinutes(cycle.startedAt, offset.start + offset.duration),
      status: "completed",
      totalProductsFound: productRecords.length - offset.unavailable,
      totalProductsUnavailable: offset.unavailable,
      sourceUrl: offset.sourceUrl
    };
  })
);

const externalNames = {
  "pao-de-acucar": (p) => p.name.replace("Coca-Cola Zero Lata 350ml", "Refrigerante sem Açúcar Coca-Cola Lata 350ml"),
  carrefour: (p) => p.name.replace("Coca-Cola", "Coca Cola"),
  assai: (p) => p.name.replace("Coca-Cola Zero Lata 350ml", "Refrigerante Coca-Cola Zero 350ml"),
  atacadao: (p) => `${p.brand} ${p.subcategory} ${p.quantity}${p.unit}`,
  dia: (p) => p.name.replace("Garrafa", "PET")
};

export const marketProducts = productRecords.flatMap((product) =>
  marketIds.map((marketId) => ({
    id: `${marketId}-${product.id}`,
    productId: product.id,
    marketId,
    externalId: `${marketId.toUpperCase()}-${product.ean || product.id}`,
    externalName: externalNames[marketId](product),
    externalUrl: `https://www.comparaaqui.local/${marketId}/produto/${product.slug}`,
    externalImage: product.image,
    active: priceMatrix[product.id]?.[marketIds.indexOf(marketId)] !== null,
    collectedAt
  }))
);

export const prices = marketProducts.map((marketProduct) => {
  const marketIndex = marketIds.indexOf(marketProduct.marketId);
  const regularPrice = priceMatrix[marketProduct.productId][marketIndex];
  const hasPromotion = regularPrice !== null && ["assai", "atacadao"].includes(marketProduct.marketId) && regularPrice < priceMatrix[marketProduct.productId][0];
  const hasClub = regularPrice !== null && marketProduct.marketId === "pao-de-acucar" && marketProduct.productId.includes("coca-cola");
  return {
    id: `price-${marketProduct.id}`,
    marketProductId: marketProduct.id,
    productId: marketProduct.productId,
    marketId: marketProduct.marketId,
    regularPrice,
    clubPrice: hasClub ? Number((regularPrice * 0.92).toFixed(2)) : null,
    promotionalPrice: hasPromotion ? Number((regularPrice * 0.95).toFixed(2)) : null,
    hasPromotion,
    promotionDescription: hasPromotion ? "Oferta válida enquanto durarem os estoques" : hasClub ? "Preço Cliente Mais" : null,
    available: regularPrice !== null,
    collectedAt
  };
});

function effectivePrice(price) {
  if (!price?.available) return null;
  return price.promotionalPrice ?? price.clubPrice ?? price.regularPrice;
}

export function getVariationPercent(oldPrice, currentPrice) {
  if (!oldPrice || !currentPrice) return 0;

  return Number((((currentPrice - oldPrice) / oldPrice) * 100).toFixed(2));
}

export function getVariationDirection(variationPercent) {
  if (variationPercent > 0) return "increase";
  if (variationPercent < 0) return "decrease";
  return "stable";
}

export function getProductAlertClass(direction) {
  if (direction === "increase") {
    return "panel-card side-panel__section product-alert-card highlight-increase";
  }

  if (direction === "decrease") {
    return "panel-card side-panel__section product-alert-card highlight-decrease";
  }

  return "panel-card side-panel__section product-alert-card";
}

const historicalPriceMatrix = {
  "arroz-camil-5kg": {
    "pao-de-acucar": [26.19, 25.69, 25.19, 25.49],
    carrefour: [25.99, 24.79, 23.6, 22.87],
    assai: [24.89, 24.1, 23.7, 23.29],
    atacadao: [25.49, 24.99, 24.39, 23.99],
    dia: [26.49, 25.89, 24.99, 24.49]
  },
  "oleo-soja-liza-900ml": {
    "pao-de-acucar": [6.0, 6.1, 6.2, 6.3],
    carrefour: [6.19, 6.29, 6.39, 6.49],
    assai: [5.79, 5.89, 5.95, 5.99],
    atacadao: [5.99, 6.09, 6.15, 6.19],
    dia: [6.49, null, null, null]
  },
  "cafe-pilao-500g": {
    "pao-de-acucar": [20.49, 20.1, 19.99, 19.9],
    carrefour: [19.99, 19.49, 19.1, 18.9],
    assai: [19.49, 18.9, 18.3, 17.93],
    atacadao: [19.79, 19.35, 18.99, 18.49],
    dia: [21.49, 20.99, 20.69, 20.49]
  },
  "leite-integral-italac-1l": {
    "pao-de-acucar": [5.19, 5.09, 4.99, 4.99],
    carrefour: [4.99, 4.89, 4.79, 4.79],
    assai: [4.79, 4.69, 4.59, 4.59],
    atacadao: [4.89, 4.79, 4.69, 4.69],
    dia: [5.09, 4.99, 4.89, 5.09]
  },
  "macarrao-renata-500g": {
    "pao-de-acucar": [5.29, 5.19, 5.09, 4.99],
    carrefour: [4.99, 4.89, 4.79, 4.69],
    assai: [4.49, 4.29, 4.09, 3.99],
    atacadao: [4.69, 4.59, 4.39, 4.29],
    dia: [5.69, 5.59, 5.49, 5.49]
  }
};

const historicalPromotions = {
  "leite-integral-italac-1l": {
    dia: [null, null, null, 4.39]
  }
};

const historyProductIds = Object.keys(historicalPriceMatrix);

export const scrapedPriceHistory = historyProductIds.flatMap((productId) => {
  const product = productRecords.find((item) => item.id === productId);
  return marketIds.map((marketId) => {
    const marketProduct = marketProducts.find((item) => item.productId === productId && item.marketId === marketId);
    const regularPrices = historicalPriceMatrix[productId][marketId];
    const promotionalPrices = historicalPromotions[productId]?.[marketId] ?? [];
    return {
      productId,
      marketId,
      marketProductId: marketProduct.id,
      externalId: marketProduct.externalId,
      externalName: marketProduct.externalName,
      externalUrl: marketProduct.externalUrl,
      externalImage: marketProduct.externalImage,
      snapshots: scrapingCycles.map((cycle, index) => {
        const regularPrice = regularPrices[index];
        const promotionalPrice = promotionalPrices[index] ?? null;
        const snapshotPrice = {
          available: regularPrice !== null,
          regularPrice,
          promotionalPrice,
          clubPrice: null
        };
        const runOffset = marketRunOffsets[marketId];
        return {
          id: `snapshot-${marketId}-${product.id}-${cycleSlug(cycle)}`,
          scrapingCycleId: cycle.id,
          marketScrapingRunId: `market-run-${cycleSlug(cycle)}-${marketId}`,
          collectedAt: addMinutes(cycle.startedAt, runOffset.start + 3),
          regularPrice,
          promotionalPrice,
          clubPrice: null,
          effectivePrice: effectivePrice(snapshotPrice),
          available: regularPrice !== null
        };
      })
    };
  });
});

function getHistorySnapshot(productId, marketId, index) {
  return scrapedPriceHistory
    .find((item) => item.productId === productId && item.marketId === marketId)
    ?.snapshots[index];
}

function makeProductAlert({
  id,
  productId,
  marketId,
  title = "Alerta Produto",
  message,
  currentIndex,
  accentColor,
  fallbackIcon
}) {
  const product = productRecords.find((item) => item.id === productId);
  const market = getMarketById(marketId);
  const marketProduct = getMarketProductById(`${marketId}-${productId}`);
  const baseline = getHistorySnapshot(productId, marketId, 0);
  const current = getHistorySnapshot(productId, marketId, 3);
  const variationPercent = getVariationPercent(baseline?.effectivePrice, current?.effectivePrice);
  const variationDirection = getVariationDirection(variationPercent);

  return {
    id,
    productId,
    marketId,
    marketProductId: marketProduct.id,
    productName: product.name,
    productImage: product.image,
    fallbackIcon,
    marketName: market.name,
    baselineScrapingCycleId: baseline.scrapingCycleId,
    currentScrapingCycleId: current.scrapingCycleId,
    baselineCollectedAt: baseline.collectedAt,
    currentCollectedAt: current.collectedAt,
    baselinePrice: baseline.effectivePrice,
    currentPrice: current.effectivePrice,
    variationPercent,
    variationDirection,
    title,
    message,
    className: getProductAlertClass(variationDirection),
    accentColor,
    carousel: {
      currentIndex,
      totalItems: 3,
      showDots: true,
      showArrows: false
    }
  };
}

export const productAlerts = [
  makeProductAlert({
    id: "alert-arroz-camil-carrefour-drop-2026-06-22",
    productId: "arroz-camil-5kg",
    marketId: "carrefour",
    message: "Preço caiu 12% esta semana no Carrefour",
    currentIndex: 0,
    accentColor: "red",
    fallbackIcon: "🍚"
  }),
  makeProductAlert({
    id: "alert-oleo-liza-pao-de-acucar-increase-2026-06-22",
    productId: "oleo-soja-liza-900ml",
    marketId: "pao-de-acucar",
    message: "Preço subiu 5% nesta semana no Pão de Açúcar",
    currentIndex: 1,
    accentColor: "green",
    fallbackIcon: "🛢️"
  }),
  makeProductAlert({
    id: "alert-cafe-pilao-assai-drop-2026-06-22",
    productId: "cafe-pilao-500g",
    marketId: "assai",
    message: "Café Pilão Tradicional 500g caiu 8% em relação às últimas semanas",
    currentIndex: 2,
    accentColor: "red",
    fallbackIcon: "☕"
  })
];

export const priceTrendInsights = [
  {
    id: "trend-arroz-camil-carrefour",
    productId: "arroz-camil-5kg",
    marketId: "carrefour",
    productName: "Arroz Camil 5kg",
    marketName: "Carrefour",
    variationPercent: -12,
    variationDirection: "decrease",
    text: "Arroz caiu 12% esta semana no Carrefour",
    collectedAt: getHistorySnapshot("arroz-camil-5kg", "carrefour", 3).collectedAt
  },
  {
    id: "trend-oleo-liza-pao-de-acucar",
    productId: "oleo-soja-liza-900ml",
    marketId: "pao-de-acucar",
    productName: "Óleo de Soja Liza 900ml",
    marketName: "Pão de Açúcar",
    variationPercent: 5,
    variationDirection: "increase",
    text: "Óleo de Soja Liza 900ml subiu 5% nesta semana no Pão de Açúcar",
    collectedAt: getHistorySnapshot("oleo-soja-liza-900ml", "pao-de-acucar", 3).collectedAt
  },
  {
    id: "trend-cafe-pilao-assai",
    productId: "cafe-pilao-500g",
    marketId: "assai",
    productName: "Café Pilão Tradicional 500g",
    marketName: "Assaí Atacadista",
    variationPercent: -8,
    variationDirection: "decrease",
    text: "Café Pilão Tradicional 500g caiu 8% em relação às últimas semanas",
    collectedAt: getHistorySnapshot("cafe-pilao-500g", "assai", 3).collectedAt
  },
  {
    id: "trend-leite-italac-dia",
    productId: "leite-integral-italac-1l",
    marketId: "dia",
    productName: "Leite Integral Italac 1L",
    marketName: "Dia",
    variationPercent: getVariationPercent(5.09, 4.39),
    variationDirection: "decrease",
    text: "Leite integral Italac em oferta no Dia",
    collectedAt: getHistorySnapshot("leite-integral-italac-1l", "dia", 3).collectedAt
  }
];

function decorateProduct(product) {
  const bestPrice = getBestPriceByProductId(product.id);
  const firstPrice = prices.find((price) => price.productId === product.id && price.available);
  const tags = [];
  if (bestPrice?.hasPromotion) tags.push("Promoção");
  if (bestPrice?.clubPrice) tags.push("Clube");
  return {
    ...product,
    unit: `${product.quantity} ${product.unit}`,
    price: effectivePrice(firstPrice) ?? 0,
    promoPrice: bestPrice?.hasPromotion ? bestPrice.promotionalPrice : undefined,
    tags
  };
}

export const products = productRecords.map((product) => decorateProduct(product));

export function getProductById(productId) {
  const product = productRecords.find((item) => item.id === productId);
  return product ? decorateProduct(product) : undefined;
}

export function getMarketById(marketId) {
  return markets.find((market) => market.id === marketId);
}

export function getMarketProductById(marketProductId) {
  return marketProducts.find((marketProduct) => marketProduct.id === marketProductId);
}

export function getPricesByProductId(productId) {
  return prices.filter((price) => price.productId === productId);
}

export function getPricesByMarketId(marketId) {
  return prices.filter((price) => price.marketId === marketId);
}

export function getBestPriceByProductId(productId) {
  return getPricesByProductId(productId)
    .filter((price) => price.available)
    .sort((a, b) => effectivePrice(a) - effectivePrice(b))[0];
}

export function getSimilarProductsByProductId(productId) {
  const product = productRecords.find((item) => item.id === productId);
  if (!product?.similarGroup) return [];
  return productRecords
    .filter((item) => item.id !== productId && item.similarGroup === product.similarGroup)
    .map((item) => decorateProduct(item));
}

export function compareCart(productIds) {
  const items = productIds.map((entry) => (typeof entry === "string" ? { productId: entry, quantity: 1 } : entry));
  const summaries = markets.map((market) => {
    const productsSummary = items.map((item) => {
      const product = getProductById(item.productId);
      const price = prices.find((entry) => entry.productId === item.productId && entry.marketId === market.id);
      const unitPrice = effectivePrice(price);
      return {
        productId: item.productId,
        productName: product?.name ?? item.productId,
        quantity: item.quantity ?? 1,
        marketProductId: price?.marketProductId ?? null,
        available: Boolean(price?.available),
        unitPrice,
        total: unitPrice === null ? 0 : Number((unitPrice * (item.quantity ?? 1)).toFixed(2)),
        price
      };
    });
    const total = Number(productsSummary.reduce((sum, item) => sum + item.total, 0).toFixed(2));
    return {
      marketId: market.id,
      marketName: market.name,
      total,
      foundItems: productsSummary.filter((item) => item.available).length,
      unavailableItems: productsSummary.filter((item) => !item.available).length,
      savings: 0,
      products: productsSummary
    };
  });
  const maxTotal = Math.max(...summaries.map((summary) => summary.total));
  return summaries.map((summary) => ({
    ...summary,
    savings: Number((maxTotal - summary.total).toFixed(2))
  }));
}

export const marketProductAvailability = Object.fromEntries(
  markets.map((market) => {
    const marketPrices = getPricesByMarketId(market.id);
    return [
      market.id,
      {
        found: marketPrices.filter((price) => price.available).map((price) => price.productId),
        unavailable: marketPrices.filter((price) => !price.available).map((price) => price.productId),
        suggestions: [
          {
            originalId: "sabonete-dove-original-90g",
            suggested: { id: "sabonete-lux-85g", name: "Sabonete Lux Botanicals 85g", price: 3.29, icon: "🧼" },
            economy: 1
          },
          {
            originalId: "arroz-tio-joao-5kg",
            suggested: { id: "arroz-namorado-5kg", name: "Arroz Branco Namorado 5kg", price: 22.49, icon: "🍚" },
            economy: 3.41
          }
        ]
      }
    ];
  })
);

const marketMetrics = compareCart(productRecords.slice(0, 18).map((product) => product.id));
const marketBadges = {
  "pao-de-acucar": "Clube e sortimento",
  carrefour: "Mais próximo",
  assai: "Maior economia",
  atacadao: "Atacado",
  dia: "Mais conveniente"
};

markets.forEach((market) => {
  const metrics = marketMetrics.find((entry) => entry.marketId === market.id);
  market.total = metrics?.total ?? 0;
  market.savings = metrics?.savings ?? 0;
  market.foundItems = metrics?.foundItems ?? 0;
  market.unavailableItems = metrics?.unavailableItems ?? 0;
  market.badge = marketBadges[market.id] ?? "Oferta analisada";
});
