
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'
import { Button } from '../styles/elements'



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
