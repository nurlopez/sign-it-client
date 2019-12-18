
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../styles/elements'
import { ContainerButtons } from '../styles/elements'

/*---- Section Buttons ----- */
import resourcesLib from '../images/resourcesLib.svg';
import privateSigns from '../images/lock_open.svg';


export class SectionButtons extends Component {
    render() {
        return (
            <div>
            <ContainerButtons>

            <Link to="/resources">
              <Button>
              <img src={ resourcesLib } alt= "user" width= "50" />
              Resources
             </Button>
            </Link>
            <br />
            <Link to="/mysigns">
              {' '}
              <Button primary>
              <img src={ privateSigns } alt= "user" width= "50" />
              My Signs
              </Button>
            </Link>
            </ContainerButtons>
            </div>
        )
    }
}

export default SectionButtons
