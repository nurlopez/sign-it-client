import React, { Component } from "react";


import { Button } from '../../styles/elements'
import { ContainerButtons } from '../../styles/elements'

export default class ResourceHomeBtns extends Component {
  render() {
    return (
        
      
        <ContainerButtons>
          
        
            <Button primary onClick={() => {console.log("letters")}} >Letters</Button>
            <Button primary onClick={() => {console.log("greetings")}} >Greetings</Button>
            <Button primary onClick={() => {console.log("transport")}} >Transport</Button>
          
        </ContainerButtons>
     
    );
  }
}


