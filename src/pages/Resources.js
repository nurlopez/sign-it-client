import React, { Component } from "react";
import ResourceHomeBtns from "../components/resources/ResourceHomeBtns";
import ResourceList from "../components/resources/ResourceList";
import Navbar from '../components/Navbar';

import resourcesServices from "../lib/resources-service";
import { Container } from "../styles/global";



export class Resources extends Component {
  state = {
    listOfResources: []
  };

  getResourceHandler = (category) => {
    
     resourcesServices.getAllResources(category)
    .then( (allResources) => {
      
      this.setState({listOfResources : allResources})
      
    })
    .catch( (err) => console.log(err));
  }


  render() {
    return (

      <div>
      <Navbar />
      <Container>
        <h2>Resources</h2>
        <ResourceHomeBtns handleResults={this.getResourceHandler}/>

        
        <ResourceList resources={this.state.listOfResources}/>
    
        </Container>
      </div>
    );
  }
}

export default Resources;
