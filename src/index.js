import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter} from "react-router-dom";

import './css/index.css';
import './css/iconfonts/style.css'
import App from './router/App';
import * as serviceWorker from './serviceWorker';
import init from "./utils/init";
import configureStore from "./store/configStore.js";

const store = configureStore();

init(() => {
    ReactDOM.render(
        <HashRouter>  
            <Provider store={store}>
              <App />
            </Provider>       
        </HashRouter>,
        document.getElementById("root")
    );
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
