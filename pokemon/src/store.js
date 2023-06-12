import React from 'react'
import { applyMiddleware,combineReducers,legacy_createStore } from 'redux'
import { reducer as datareducer } from './redux/reducer'
import thunk from 'redux-thunk'

const rootreducer=combineReducers({
   datareducer
})


export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))