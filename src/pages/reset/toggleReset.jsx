import React, { Component } from 'react';
import Resetpassword from './resetpassword';

class ToggleReset extends Component {
    state = {  
        show: true,
    } 

    ToggleReset = () => this.setState((currentState) => ({show: !currentState.show}));

    render() { 
        return (
            <div>
            <button onClick={this.toggleReset}>
              toggle: {this.state.show ? 'show' : 'hide'}
            </button>    
            {this.state.show && <div><Resetpassword/></div>}
          </div>
        );
    }
}
 
export default ToggleReset;