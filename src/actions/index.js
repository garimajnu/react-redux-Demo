export const Actions = {
  COMPONENT_INITIALIZING: 'COMPONENT_INITIALIZING',
  USERNAME_CHANGED: 'USERNAME_CHANGED',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED',
  DO_LOGIN: 'DO_LOGIN',
  SET_VALIDATION_ERRORS: 'SET_VALIDATION_ERRORS'
}

export function setValidationErrors(payload) {
  return {
    type: Actions.SET_VALIDATION_ERRORS,
    payload
  }
}

export function componentInitializing(payload){
  return{
    type: Actions.COMPONENT_INITIALIZING,
    payload
  }
}

export function usernameChanged(payload){
  return{
    type: Actions.USERNAME_CHANGED,
    payload
  }
}

export function passwordChanged(payload){
  return{
    type: Actions.PASSWORD_CHANGED,
    payload
  }
}

export function doLogin(payload){
  return{
    type: Actions.DO_LOGIN,
    payload
  }
}

