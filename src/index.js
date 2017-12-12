import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';
import App from './App/App';
// import rootReducer from './reducers/index';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const history = createHistory()

// const store = createStore(
//   rootReducer,
//   devTools,
//   applyMiddleware(thunk),
// )

ReactDOM.render(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
