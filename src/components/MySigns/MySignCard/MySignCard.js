import React, { Component } from 'react';
import EditMySignCard from './EditMySignCard';
import MySignContent from './MySignContent';
import { Signcard } from '../../../styles/elements';



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
    console.log('prevProps hi' ,prevProps);
    console.log('Props hi' , this.props);

}

toggleEditForm = () =>
    this.setState({
      isMySignContentShowing: !this.state.isMySignContentShowing,
      isEditMySignCardShowing: !this.state.isEditMySignCardShowing
    });


    render() {
        return (
            <Signcard>
            {this.state.isMySignContentShowing && this.state.sign ? (
          
                <MySignContent sign={this.state.sign} toggleEditForm={this.toggleEditForm} />
                
                ) : null}
                
                {this.state.isEditMySignCardShowing ? (

                    <EditMySignCard  sign={this.state.sign} handleGetSignCards={this.props.handleGetSignCards} toggleEditForm={this.toggleEditForm}/>

                ) : null}
            
            </Signcard>
        )
    }
}

