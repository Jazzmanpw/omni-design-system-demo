import React from "react";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { GlobalOverrides, theme } from "../design-system";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalOverrides />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
