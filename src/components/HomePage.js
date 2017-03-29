import React from 'react'
import {IndexLink, Link} from 'react-router'
import Header from './Header'

export default class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container-fluid">
        <h1>Home</h1>
        <Header/>
      </div>
    )
  }
}
/* <*/