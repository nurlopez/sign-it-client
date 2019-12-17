import React, { Component } from 'react'
import addSign from '../../images/add-sign.png';
import axios from 'axios';


export default class AddSign extends Component {
    constructor(props){
        super(props);
        this.state =
        {
            imageURL:'',
            meaning:'',
            pictoURL:'',
            isFormShowing: false,
            isButtonShowing: true
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { imageURL, meaning, pictoURL } = this.state;
        const { author } = this.props;

        axios
        .post("http://localhost:5000/mysigns/create-sign", { imageURL, meaning, pictoURL, author}, {withCredentials: true})
        .then(() => {
        this.props.getMySigns();
        this.setState({ imageURL:'', meaning:'', pictoURL:''})
    })
        .catch(err => console.log(err));
};

toggleForm = () => this.setState({
  isFormShowing: !this.state.isFormShowing,
  isButtonShowing: !this.state.isButtonShowing,
});

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

    render() {
        return (
            <div>
               
{
  this.state.isButtonShowing ?
  (
    <div>
    <img src ={addSign} alt="sign" width= "100px" />
               <button onClick={this.toggleForm}> Add my sign </button> </div>
               )
               :
               null
}


        {
          this.state.isFormShowing ?
          (<div>
            <form>
              <input type="file" placeholder='ImageURL'
                name="imageURL" onChange={ (e) => this.handleChange(e)}/>
              
              <input name="meaning" placeholder='Meaning'
                value={this.state.meaning}
                onChange={ (e) => this.handleChange(e)} />

            <input name="pictoURL" placeholder='PictoURL'
                value={this.state.pictoURL}
                onChange={ (e) => this.handleChange(e)} />
              <br></br>
              <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
          </div>)
          : null
        }
      </div>
    )
  }
}























