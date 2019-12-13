import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ResourceList extends Component {
  state = {
    listOfResources: []
  };

  getAllResources = () => {
    axios
      .get("http://localhost:5000/resources")
      .then(response => {
        const listOfResources = response.data;
        console.log("anything?", response.data); // returns all
        this.setState({
          listOfResources
        });
        console.log("state", listOfResources); // returns all
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getAllResources();
  }
  render() {
    const allResources = this.state.listOfResources.map(resource => {
      return (
        <Link
          to={`/resources/${resource.category}`}
          key={resource._id}
          className="resource"
        >
          {" "}
          Show all
        </Link>
      );
    });
    return (
      <div>
        <p> testing 123 </p> {allResources}{" "}
      </div>
    );
  }
}
