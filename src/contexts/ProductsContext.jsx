import { createContext, useContext, useEffect, useReducer } from "react";
import {
  INITIAL_PRODUCTS_STATE,
  PRODUCTS_ACTION_TYPE,
  productsReducer,
} from "../reducers/productsReducer";
import { actionCreator } from "../utils/actionCreator.utils";
import { getCollectionAndDocuments } from "../utils/firebase.utils";
// import { addCollectionAndDocuments } from "../utils/firebase.utils";
// import { PRODUCTS } from "../utils/constants.utils";

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_PRODUCTS_STATE);
  const { cart } = state;

  // Add the initial products in the firebase DB
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", PRODUCTS);
  // }, []);

  useEffect(() => {
    getProductsFromDB();
  }, []);

  useEffect(() => {
    localStorage.setItem("lamaStoreCart", JSON.stringify(cart));
    updateTotals();
    // eslint-disable-next-line
  }, [cart]);

  const getProductsFromDB = async () => {
    const products = await getCollectionAndDocuments("categories");
    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.SET_PRODUCTS, products));
  };

  const clearCart = () => {
    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.CLEAR_CART));
  };

  const addItemToCart = (itemToAdd, quantity) => {
    const itemExist = cart.some((item) => item.id === itemToAdd.id);
    let newCart;

    if (itemExist) {
      newCart = cart.map((item) =>
        item.id === itemToAdd.id
          ? {
              ...item,
              quantity:
                item.quantity + quantity > 9 ? 9 : item.quantity + quantity,
            }
          : item
      );
    } else {
      newCart = [...cart, { ...itemToAdd, quantity }];
    }

    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.ADD_ITEM_TO_CART, newCart));
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.ADD_ITEM_TO_CART, newCart));
  };

  const updateItemQuantity = (id, quantity) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.ADD_ITEM_TO_CART, newCart));
  };

  const toggleCart = (bool) => {
    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.TOGGLE_CART_MODAL, bool));
  };

  const updateTotals = () => {
    const newTotals = cart.reduce(
      (acc, item) => {
        const { price, quantity } = item;
        acc.total = acc.total + price * quantity;
        acc.quantity = acc.quantity + quantity;
        return acc;
      },
      { quantity: 0, total: 0 }
    );
    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.SET_TOTAL, newTotals));
  };

  const value = {
    ...state,
    addItemToCart,
    toggleCart,
    clearCart,
    updateItemQuantity,
    removeItem,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { ProductsContextProvider, useProductsContext };
