import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0,
        name:"Priyanka"
      }
    }
    inc=()=>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div><h1>
      <button onClick={this.inc}>Click{this.state.count}</button></h1></div>
    )
  }
}
