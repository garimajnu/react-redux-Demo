
import {
  Actions
} from '../actions'

export default store => next => action => {
  next(action)
  switch (action.type) {
  case Actions.COMPONENT_INITIALIZING:
    console.log('seems component is initializing')
    break
  case Actions.DO_LOGIN:
    let state = store.getState()
    Login(state)
    break
  }
}

function Login(state){
  let userIndex=state.availableUsers.findIndex((user)=> user.username===state.username)
  if(userIndex>-1){
    if(state.availableUsers[userIndex].password===state.password){
      if(state.availableUsers[userIndex].isLoggedIn===0){
        state.availableUsers[userIndex].isLoggedIn=1
        alert('user '+state.username+' logged in successfully')
      }
      else{
        alert('user '+state.username+' already Logged in!!')
      }
    }
    else{
      alert('Incorrect Password')
    }
  }
  else{
    alert('user does not exist')
  }
}