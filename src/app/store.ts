// import {applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import {processReducer} from '../Redux/process-reducer';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {jobsReducer} from '../Redux/jobs-reducer';

const rootReducer = combineReducers({
   process: processReducer,
   jobs: jobsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;