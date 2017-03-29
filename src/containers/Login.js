import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import LoginPage  from '../components/LoginPage'
import {
  componentInitializing,
  usernameChanged,
  passwordChanged,
  doLogin,
  setValidationErrors
} from '../actions'

class App extends React.Component{
    constructor(props){
      super(props)
      this.onUsernameChange=this.onUsernameChange.bind(this)
      this.onPasswordChange= this.onPasswordChange.bind(this)
      this.onLogin=this.onLogin.bind(this)
    }

    onUsernameChange(text) {
      const {
           actions
              } = this.props
      actions.usernameChanged(text)
    }

  onPasswordChange(text) {
    const {
      actions
    } = this.props

    actions.passwordChanged(text)
  }

  onLogin(){
    const{
    username,
    password,
    availableUsers,
    errorMessages,
    actions
      } = this.props
    const {
      validationsJson,
      validator
    }= this.props.route

    let isFormValid = true
    Object.keys(validationsJson).forEach((key) => {
      let value = this.props[key]
      let errors = validator.validate(value, validationsJson[key])
      if (errors.length > 0) {
        isFormValid = isFormValid && false
      }
      actions.setValidationErrors({
        key,
        errors
      })
    })
    if(isFormValid){
      actions.doLogin({availableUsers, username, password})
    }
  }

  componentWillMount() {
    const {
      actions
    } = this.props

    actions.componentInitializing({})
  }

  render() {
    const {
      errorMessages,
      username,
      password
    }=this.props
    const Props = {
      ...this.props,
      onUsernameChange: this.onUsernameChange,
      onPasswordChange: this.onPasswordChange,
      onLogin: this.onLogin,
      usernameErrors: errorMessages['username'],
      passwordErrors: errorMessages['password']
    }

    return (
      <LoginPage {...Props}/>
    )
  }

}

function mapStateToProps(state, ownprops) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch, ownprops) {
  return {
    actions: bindActionCreators({
      componentInitializing,
      usernameChanged,
      passwordChanged,
      doLogin,
      setValidationErrors
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)