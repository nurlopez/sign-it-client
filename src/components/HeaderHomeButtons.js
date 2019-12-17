
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../styles/elements'
import { ContainerButtons } from '../styles/elements'
import logo from '../images/logo-sign-it.gif';


export class HeaderHomeButtons extends Component {
    render() {
        return (
            <div>
            <ContainerButtons>

          <a href="/"><img src={logo} alt="logo" width="50px" align="middle"/></a> 
        <h1>SIGN IT</h1>
                  
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

export default HeaderHomeButtons
