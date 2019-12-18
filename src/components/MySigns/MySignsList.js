import React, { Component } from "react";
import { ContainerSigns } from "../../styles/elements";
import mySignService from "../../lib/mysign-service";
import AllSigns from "../MySigns/AllSigns";

export default class MySignsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         listOfMySigns: []
        //   isFormShowing: false,
        //   isButtonShowing: true
        };
      }
    
      handleGetSignCards = () => {
        
        mySignService.allMySigns()
        .then((allSigns) => {
          console.log('es una signcard?', allSigns);
          this.setState({listOfMySigns : allSigns})
        })
        .catch((error) => console.log(error))
      }
        


  render() {
        console.log(this.state)
    return (
        
      <ContainerSigns>
      <button onClick={this.handleGetSignCards}>View all SignCards</button>
      
      <AllSigns mySigns={this.state.listOfMySigns}/>

     </ContainerSigns>
      
    );
  }
}
