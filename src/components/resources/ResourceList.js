import React, { Component } from "react";

import resourcesServices from '../../lib/resources-service';


export default class ResourceList extends Component {
  state = {
    listOfResources: []
  };



  componentDidMount() {
    resourcesServices.getAllResources();
  }


  
  render() {
    const allResources = this.state.listOfResources.map(resource => {
      console.log('ResourceList', allResources);
      

    });
    return (
      <div>
        {allResources}{" hola"}
      </div>
    );
  }
}
