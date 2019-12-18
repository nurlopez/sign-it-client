import React, { Component } from 'react';
import mySignService from "../../lib/mysign-service";
import { Form, Button } from '../../styles/elements'
import { Container } from '../../styles/global'


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
     .then( () => {
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
        <Container>
        <Form>
        
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

          <Button onClick={this.handleEditSubmit}>
          Update
          </Button>
        
        </Form>
        </Container>
      </div>
    )
  }
}

export default EditProject;