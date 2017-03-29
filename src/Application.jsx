import React  from 'react'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory, IndexRoute } from 'react-router'
import Store from './store'
import {Home, Login, SignUp} from './containers'
import validationsJson from './utilities/validations.json'
import * as validator from './utilities/Validate'

export default class Application extends React.Component {
  constructor(props) {
    super(props)
    this.appStore = Store()
  }

  render() {
    const containerProps = {
      validationsJson,
      validator,
      ...this.props
    } 
    return (
      <Provider store={this.appStore}>
        <Router history={browserHistory} >
          <Route path="/" component={Home} >
            <IndexRoute component={SignUp} />
            <Route path="/login" component={Login} {...containerProps}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}