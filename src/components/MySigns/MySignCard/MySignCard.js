import React, { Component } from 'react';
import EditMySignCard from './EditMySignCard';
import MySignContent from './MySignContent';
import { Signcard, SignCardBackground } from '../../../styles/elements';



export default class MySignCard extends Component {
    state = {
        sign: null,
        isEditMySignCardShowing: false,
        isMySignContentShowing: true
      };
    
componentDidMount() {
this.setState ({sign: this.props.sign})
}

componentDidUpdate(prevProps) {
    if (prevProps.sign.meaning !== this.props.sign.meaning) {
        this.setState({sign: this.props.sign})
    }


}

toggleEditForm = () =>
    this.setState({
      isMySignContentShowing: !this.state.isMySignContentShowing,
      isEditMySignCardShowing: !this.state.isEditMySignCardShowing
    });


    render() {
        return (
        <SignCardBackground>
            <Signcard>
            {this.state.isMySignContentShowing && this.state.sign ? (
          
                <MySignContent sign={this.state.sign} toggleEditForm={this.toggleEditForm} handleGetSignCards={this.props.handleGetSignCards} />
                
                ) : null}
                
                {this.state.isEditMySignCardShowing ? (

                    <EditMySignCard  sign={this.state.sign} handleGetSignCards={this.props.handleGetSignCards} toggleEditForm={this.toggleEditForm}/>

                ) : null}
            
            </Signcard>
            </SignCardBackground>
        )
    }
}

