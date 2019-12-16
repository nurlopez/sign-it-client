import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button } from '../../styles/elements'
import { ContainerButtons } from '../../styles/elements'

export default class ResourceHomeBtns extends Component {
  render() {
    return (
        
      <div>
        <ContainerButtons>
          <Link to="resources/categories/letters">
            {" "}
            <Button primary >Letters</Button>{" "}
          </Link>
          <br />
          <Link to="/resources/categories/greetings">
            {" "}
            <Button primary>Greetings</Button>{" "}
          </Link>
          <Link to="/resources/categories/transport">
            {" "}
            <Button primary>Transport</Button>{" "}
          </Link>
        </ContainerButtons>
      </div>
    );
  }
}


