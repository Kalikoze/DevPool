import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import App from './App/App';
import WebFont from 'webfontloader';
// import rootReducer from './reducers/index';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const history = createHistory()

// const store = createStore(
//   rootReducer,
//   devTools,
//   applyMiddleware(thunk),
// )

WebFont.load({
  google: {
    families: ['Amaranth', 'Titillium Web']
  }
});

ReactDOM.render(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
