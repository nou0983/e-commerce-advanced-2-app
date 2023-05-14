import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { UserContextProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);
