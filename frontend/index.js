import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import {Router, Route, browserHistory} from 'react-router';
import store from './store';
import App from './app';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
