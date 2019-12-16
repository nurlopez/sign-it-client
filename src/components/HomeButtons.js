
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../styles/elements'
import { ContainerButtons } from '../styles/elements'


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
