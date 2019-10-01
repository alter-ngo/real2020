import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-snapshot";

import NextApp from "./NextApp";
import registerServiceWorker from "./registerServiceWorker";
// Add this import:
import { AppContainer } from "react-hot-loader";

// Wrap the rendering in a function:
const renderSite = Component => {
  render(
    <AppContainer>
      <NextApp />
    </AppContainer>,
    document.getElementById("root")
  );
};

// Do this once
registerServiceWorker();

// Render once
renderSite(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./NextApp", () => {
    renderSite(NextApp);
  });
}
