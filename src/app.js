// Core
import React from "react";
import { Provider } from "react-redux";

// Components
import { Weather } from "./bus/weather";

// Styles
import "./styles/index.scss";

// Other
import "./init/moment";
import { store } from "./init/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
};
