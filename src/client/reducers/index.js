import CONSTS from '../constants'
import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

// Updates error message to notify about the failed fetches.
function authMessage (state = {}, action) {
  const { type, jwt } = action
  if (type === CONSTS.ACTIONS.POST_LOGIN_SUCCESS) {
    return Object.assign({}, state, {
        jwt: jwt
    })
  } else if (type === CONSTS.ACTIONS.DELETE_LOGOUT_SUCCESS) {
    return Object.assign({}, state, {
        jwt: ''
    })
  }

  return state
}

const rootReducer = combineReducers({
  authMessage : authMessage,
  form: reduxFormReducer // mounted under "form"
})

export default rootReducer
