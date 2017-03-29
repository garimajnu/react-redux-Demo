/**
 * Created by sekhar on 11/08/16.
 */

import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import logger from 'redux-logger'
import sampleMiddleware from './middlewares'
import reducers from './reducers'

/**
 * the last function will be called first and
 * then to the previous function
 */
let middlewares = applyMiddleware(
  sampleMiddleware,
  logger()
)

/**
 * creates a store for the component with given
 * middlewares, reducers and initial data
 */
export default function configureStore(initialState) {
  return compose(middlewares)(createStore)(reducers, initialState)
}