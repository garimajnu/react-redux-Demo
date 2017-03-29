import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SignUpPage  from '../components/SignUpPage'

class SignUp extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <SignUpPage />
    )
  }
}
export default connect()(SignUp)