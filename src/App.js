import React, { Component } from 'react';
import { Switch } from 'react-router-dom';


// ------ CSS + IMAGES ----- ///
import logo from './images/logo192.png';
import { Container } from './styles/global'
import { Main } from './styles/global'

// ------ GLOBAL PAGES + COMPONENTS ----- ///

import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';

import AnonRoute from './components/AnonRoute';
import HomeButtons from './components/HomeButtons';

// ------ RESOURCE PAGES ----- ///
import Resources from './pages/Resources'
import ResourceLetters from './pages/ResourceLetters';
import ResourceGreetings from './pages/ResourceGreetings';
import ResourceTransport from './pages/ResourceTransport';
// import ResourceSignCard from './pages/ResourceSignCard';


// ------ RESOURCE COMPONENTS ----- ///
import ResourceList from './components/resources/ResourceList';
import ResourceLettersList from './components/resources/ResourceLettersList';
// ------ MY-SIGNS PAGES ----- ///
import MySigns from './pages/MySigns';

// ------ MY-SIGNS COMPONENTS ----- ///
import MySignsRoute from './components/MySignsRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main>
        <Navbar />
        <Container>
        <a href="/"><img src={logo} alt="logo" width="150px" align="middle"/></a>
        <h1>SIGN IT</h1>
        <HomeButtons />

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <Resources exact path="/resources" pages={Resources}/>
          <ResourceLetters exact path="/resources/letters" component={ResourceLettersList} /> 
          <ResourceGreetings exact path="/resources/Greetings" component={ResourceList} /> 
          <ResourceTransport exact path="/resources/Transport" component={ResourceList} /> 
          {/* <ResourceSignCard exact path="/resources/:id" pages={ResourceSignCard}/> */}

          
          {/*---- private ----*/}
          <MySignsRoute exact path="/mysigns" component={MySigns} />
        </Switch>

        </Container>
        </Main>
      </div>
    );
  }
}

export default App;
