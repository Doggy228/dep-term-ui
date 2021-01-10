import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from "redux-form"
import thunk from 'redux-thunk';

import {connectRouter, routerMiddleware} from 'connected-react-router'
import LangDomain from "../reducers/LangDomain";
import TermDomain from "../reducers/TermDomain";
import AlertDomain from "../reducers/AlertDomain";

export default (history) => {
    const allReducers = Object.assign({}, {
        LangDomain,
        TermDomain,
        AlertDomain
    }, {form: formReducer}, {router: connectRouter(history)});
    const reducer = combineReducers(allReducers);
    return createStore(reducer, applyMiddleware(routerMiddleware(history), thunk));
};