import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import cells from './reducers';

export default function configureStore(preloadState){
    return createStore(cells, preloadState, applyMiddleware(logger));
}
