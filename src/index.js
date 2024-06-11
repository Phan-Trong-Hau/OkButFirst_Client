import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./Components/GlobalStyles";
import { AuthProvider } from "./Context/AuthProvider";
import { ProductProvider } from "./Context/ProductProvider";
import { LoadingProvider } from "./Context/LoadingProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <LoadingProvider>
      <AuthProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AuthProvider>
    </LoadingProvider>
  </GlobalStyles>
);
