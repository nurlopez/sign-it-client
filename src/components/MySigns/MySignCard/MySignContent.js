import React, { Component } from 'react';
import edit from '../../../images/edit.png';
import remove from '../../../images/delete.png';
import {ContainerButtons, ButtonIcon } from '../../../styles/elements';

export default class MySignContent extends Component {

    // remove function


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

            <ButtonIcon onClick={() =>console.log('remove')}>
            <img src={remove} alt= "delete" width= "30"/></ButtonIcon>
            </ContainerButtons>

           </>
        )
    }
}








