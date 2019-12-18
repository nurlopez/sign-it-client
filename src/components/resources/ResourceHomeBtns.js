import React from "react";
import { Link } from 'react-router-dom';

import { Button } from '../../styles/elements'
import { ContainerButtons } from '../../styles/elements'
/*---- Section Buttons ----- */
import abc from '../../images/abc.svg';
import hola from '../../images/face.svg';
import car from '../../images/directions_car.svg'

const ResourceHomeBtns = (props) => {
    return (
        <ContainerButtons>
            <Button primary onClick={() => {props.handleResults('letters')}} >
              <Link to="/resources/categories/letters">
              <img src={ abc } alt= "user" width= "50" />
              Letters
              </Link>
            </Button>

            <Button primary onClick={() => {props.handleResults('greetings')}}> 
            <Link to="/resources/categories/greetings"> 
            <img src={ hola } alt= "user" width= "50" />
            Greetings
            </Link>
            </Button>
            
            <Button primary onClick={() => {props.handleResults('transport')}} >
            <Link to="/resources/categories/transport"> 
            <img src={ car } alt= "user" width= "50" />
            Transport
            </Link>
            </Button>
        </ContainerButtons>
     
    );
  }

export default ResourceHomeBtns