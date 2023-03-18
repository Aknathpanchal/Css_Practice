import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { taskReducer } from './task/Get/reducer';
import { postTaskReducer } from './task/post/reducer';

const rootReducer = combineReducers({
    task: taskReducer,
    postTask: postTaskReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer, enhancer)