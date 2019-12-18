
import React, { Component } from 'react';
import mySignService from "./../../../lib/mysign-service" ;
import {withRouter} from 'react-router-dom';

class EditMySignCard extends Component {
  constructor(props){
    super(props);
    this.state = {
        imgURL: "", 
        meaning: "",
        pictoURL: "",
        _id: ""
        
    }
  }
     
  handleEditSubmit = (event) => {
    event.preventDefault();
    const { imgURL, meaning, pictoURL, _id } = this.state;
      
    mySignService.updateMySign({ imgURL, meaning, pictoURL, _id })
     .then( () => {
    //   this.props.history.push('/mysigns'); 
    this.props.toggleEditForm()
      this.props.handleGetSignCards()


      // after submitting the form, redirect to '/mysigns'
    })
     .catch( (err) => console.log(err) )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  fileChange = (event) => {
    const file = event.target.files[0];
    console.log('es un archivo?', file);
    
    const uploadData = new FormData()
    uploadData.append('photo', file)

    mySignService.imageUpload(uploadData)
    .then((image) => {
      console.log('es una imagen?', image);
        this.setState({ imgURL: image })
    })
    .catch((error) => console.log(error))
  }


  componentDidMount () {
      const { imgURL, meaning, _id } = this.props.sign
      this.setState ({ imgURL, meaning, _id })
  }

  render(){

   
    return (
        <div>
        
        <form>
        <img
            src={this.state.imgURL}
            alt={`sign for ${this.state.meaning}`}
            width="100px"
            />

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

export default withRouter(EditMySignCard)