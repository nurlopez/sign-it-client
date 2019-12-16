import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


// ------ CSS + IMAGES ----- ///
import { Main } from './styles/global'

// ------ GLOBAL PAGES + COMPONENTS ----- ///

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';


import AnonRoute from './components/AnonRoute'; // signup routes
import PrivateRoute from './components/MySignsRoute'; // My Signs routes

// ------ RESOURCE PAGES ----- ///
import Resources from './pages/Resources'

// ------ RESOURCE COMPONENTS ----- ///
import ResourceList from './components/resources/ResourceList';

// ------ MY-SIGNS PAGES ----- ///
import MySigns from './pages/MySigns';

// ------ MY-SIGNS COMPONENTS ----- ///


class App extends Component {
  render() {
    return (
      <div className="App">
      <Main>
        <Navbar />
        

        <Switch>
          <Route exact path="/" component={Home}/>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <Route path="/resources" component ={Resources}/>
          <Route exact path="/resources/categories/:category" component={ResourceList} /> 
         
          <PrivateRoute exact path="/mysigns" component={MySigns} />
        </Switch>

        </Main>
      </div>
    );
  }
}

export default App;
