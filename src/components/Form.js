import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props)
        this.state={
            username:'',
            address:''
        }
    }
    handleusername=(event)=>{
        this.setState({
            username:event.target.value
        });
    }
    handleaddress=(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.address}`)
        event.preventDefault();
    }
render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Enter Your Name</label>
                <input type='text' value={this.state.username} onChange={this.handleusername}/>
            </div>
            <br/>
            <div>
                <label>Enter Your Address</label>
                <textarea value={this.state.address} onChange={this.handleaddress}></textarea>
            </div>
            <button>Submit</button>
        </form>
    )
  }
}

export default Form;
