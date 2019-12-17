import React, { Component } from "react";
import ResourceHomeBtns from "../components/resources/ResourceHomeBtns";
import ResourceList from "../components/resources/ResourceList";
import Navbar from '../components/Navbar';

import resourcesServices from "../lib/resources-service";



export class Resources extends Component {
  state = {
    listOfResources: []
  };

  getResourceHandler = (category) => {
    
     resourcesServices.getAllResources(category)
    .then( (allResources) => {
      console.log(allResources)
      this.setState({listOfResources : allResources})
      console.log('uola', allResources)
    })
    .catch( (err) => console.log(err));
  }


  render() {
    return (

      <div>
      <Navbar />
      
        <h1>Resources</h1>
        <ResourceHomeBtns handleResults={this.getResourceHandler}/>

        
        <ResourceList resources={this.state.listOfResources}/>
    
        
      </div>
    );
  }
}

export default Resources;
