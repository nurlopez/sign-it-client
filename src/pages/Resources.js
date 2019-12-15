import React, { Component } from "react";
// import resourcesService from '../lib/resources-service'; // IMPORT functions for axios requests to API
import ResourceHomeBtns from "../components/resources/ResourceHomeBtns";


export class Resources extends Component {
  render() {
    return (
      <div>
        <h1>Resources</h1>
        <ResourceHomeBtns />
        
       
        
      </div>
    );
  }
}

export default Resources;
