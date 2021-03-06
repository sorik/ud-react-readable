import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { fetchPostsIfNeeded, fetchCategoriesIfNeeded } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

store
  .dispatch(fetchPostsIfNeeded())
  .then(() => console.log(store.getState()))

store
  .dispatch(fetchCategoriesIfNeeded())
  .then(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root'));


registerServiceWorker();
