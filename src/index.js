import ReactDOM from "react-dom/client";
import React from 'react';
import {
    Routes,
    Route, HashRouter,
} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/*" element={<App />}>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);