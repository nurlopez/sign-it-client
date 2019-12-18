import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

/*---- styled components ----*/
import { Nav } from '../styles/global';
import { NavButton } from '../styles/global';
import HeaderHomeButtons from "./HeaderHomeButtons";

/*---- button icons ---- */
import   userEnter  from '../images/account_circle.svg'
import   exit  from '../images/remove_circle.svg'
import   newUser  from '../images/person_add.svg'
import   userLogged  from '../images/user1.svg'



class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        <Nav>
        
          
          {isLoggedin ? (
            <div className="signup-btns">
              <p> <img src={ userLogged } alt= "user" width= "50" /> Hi  {user.username}! </p>

              <NavButton primary onClick={logout}> 
              <img src={ exit } alt= "user" width= "50" /> 
              </NavButton>
            </div>
          ) : (
            <div className="signup-btns">
              <Link to="/login">
               
                <NavButton primary> 
                <img src={ userEnter } alt= "user" width= "50" />
                </NavButton>
              </Link>
              <br />
              <Link to="/signup">
                
                <NavButton primary>
                <img src={ newUser } alt= "user" width= "45" />
                </NavButton>
              </Link>
            </div>
          )}
        </Nav>
        <HeaderHomeButtons/>
      </div>
    );
  }
}

export default withAuth(Navbar);
