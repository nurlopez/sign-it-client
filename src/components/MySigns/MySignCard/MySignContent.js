import React, { Component } from 'react';

import edit from '../../../images/build.svg';
import remove from '../../../images/trash.svg';

import { ContainerMySignsButtons, ButtonIcon } from '../../../styles/elements';
import mySignService from '../../../lib/mysign-service'






export default class MySignContent extends Component {

    // remove function
    handleRemoveMySign = () => {
        
        mySignService.deleteMySign(this.props.sign._id)
        .then(() => {
        
          this.props.handleGetSignCards()
        })
        .catch((error) => console.log(error))
      }
        

    render() {
        const { sign } = this.props
       
        return (
            <>                
            <img
            src={sign.imgURL}
            alt={`sign for ${sign.meaning}`}
            width="250px"
            />
            <p>{sign.meaning}</p>

            <ContainerMySignsButtons>
            <ButtonIcon onClick={this.props.toggleEditForm}>
            <img src={edit} alt= "edit2" width= "40"/></ButtonIcon>

            <ButtonIcon onClick={this.handleRemoveMySign}>
            <img src={remove} alt= "delete" width= "30"/>
            </ButtonIcon>
            </ContainerMySignsButtons>

           </>
        )
    }
}








