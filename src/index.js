import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterContextProvider } from "./Contexts/FilterContext";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { CartContextProvider } from "./Contexts/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
