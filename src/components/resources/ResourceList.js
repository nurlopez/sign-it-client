import React, { Component } from "react";

import { Link } from "react-router-dom";
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
      
        return (
        <Link 
          to={`/resources/categories/${resource.category}`}
          key={resource}
          className="resource"
        >
          {" helloletters"}
          {resource.category}
                </Link>
      );
    });
    return (
      <div>
        {allResources}{" hola"}
      </div>
    );
  }
}
