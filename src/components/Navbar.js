import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import styled, {css} from "styled-components";

const Nav = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Solway&display=swap");
  background-color: #F38630;
  }
  p {
    font-family: "Solway", serif;
  }
  .signup-btns {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin: 20px 0px;
   }
`;

const Button = styled.button
`background: transparent;
border: solid 1px #F38630 ;
border-radius: 3px;
color: #F38630;
margin: 0 1em;
padding: 0.25em 1em;
${props => props.primary && css`
border: solid 1px  white;
background: #FA6900;
color: white;
`}`;

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        <Nav>
          {" "}
          {isLoggedin ? (
            <div className="signup-btns">
              <p> username: {user.username} </p>{" "}
              <Button primary onClick={logout}> Logout </Button>{" "}
            </div>
          ) : (
            <div className="signup-btns">
              <Link to="/login">
                {" "}
                <Button primary> Login </Button>{" "}
              </Link>{" "}
              <br />
              <Link to="/signup">
                {" "}
                <Button primary> Signup </Button>{" "}
              </Link>{" "}
            </div>
          )}{" "}
        </Nav>{" "}
      </div>
    );
  }
}

export default withAuth(Navbar);
