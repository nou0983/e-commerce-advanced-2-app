const INITIAL_PRODUCTS_STATE = {
  products: [],
};

const PRODUCTS_ACTION_TYPE = {
  SET_PRODUCTS: "SET_PRODUCTS",
};

const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCTS_ACTION_TYPE.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export { INITIAL_PRODUCTS_STATE, PRODUCTS_ACTION_TYPE, productsReducer };
