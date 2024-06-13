import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyles from "./Components/GlobalStyles";
import { AuthProvider } from "./Context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <AuthProvider>
      <App />
    </AuthProvider>
  </GlobalStyles>,
);
