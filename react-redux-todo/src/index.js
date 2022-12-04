import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducers from "./reducers";

import App from "./App";

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(reducers, persistedState);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);