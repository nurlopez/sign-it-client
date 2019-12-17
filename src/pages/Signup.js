import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

import { Form } from '../styles/elements'
import Navbar from '../components/Navbar';
import { Container, SubmitBtn } from '../styles/global';


class Signup extends Component {
  state = { username: '', password: '' };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //  console.log('Signup -> form submit', { username, password });
    this.props.signup({ username, password }); // props.signup is Provided by withAuth() and Context API
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
        <h1>Sign Up</h1>
        <Form>
        <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          </div>
          <div>

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          </div>
          <SubmitBtn>
          <input type="submit" value="Signup" />
          </SubmitBtn> 
        </form>
        </Form>

        <p>Already have account?</p>
        <Link to={'/login'}> Login</Link>
        </Container>
      </div>
    );
  }
}

export default withAuth(Signup);
