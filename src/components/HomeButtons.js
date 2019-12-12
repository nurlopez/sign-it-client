
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components'

const Button = styled.button
`background: transparent;
border: solid 1px #F38630 ;
border-radius: 3px;
color: #F38630;
margin: 0 1em;
padding: 0.25em 1em;
${props => props.primary && css`
border: none;
background: #69D2E7;
color: white;
`}`;

const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
text-align:center;
`

export class HomeButtons extends Component {
    render() {
        return (
            <div>
            <ContainerButtons>
            <Link to="/resources">
              {' '}
              <Button>Resources</Button>{' '}
            </Link>
            <br />
            <Link to="/mysigns">
              {' '}
              <Button primary>My Signs</Button>{' '}
            </Link>
            </ContainerButtons>
            </div>
        )
    }
}

export default HomeButtons
