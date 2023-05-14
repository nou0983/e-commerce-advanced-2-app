import { createContext, useContext, useEffect, useReducer } from "react";
import {
  INITIAL_PRODUCTS_STATE,
  PRODUCTS_ACTION_TYPE,
  productsReducer,
} from "../reducers/productsReducer";
import { actionCreator } from "../utils/actionCreator.utils";
import {
  addCollectionAndDocuments,
  getCollectionAndDocuments,
} from "../utils/firebase.utils";
// import { PRODUCTS } from "../utils/constants.utils";

const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_PRODUCTS_STATE);

  // Add the initial products in the firebase DB
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", PRODUCTS);
  // }, []);

  useEffect(() => {
    getProductsFromDB();
  }, []);

  const getProductsFromDB = async () => {
    const products = await getCollectionAndDocuments("categories"); 
    dispatch(actionCreator(PRODUCTS_ACTION_TYPE.SET_PRODUCTS, products));
  };

  const value = {
    ...state,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductsContext = () => useContext(ProductsContext);

export { ProductsContextProvider, useProductsContext };
