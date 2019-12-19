import React, { Component } from "react";
import { ContainerSigns } from "../../styles/elements";
import mySignService from "../../lib/mysign-service";
import AllSigns from "../MySigns/AllSigns";

/*---- button icons + styled components ---- */
import   view  from '../../images/view.svg'
import { Button } from '../../styles/elements'


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
          
          this.setState({listOfMySigns : allSigns})
        })
        .catch((error) => console.log(error))
      }
        


  render() {
        console.log(this.state)
    return (
        
      <>
      <Button onClick={this.handleGetSignCards}>
      <img src={ view } alt= "user" width= "45" />
      View Sign Cards
      </Button>
      
      <ContainerSigns>
      
      <AllSigns mySigns={this.state.listOfMySigns} handleGetSignCards={this.handleGetSignCards} />

     </ContainerSigns>
      </>
    );
  }
}
