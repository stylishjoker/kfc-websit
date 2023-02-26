import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>
);
