import CONSTS from '../constants'
import { combineReducers } from 'redux'

// Updates error message to notify about the failed fetches.
function authMessage (state = {}, action) {
  const { type, jwt } = action
  if (type === CONSTS.ACTIONS.LOGIN_SUCESS) {
    return Object.assign({}, state, {
        jwt: jwt
    })
  } else if (type === CONSTS.ACTIONS.LOGOUT_SUCESS) {
    return Object.assign({}, state, {
        jwt: ''
    })
  }

  return state
}

const rootReducer = combineReducers({
  authMessage : authMessage
})

export default rootReducer
