import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

const createStoreWithMiddleware = applyMiddleware(thunk,routerMiddleware(browserHistory))(createStore)
export default function configureStore (initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
