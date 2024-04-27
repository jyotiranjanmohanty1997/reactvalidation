import React from 'react';
import Testing from './Testing';
export class Cheader extends React.Component {
  
  state ={
    users:[
      {id:1,name:"jyoti", class:"A"},
      {id:2,name:"Mikun", class:"B"},
    ]
  }
  render(){
    //console.log(this.state.users)
   /*const NewUser = this.state.users.map(function(users){
      return(
        <h1 key={users.id}>{users.id} {users.name} {users.class}</h1>
      )
    })*/
    return (
      <div>
        <h1>{this.props.name}</h1>
        {
          this.state.users.map(users=>{
            return(
             /* <h1 key={users.id}>
                {users.id}
                {users.name}
                {users.class}
              </h1>*/
              <Testing key={users.id} value={users.name}></Testing>
            )
          })
        }
      </div>
    )
  }
}
export default Cheader;