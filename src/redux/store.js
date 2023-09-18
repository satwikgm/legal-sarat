import { createStore, applyMiddleware } from "redux"; //has to import "yarn add redux"

import logger from "redux-logger"; //has to import "yarn add redux-logger"

import thunk from 'redux-thunk'; //has to import "yarn add redux-thunk" 

import rootReducer from "./root-reducer"; 

const middlewares = [thunk];

if(process.env.NODE_ENV === 'development') { 
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));


