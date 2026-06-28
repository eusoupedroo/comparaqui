const STORAGE_KEY = "cpaMockupState_v1";

const defaultState = {
  list: [],
  selectedMarketId: null,
  favourites: []
};

function loadState() {
  if (typeof localStorage === "undefined") {
    return { ...defaultState };
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { ...defaultState };
    const parsed = JSON.parse(stored);
    return {
      ...defaultState,
      ...parsed,
      list: Array.isArray(parsed.list) ? parsed.list : []
    };
  } catch (error) {
    console.warn("Erro ao carregar estado, retomando padrão", error);
    return { ...defaultState };
  }
}

function saveState(state) {
  if (typeof localStorage === "undefined") {
    return;
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getState() {
  return loadState();
}

export function getShoppingList() {
  return loadState().list;
}

export function setItemQuantity(productId, quantity) {
  const state = loadState();
  const list = [...state.list];
  const index = list.findIndex((item) => item.productId === productId);

  if (quantity <= 0) {
    if (index !== -1) {
      list.splice(index, 1);
    }
  } else if (index === -1) {
    list.push({ productId, quantity, substitution: null });
  } else {
    list[index] = { ...list[index], quantity };
  }

  const newState = { ...state, list };
  saveState(newState);
  return newState.list;
}

export function incrementItem(productId) {
  const state = loadState();
  const current = state.list.find((item) => item.productId === productId);
  const nextQuantity = (current?.quantity ?? 0) + 1;
  return setItemQuantity(productId, nextQuantity);
}

export function decrementItem(productId) {
  const state = loadState();
  const current = state.list.find((item) => item.productId === productId);
  const nextQuantity = Math.max((current?.quantity ?? 0) - 1, 0);
  return setItemQuantity(productId, nextQuantity);
}

export function removeItem(productId) {
  return setItemQuantity(productId, 0);
}

export function clearList() {
  const state = loadState();
  const newState = { ...state, list: [] };
  saveState(newState);
  return newState.list;
}

export function applySubstitution(originalId, suggestion) {
  const state = loadState();
  const list = [...state.list];
  const index = list.findIndex((item) => item.productId === originalId);

  if (index === -1) return state.list;

  list[index] = {
    ...list[index],
    substitution: {
      ...suggestion,
      appliedAt: new Date().toISOString(),
      originalId: originalId
    }
  };

  const newState = { ...state, list };
  saveState(newState);
  return newState.list;
}

export function removeSubstitution(productId) {
  const state = loadState();
  const list = [...state.list];
  const index = list.findIndex((item) => item.productId === productId);
  if (index === -1) return state.list;

  list[index] = { ...list[index], substitution: null };
  const newState = { ...state, list };
  saveState(newState);
  return newState.list;
}

export function setSelectedMarket(marketId) {
  const state = loadState();
  const newState = { ...state, selectedMarketId: marketId };
  saveState(newState);
  return newState.selectedMarketId;
}

export function getSelectedMarket() {
  return loadState().selectedMarketId;
}

export function toggleFavouriteMarket(marketId) {
  const state = loadState();
  const favourites = new Set(state.favourites ?? []);
  if (favourites.has(marketId)) {
    favourites.delete(marketId);
  } else {
    favourites.add(marketId);
  }
  const newState = { ...state, favourites: Array.from(favourites) };
  saveState(newState);
  return newState.favourites;
}

export function getFavouriteMarkets() {
  return loadState().favourites ?? [];
}

export function getListMetrics(getProduct) {
  const list = getShoppingList();
  const totals = list.reduce(
    (acc, item) => {
      const baseProduct = getProduct(item.productId);
      const price = item.substitution?.price ?? baseProduct?.price ?? 0;
      const quantity = item.quantity;
      acc.items += quantity;
      acc.total += price * quantity;
      if (item.substitution) {
        const originalPrice = baseProduct?.price ?? price;
        acc.economy += (originalPrice - price) * quantity;
      }
      return acc;
    },
    { items: 0, total: 0, economy: 0 }
  );

  return {
    ...totals,
    total: Number(totals.total.toFixed(2)),
    economy: Number(totals.economy.toFixed(2))
  };
}
