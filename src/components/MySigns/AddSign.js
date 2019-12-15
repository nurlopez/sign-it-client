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
            isShowing: false
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { imageURL, meaning, pictoURL } = this.state;
        const { author } = this.props;

        axios
        .post("http://localhost:5000/mysigns/create-sign", { imageURL, meaning, pictoURL, author}, {withCredentials: true,})
        .then(() => {
        this.props.getMySigns();
        this.setState({ imageURL:'', meaning:'', pictoURL:''})
    })
        .catch(err => console.log(err));
};

toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

    render() {
        return (
            <div>
               <img src ={addSign} alt="sign" width= "100px" />
               <button onClick={this.toggleForm}> Add my sign </button>

        {
          !this.state.isShowing ?
           null
          :
          (<div>
            <form>
              <input type="text" placeholder='ImageURL'
                name="imageURL" value={this.state.imageURL}
                onChange={ (e) => this.handleChange(e)}/>
              
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
        }
      </div>
    )
  }
}























