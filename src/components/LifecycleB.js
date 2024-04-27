import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'mikun'
      }
      console.log("LifecycleB:constructor");
    }
    
    static getDerivedStatesFromProps(props,state){
        console.log("LifecycleB : getDerivedStateFromProps");
        return null;
      }

      componentDidMount(){
        console.log("LifecycleB : componentDidMount");
      }
  render() {
    console.log("LifecycleB : render");
    return (

      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecycleB
