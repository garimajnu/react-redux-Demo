import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import HomePage  from '../components/HomePage'

class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div>
          <HomePage/>
          {this.props.children}
        </div>
    )
  }
}
export default connect()(Home)