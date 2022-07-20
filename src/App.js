import './App.css';
import React, { Component } from 'react'
import Profile from './components/Profile';


  export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = { show:false};
    }
  
        toggle=()=>{
          this.setState({show:!this.state.show})
        }
      
  render() {
    return (
      <div>
        <button onClick={this.toggle}>show/hide </button>
        {this.state.show? <Profile/>:null}

      </div>
    )
  }
  }
  
