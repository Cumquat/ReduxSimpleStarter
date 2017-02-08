import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}     from 'react-redux';
import {createStore, applyMiddleware}             from 'redux';
import {Router, Route, IndexRoute, browserHistory}   from 'react-router';
import reduxThunk       from 'redux-thunk';

import App from './components/app';

import Welcome from './components/layout/welcome';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Welcome}/>
                {/*<Route path="/incidents" component={IncidentList}/>*/}
                {/*<Route path="/resources" component={Resources}/>*/}
                {/*<Route path="/feature" component={RequireAuth(Feature)}/>*/}
                {/*<Route path="/in" component={RequireAuth(Feature)}/>*/}
                {/*<Route path="/incident/:id" component={RequireAuth(IncidentShow)}/>*/}
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app'));