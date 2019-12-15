import React, { Component } from "react";
// import ResourceTestList from "../components/resources/ResourceTestList";
// import  { allResources } from "../components/resources/ResourceList";
import axios from 'axios';
// import resourcesService from '../lib/resources-service'; // IMPORT functions for axios requests to API


export class ResourceSignCard extends Component {
    state = { 
        id: this.id,
    };

        getResourceSignCard = () => {
    axios
      .get("http://localhost:5000/resources/:id")
      .then(response => {

        const resourceSignCard = response.data.id;
        // console.log("whoddat?", response.data); // returns all
        this.setState({ resourceSignCard  });
        // console.log("state", resourceSignCard); // returns all
      })
      .catch(err => console.log(err));
  };

  componentDidMount(){
    this.getResourceSignCard();
}
  render() {
    return (
      <div>
      <h2> {this.state.category}</h2>
        <h2>A</h2>
        <p>{this.state.imgURL}</p>
        <p>{this.state.meaning}</p>
        <p>{this.state.pictoURL}</p>
        {/* <ResourceTestList /> */}
        {/* <button onClick={this.props.history.goBack} >Go Back</button> */}
         
      </div>
    );
  } 
}

export default ResourceSignCard;
