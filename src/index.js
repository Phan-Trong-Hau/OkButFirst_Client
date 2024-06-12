import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./Components/GlobalStyles";
import { AuthProvider } from "./Context/AuthProvider";
import { LoadingProvider } from "./Context/LoadingProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <LoadingProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </LoadingProvider>
  </GlobalStyles>,
);
