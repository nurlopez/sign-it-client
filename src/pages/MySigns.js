import React, { Component } from 'react';
import { Container } from '../styles/global'

import AddSign from '../components/MySigns/AddSign'
import Navbar from '../components/Navbar';
import MySignsList from '../components/MySigns/MySignsList';
import mySignService from '../lib/mysign-service';

class MySigns extends Component {
  state = {
    listOfMySigns: []
  };

  getMySignHandler = (_id) => {
    
    mySignService.getAllSigns()
    .then( (allMySigns) => {
      console.log(allMySigns)
      this.setState({listOfMySigns : allMySigns})
      console.log('all my signs?', allMySigns)
    })
    .catch( (err) => console.log(err));
  }



  render() {
    return (
      <div>
      <Navbar />
      <Container>
        
        <h2>My Signs</h2>
        <div>
          <AddSign />
        </div>

        <h1>...</h1>
        <h2>My Collection</h2>
        
    
          <MySignsList mySigns={this.state.listOfMySigns}/>
  
     
      
      </Container> 
      </div>
    );
  }
}

export default MySigns;
