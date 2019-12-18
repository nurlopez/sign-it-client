
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../styles/elements'
import { ContainerButtons } from '../styles/elements'
// import logo from '../images/logo-sign-it.gif';
/*---- Section Buttons ----- */
import resourcesLib from '../images/resourcesLib.svg';
import privateSigns from '../images/lock_open.svg';


export class HeaderHomeButtons extends Component {
    render() {
        return (
            <div>
            <ContainerButtons>
      
          {/* <a href="/"><img src={logo} alt="logo" width="50px" align="middle"/></a>  */}
              {/* <h1>SIGN IT</h1> */}
              
            <Link to="/resources">
              <Button>
              <img src={ resourcesLib } alt= "user" width= "50" />
              Resources
              </Button>
            </Link>
            <br />
            <Link to="/mysigns">
              
              <Button secondary>
              <img src={ privateSigns } alt= "user" width= "50" />
              My Signs
              </Button>
            </Link>

            </ContainerButtons>
            <p><b> . . .</b></p>
            </div>
        )
    }
}

export default HeaderHomeButtons
