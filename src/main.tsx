import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import mswConfig from "./msw";

if (import.meta.env.PROD) {
  mswConfig.createMockAPI(
    {
      onUnhandledRequest: "bypass",
      quiet: true,
    },
    mswConfig.handlers.login,
    mswConfig.handlers.register
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
