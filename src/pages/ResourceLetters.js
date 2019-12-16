import React, { Component } from "react";
import ResourceHomeBtns from "../components/resources/ResourceHomeBtns";
import ResourceList from "../components/resources/ResourceList";
// import imgURL from '../images/abc.gif';
// import resourcesService from '../lib/resources-service'; // IMPORT functions for axios requests to API
// import ResourceLettersList from "../components/resources/ResourceLettersList";
// import ResourceSignCard from "../pages/ResourceSignCard";

export class ResourceLetters extends Component {
  render() {
    return (
      <div>
       <br></br>
       <ResourceHomeBtns />
        <h1>Resources - Letters</h1>
       
        <ResourceList />
            {/* <br></br>
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
      </table>
         */}
      </div>
    );
  } 
}

export default ResourceLetters;
