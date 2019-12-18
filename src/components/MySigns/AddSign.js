import React, { Component } from "react";
import addSign from "../../images/add-sign.png";
import mySignService from "../../lib/mysign-service";



export default class AddSign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: "",
      meaning: "",
      pictoURL: "",
      isFormShowing: false,
      isButtonShowing: true
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { imageURL, meaning, pictoURL } = this.state;
    const { author } = this.props;
    
    mySignService.createSign({imageURL, meaning, pictoURL, author})
    .then((sign) => {
      console.log('es una signcard?', sign);
      this.toggleForm()
         
       })
    .catch((error) => console.log(error))

    
  }

  toggleForm = () =>
    this.setState({
      isFormShowing: !this.state.isFormShowing,
      isButtonShowing: !this.state.isButtonShowing
    });

    fileChange = (event) => {
      const file = event.target.files[0];
      console.log('es un archivo?', file);
      
      const uploadData = new FormData()
      uploadData.append('photo', file)
      mySignService.imageUpload(uploadData)
      .then((image) => {
        console.log('es una imagen?', image);
          this.setState({ imageURL: image })
      })
      .catch((error) => console.log(error))
    }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div>
        {this.state.isButtonShowing ? (
          <div>
            <img src={addSign} alt="sign" width="100px" />
            <button onClick={this.toggleForm}> Add my sign </button>
          </div>
        ) : null}

        {this.state.isFormShowing ? (
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

              {/* <input
                name="pictoURL"
                placeholder="PictoURL"
                value={this.state.pictoURL}
                onChange={e => this.handleChange(e)}
              /> */}
              <br></br>
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
