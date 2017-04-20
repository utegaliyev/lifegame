import { render } from "react-dom";
import React from "react";
import App from "./containers/App";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import {initCells} from './actions';

const containerEl = document.getElementById("container");
let store = configureStore();
store.dispatch(initCells());

render(<Provider store={store}>
   <App />
 </Provider>,
  containerEl
);
