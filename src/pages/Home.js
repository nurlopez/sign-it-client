import React, { Component } from 'react';
import {Container} from '../styles/global';
import logo from '../images/logo192.png';



export default class Home extends Component {
    render() {
        return (
        
        <Container>
        <a href="/"><img src={logo} alt="logo" width="150px" align="middle"/></a> 
        <h1>SIGN IT</h1>
                  
        </Container> 
            
        )
    }
}



