import React from "react";
import { Link } from 'react-router-dom';

import { Button } from '../../styles/elements'
import { ContainerButtons } from '../../styles/elements'

const ResourceHomeBtns = (props) => {
    return (
        <ContainerButtons>
            <Button primary onClick={() => {props.handleResults('letters')}} >
              <Link to="/resources/categories/letters">
              Letters
              </Link>
            </Button>

            <Button primary onClick={() => {props.handleResults('greetings')}}> 
            <Link to="/resources/categories/greetings"> 
            Greetings
            </Link>
            </Button>
            
            <Button primary onClick={() => {props.handleResults('transport')}} >
            <Link to="/resources/categories/transport"> 
            Transport
            </Link>
            </Button>
        </ContainerButtons>
     
    );
  }

export default ResourceHomeBtns