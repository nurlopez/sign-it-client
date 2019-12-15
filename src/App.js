import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import MySigns from './pages/MySigns';
import Resources from './pages/Resources'
import Navbar from './components/Navbar';
import ResourceLetters from './pages/ResourceLetters';

import AnonRoute from './components/AnonRoute';
import HomeButtons from './components/HomeButtons';

import MySignsRoute from './components/MySignsRoute';
import ResourceList from './components/resources/ResourceList';

// import ResourcesRoute from './components/ResourcesRoute';

import logo from './images/logo192.png';
import styled from 'styled-components'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
`
const Main = styled.div`
background-color: #E0E4CC;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
text-align:center;
margin: -10px;

@import url('https://fonts.googleapis.com/css?family=Solway&display=swap');
h1 {
  font-family: 'Solway', serif;
}
`



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
          <ResourceLetters exact path="/resources/letters" component={ResourceList} /> 
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
