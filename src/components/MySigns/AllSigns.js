import React, { Component } from "react";

import { ContainerSigns, Signcard } from "../../styles/elements";

export default class AllSigns extends Component {
  render() {
    return (
      <ContainerSigns>
        {this.props.mySigns.length === 0 ? (
          <p> choose a category </p>
        ) : (
          this.props.mySigns.map(sign => {
            console.log("allsigns?", sign);
            return (
              <Signcard key={sign._id}>
                <img
                  src={sign.imgURL}
                  alt={`sign for ${sign.meaning}`}
                  width="100px"
                />
                <p>{sign.meaning}</p>{" "}
              </Signcard>
            );
          })
        )}
      </ContainerSigns>
    );
  }
}
