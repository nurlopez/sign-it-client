import React, { Component } from 'react';
import { ContainerButtons } from '../styles/elements'
import { Container } from '../styles/global'

import sign from '../images/sign.png';
import AddSign from '../components/MySigns/AddSign'
import Navbar from '../components/Navbar';

class MySigns extends Component {
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
        <ContainerButtons>
        <div className="signcard">
        <img src ={sign} alt="sign" width= "100px" />
        <button>edit my-sign</button>
        <button>view my-sign</button>
        </div>
     
      
      <div className="sign">
        <img src ={sign} alt="sign" width= "100px" />
        <button>edit my-sign</button>
        <button>view my-sign</button>
      </div>

      <div className="sign">
        <img src ={sign} alt="sign" width= "100px" />
        <button>edit my-sign</button>
        <button>view my-sign</button>
      </div>
      </ContainerButtons>
      </Container>
      </div>
    );
  }
}

export default MySigns;
