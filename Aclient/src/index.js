import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);