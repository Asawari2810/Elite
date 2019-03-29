import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import indexReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import {Router , Route,Switch} from 'react-router-dom';
import indexRoutes from '../src/routes/index.jsx';
import {createBrowserHistory} from 'history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddlerwre = composeEnhancers(applyMiddleware(thunk, logger))(createStore);
const store = createStoreWithMiddlerwre(indexReducer);
const history = createBrowserHistory();

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <Switch>
            {indexRoutes.map((props,key) => {
                return <Route exact path={props.path} component={props.component} key={key}/>
            })}
            </Switch>
        </Router>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
