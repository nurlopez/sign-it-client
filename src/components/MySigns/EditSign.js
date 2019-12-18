// components/projects/EditProject.js

import React, { Component } from 'react';
import mySignService from "../../lib/mysign-service";

class EditProject extends Component {
  constructor(props){
    super(props);
    this.state = {
        imgURL: this.props.mySign.imgURL, 
        meaning: this.props.mySign.meaning
        
    }
  }
     
  handleEditSubmit = (event) => {
    event.preventDefault();
    const { imgURL, meaning } = this.state;
      
    mySignService.updateMySign({imgURL, meaning,})
     .then( (updatedSign) => {
      this.props.getOneMySign();
      this.props.history.push('/mysigns');    
      // after submitting the form, redirect to '/mysigns'
    })
     .catch( (err) => console.log(err) )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render(){
    return (
        <div>
        <form>
          <input
            type="file"
            placeholder="ImageURL"
            name="imageURL"
            onChange={e => this.fileChange(e)}
          />

          <input
            name="meaning"
            placeholder="Meaning"
            value={this.state.meaning}
            onChange={e => this.handleChange(e)}
          />

          <br></br>
          <button onClick={this.handleEditSubmit}>Update</button>
        </form>
      </div>
    )
  }
}

export default EditProject;