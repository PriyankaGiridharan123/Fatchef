import React, { Component } from 'react'

class Reactref extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first
      }
    }
    focusTextInput
  render() {
    return (
      <div>
      <input type="text" ref={this.textref}/>
      <input type="button" value ="focus the text input" onClick={this.focusTextInput}/></div>
    );
  }
}
export default Reactref;
