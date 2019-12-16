import React, { Component } from "react";

import { ContainerSigns, Signcard } from "../../styles/elements";

export default class ResourceList extends Component {
  render() {
    return (
      <ContainerSigns>
        {this.props.resources.length === 0 ? (
          <p> choose a category </p>
        ) : (
          this.props.resources.map(resource => {
            console.log("here?", resource);
            return (
              <Signcard key={resource._id}>
                <img
                  src={resource.imgURL}
                  alt={`sign for ${resource.meaning}`}
                  width="100px"
                />
                <p> {resource.meaning} </p>{" "}
              </Signcard>
            );
          })
        )}
      </ContainerSigns>
    );
  }
}
