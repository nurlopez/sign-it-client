import React, { Component } from "react";
import MySignCard from './MySignCard/MySignCard'

import { ContainerSigns } from "../../styles/elements";

export default class AllSigns extends Component {
  render() {
    
    return (
    
      <ContainerSigns>

        {this.props.mySigns.length === 0 ? (
          <p>  </p>
        ) : (
          this.props.mySigns.map(sign => {
            
            return (
                
              <MySignCard sign={sign} handleGetSignCards={this.props.handleGetSignCards}/>

       
                          
            );
          })
        )}
      </ContainerSigns>

    );
  }
}
