import React from 'react'

export default class Login extends React.Component{
    constructor(props) {
      super(props)
    }
    render(){
      const {
                username,
                password,
                passwordErrors,
                usernameErrors
            } = this.props

      const {
                onUsernameChange,
                onPasswordChange,
                onLogin
            } = this.props

      const divStyle = {
        color: 'red'
      }

      return(
            <div className="container">
              <h1> Login Form </h1>
              <form className="form-group">
                <label> Username </label><br/>
                <input type="text" value={username} id="username" onChange={(e)=>onUsernameChange(e.target.value)}></input><br/>
                <div style={divStyle}>{usernameErrors}</div>
                <label> Password </label><br/>
                <input type="Password" value={password} id="password" onChange={(e)=>onPasswordChange(e.target.value)}></input><br/>
                <div style={divStyle}>{passwordErrors}</div><br/>
                <button type="submit" className="btn btn-primary" id="Login" onClick={(event)=>{onLogin(); event.preventDefault() }}>Login</button>
              </form>
            </div>
        )
    }
}