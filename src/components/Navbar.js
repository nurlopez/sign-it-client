import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

/*---- styled components ----*/
import { Nav } from '../styles/global'
import { NavButton } from '../styles/global'
import HomeButtons from "./HomeButtons";




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
              <NavButton primary onClick={logout}> Logout </NavButton>{" "}
            </div>
          ) : (
            <div className="signup-btns">
              <Link to="/login">
                {" "}
                <NavButton primary> Login </NavButton>{" "}
              </Link>{" "}
              <br />
              <Link to="/signup">
                {" "}
                <NavButton primary> Signup </NavButton>{" "}
              </Link>{" "}
            </div>
          )}{" "}
        </Nav>{" "}
        <HomeButtons/>
      </div>
    );
  }
}

export default withAuth(Navbar);
