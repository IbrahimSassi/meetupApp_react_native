/**
 * Created by Ibrahim on 09/05/2017.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

const middlewares = [
    promiseMiddleware(),
];
