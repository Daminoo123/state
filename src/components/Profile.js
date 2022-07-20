import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
    this.person={
      name:'amine',
      job:'student',
      img :'https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png'
    }
  }
    componentDidMount(){
      setInterval(() => {
        this.setState(prevstate=>({
          count:prevstate.count+1
        }))
        
      }, 1000);
    }
  render() {
    return (
      <div>
        <h2>{this.person.name}</h2> <hr/>
        <h2>{this.person.job}</h2>
        <p>{this.person.img}</p>
       <p>{this.state.count}</p> 

      </div>
    )
  }
}

