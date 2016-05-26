import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import configureStore from './store/configureStore';
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);


import Entry from './containers/Entry';
import App from './containers/App';

import Login from './components/Login';
import Book from './components/Book';
import Person from './components/Person';


export default (
 <Provider store={store}>
    <Router history={history}>
		<Route path="/" component={Entry}>
			<IndexRoute component={Login} />
			<Route path="/app" component={App}>
				
				<Route path="/person/:id" component={Person} />
			</Route> 
		</Route>
    </Router>
  </Provider>
);

