import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import MySigns from './pages/MySigns';
import Resources from './pages/Resources'
import Navbar from './components/Navbar';

import AnonRoute from './components/AnonRoute';
import HomeButtons from './components/HomeButtons';

import MySignsRoute from './components/MySignsRoute';
import ResourcesRoute from './components/ResourcesRoute';

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
        <img src={logo} alt="logo" width="100px" align="middle"/>
        <h1>SIGN IT</h1>
        <HomeButtons />

        <Switch>
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />
          <MySignsRoute exact path="/mysigns" component={MySigns} />
          <ResourcesRoute exact path="/resources" component={Resources}/>
        </Switch>

        </Container>
        </Main>
      </div>
    );
  }
}

export default App;
