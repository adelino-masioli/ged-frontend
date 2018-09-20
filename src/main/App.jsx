import './App.css'
import React, { Component } from 'react'
import store from '../redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import '../component/commons/dependencies'
import Preloader from '../component/templates/Preloader'
import RoutesNoAuth from './RoutesNoAuth'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <React.Fragment>
              <div><Preloader /></div>
              <RoutesNoAuth/>
            </React.Fragment>        
        </Router>
      </Provider>
    );
  }
}

export default App;
