import React, { Component } from 'react'

export class CFunctionClick extends Component {
  constructor(props){
    super(props);
    this.changeEvent = this.changeEvent.bind(this);

    this.state={
      course:"MCA",
      clg:this.props.clg
    }
  }  
  
  changeEvent=()=>{
      this.setState({
        course:"MBA"
      })
        console.log("hello Jyoti", this.props.clg);
    }
  render() {
    const numbers=this.props.numbers;
    const newNumbers = numbers.map(function(numbers,index){
      console.log(numbers);
      return<li>{numbers}</li>
    });
    return (
      <div>
        <button onClick={this.changeEvent}> Click Me </button>
        {this.props.clg}
        <ul>{newNumbers}</ul>
      </div>
    )
  }
}

export default CFunctionClick
