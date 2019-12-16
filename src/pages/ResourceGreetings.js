import React, { Component } from "react";

// import imgURL from '../images/abc.gif';

// import resourcesService from '../lib/resources-service'; // IMPORT functions for axios requests to API
import ResourceList from "../components/resources/ResourceList";
import ResourceHomeBtns from "../components/resources/ResourceHomeBtns";


export class ResourceGreetings extends Component {
  render() {
    return (
      <div>
        <h1>Resources - Greetings</h1>
        <ResourceHomeBtns />
        <ResourceList />
        <br></br>
       {/* <table>
      <tr>
      <td><img src={imgURL}  alt="sign" width= "100px"/></td>
      <td><img src={imgURL}  alt="sign" width= "100px"/></td>
      <td><img src={imgURL}  alt="sign" width= "100px"/></td>
      </tr>
      <tr>
      <td>meaning 1</td>
      <td>meaning 2</td>
      <td>meaning 3</td>
      </tr>
      </table>
      <hr></hr>
      <table>
      <tr>
      <td><img src={imgURL}  alt="sign" width= "100px"/></td>
      <td><img src={imgURL}  alt="sign" width= "100px"/></td>
      <td><img src={imgURL}  alt="sign" width= "100px"/></td>
      </tr>
      
      <tr>
      <td>meaning 1</td>
      <td>meaning 2</td>
      <td>meaning 3</td>
      </tr>
      </table> */}
        
      </div>
    );
  }
}

export default ResourceGreetings;
