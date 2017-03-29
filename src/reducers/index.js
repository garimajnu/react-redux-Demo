import {combineReducers} from 'redux'
import {Actions} from '../actions'

function availableUsers(state = [], action) {
  switch (action.type) {
  case Actions.COMPONENT_INITIALIZING:
    return  [
      {
        id: 1,
        username: 'Garima1',
        password: 'Bhatia1',
        isLoggedIn : 0
      },
      {
        id: 2,
        username: 'Garima2',
        password: 'Bhatia2',
        isLoggedIn : 0
      }
    ]
  default:
    return state
  }
}

function username(state = '', action) {
  switch (action.type) {
  case Actions.USERNAME_CHANGED:
    return action.payload
  default:
    return state
  }
}

function password(state = '', action) {
  switch (action.type) {
  case Actions.PASSWORD_CHANGED:
    return action.payload
  default:
    return state
  }
}

function errorMessages(state = {}, action) {
  let newState
  const payload = action.payload || {}
  const {
    key,
    errors
  } = payload
  switch (action.type) {
  case Actions.SET_VALIDATION_ERRORS:
    newState = JSON.parse(JSON.stringify(state))
    newState[key] = errors
    return newState
  default:
    return state
  }
}

export default combineReducers({
  availableUsers,
  username,
  password,
  errorMessages
})
