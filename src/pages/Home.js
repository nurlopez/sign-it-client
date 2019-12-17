import React, { Component } from 'react';
import {HomeContainer} from '../styles/global';
import logo from '../images/logo-sign-it.gif';
import SectionButtons from "../components/SectionButtons";



export default class Home extends Component {
    render() {
        return (
        
        <HomeContainer>
        <a href="/"><img src={logo} alt="logo" width="200px" align="middle"/></a> 
        <h1>SIGN IT</h1>
        <SectionButtons />         
        </HomeContainer> 
            
        )
    }
}



