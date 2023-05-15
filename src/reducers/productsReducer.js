const getCart = () => {
  const cart = localStorage.getItem("lamaStoreCart");

  if (cart) {
    return JSON.parse(cart);
  }

  return [];
};

const INITIAL_PRODUCTS_STATE = {
  products: [],
  cart: getCart(),
  isCartOpen: false,
  totalPrice: 0,
  totalQuantity: 0,
};

const PRODUCTS_ACTION_TYPE = {
  SET_PRODUCTS: "SET_PRODUCTS",
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  TOGGLE_CART_MODAL: " TOGGLE_CART_MODAL",
  SET_TOTAL: " SET_TOTAL",
};

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPE.SET_PRODUCTS:
      return { ...state, products: payload };
    case PRODUCTS_ACTION_TYPE.ADD_ITEM_TO_CART:
      return { ...state, cart: payload };
    case PRODUCTS_ACTION_TYPE.CLEAR_CART:
      return { ...state, cart: [] };
    case PRODUCTS_ACTION_TYPE.TOGGLE_CART_MODAL:
      return { ...state, isCartOpen: payload };
    case PRODUCTS_ACTION_TYPE.SET_TOTAL:
      return {
        ...state,
        totalPrice: payload.total,
        totalQuantity: payload.quantity,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_PRODUCTS_STATE, PRODUCTS_ACTION_TYPE, productsReducer };
