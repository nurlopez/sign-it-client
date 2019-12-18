import React, { Component } from "react";
import MySignCard from './MySignCard/MySignCard'

// import edit from "../../images/edit.png";
// import remove from "../../images/delete.png";

import { ContainerSigns } from "../../styles/elements";

export default class AllSigns extends Component {
  render() {
    
    return (
    
      <ContainerSigns>

        {this.props.mySigns.length === 0 ? (
          <p>  </p>
        ) : (
          this.props.mySigns.map(sign => {
            console.log("allsigns?", sign);
            return (
                
              <MySignCard sign={sign} handleGetSignCards={this.props.handleGetSignCards}/>

       
                          
            );
          })
        )}
      </ContainerSigns>

    );
  }
}

{/* 
<Signcard key={sign._id}>
               
               <img
                 src={sign.imgURL}
                 alt={`sign for ${sign.meaning}`}
                 width="100px"
               />
               <p>{sign.meaning}</p>

              <ContainerButtons>
               <ButtonIcon onClick={() =>console.log('edit-sign')}>
               <img src={edit} alt= "edit2" width= "30"/></ButtonIcon>

               <ButtonIcon onClick={() =>console.log('remove')}>
               <img src={remove} alt= "delete" width= "30"/></ButtonIcon>
               </ContainerButtons>

             </Signcard>  */}