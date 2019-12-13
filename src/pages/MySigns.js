import React, { Component } from 'react';

import sign from '../images/sign.png';
import addSign from '../images/add-sign.png';

class MySigns extends Component {
  render() {
    return (
      <div>
        
        <h1>My Signs</h1>
        <div>
        <img src ={addSign} alt="sign" width= "100px" />
        <button>add new-sign</button>
        </div>

        <h2>My Collection</h2>
        <div className="sign">
        <img src ={sign} alt="sign" width= "100px" />
        <button>edit my-sign</button>
        <button>view my-sign</button>
      </div>
      
      <div className="sign">
        <img src ={sign} alt="sign" width= "100px" />
        <button>edit my-sign</button>
        <button>view my-sign</button>
      </div>

      <div className="sign">
        <img src ={sign} alt="sign" width= "100px" />
        <button>edit my-sign</button>
        <button>view my-sign</button>
      </div>

      </div>
    );
  }
}

export default MySigns;
