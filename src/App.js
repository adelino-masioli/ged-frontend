import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './component/Common/dependencies'

import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin'
import Dashboard from './screens/Dashboard'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path='/home' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/login' component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
