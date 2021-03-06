import React, { Component } from 'react';
import { withAuth } from '../lib/AuthProvider';
import { Link } from 'react-router-dom';
import { Form } from '../styles/elements'
import { Container} from '../styles/global';
import { SubmitBtn } from '../styles/global'

import Navbar from '../components/Navbar';

class Login extends Component {
  state = { username: '', password: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <Navbar />
      
      <Container>
      
        <h1>Login</h1>
        <Form>
        <form onSubmit={this.handleFormSubmit}>
          <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          </div>
          <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          </div>
          <SubmitBtn>
          <input type="submit" value="Login" />
          </SubmitBtn>
        </form>
        </Form>

        
        <SubmitBtn>
        <p>· · ·</p>
        <p>Don't have an account?</p>
        <Link to={'/signup'}>
         Signup
         </Link>
        </SubmitBtn>
        </Container>
        </div>
    );
  }
}

export default withAuth(Login);
