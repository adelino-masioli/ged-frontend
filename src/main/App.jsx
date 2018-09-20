import './App.css'
import React, { Component } from 'react'
import store from '../redux'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import '../component/commons/dependencies'
import Header from '../component/templates/Header'
import Footer from '../component/templates/Footer'
import Preloader from '../component/templates/Preloader'

import Home from '../screens/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <React.Fragment>
                <div><Preloader/></div>
                <div className="wrapper">
                    <Header />
                    <Route exact path='/' component={Home} />
                    <Footer />
                </div>
            </React.Fragment>        
        </Router>
      </Provider>
    );
  }
}

export default App;
