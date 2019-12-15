import React, { Component } from 'react';
import { ContainerButtons } from '../styles/elements'
 
import sign from '../images/sign.png';
import AddSign from '../components/MySigns/AddSign'

class MySigns extends Component {
  render() {
    return (
      <div>
        
        <h1>My Signs</h1>
        <div>
      <AddSign />
        </div>

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
      </div>
    );
  }
}

export default MySigns;
