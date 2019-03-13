import { createStore, applyMiddleware ,} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducers} from '../reducers'
import thunk from 'redux-thunk';


export function configureStore(initialState = {}) {
    const store = createStore(
        reducers, 
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;    
};

export const store = configureStore();