import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "~lib/style/Theme";

const root = document.getElementById("root");
console.log(root);
ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>,
  root
);
