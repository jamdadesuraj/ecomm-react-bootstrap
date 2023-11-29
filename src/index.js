import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { ProductContextProvider } from "./context/productContext.js";
import { SingleProductProvider } from "./context/singleProductContext.js";
import { FilterProductContext } from "./context/filterContext.js";
import { CartContextProvider } from "./context/cartContext.js";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductContextProvider>
    <SingleProductProvider>
      <FilterProductContext>
        <CartContextProvider>
          <Auth0Provider
            domain="dev-s3bd7nd87hvgx8g2.us.auth0.com"
            clientId="LLkHR7SlXaVrIPbLEbklgP61AxDdOWhZ"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <App />
          </Auth0Provider>
        </CartContextProvider>
      </FilterProductContext>
    </SingleProductProvider>
  </ProductContextProvider>
);
