import React, { Component } from 'react';
import edit from '../../../images/edit.png';
import remove from '../../../images/delete.png';
import { ContainerButtons, ButtonIcon } from '../../../styles/elements';
import mySignService from '../../../lib/mysign-service'






export default class MySignContent extends Component {

    // remove function
    handleRemoveMySign = () => {
        
        mySignService.deleteMySign(this.props.sign._id)
        .then(() => {
        //   console.log('Is this deleted?', allSigns);
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
            width="100px"
            />
            <p>{sign.meaning}</p>

            <ContainerButtons>
            <ButtonIcon onClick={this.props.toggleEditForm}>
            <img src={edit} alt= "edit2" width= "30"/></ButtonIcon>

            <ButtonIcon onClick={this.handleRemoveMySign}>
            <img src={remove} alt= "delete" width= "30"/>
            </ButtonIcon>
            </ContainerButtons>

           </>
        )
    }
}








