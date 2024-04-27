import React, { Component } from 'react'
import LifecycleB from './LifecycleB';
export class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'mikun'
      }
      console.log("LifecycleA:constructor");
    }
    
    static getDerivedStatesFromProps(props,state){
        console.log("LifecycleA : getDerivedStateFromProps");
        return null;
      }

      componentDidMount(){
        console.log("LifecycleA : componentDidMount");
      }
  render() {
    console.log("LifecycleA : render");
    return (

      <div>
        LifecycleA
        <LifecycleB></LifecycleB>
      </div>
    )
  }
}

export default LifecycleA
