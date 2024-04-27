
import React from 'react';

class Channel extends React.Component{

    constructor(){
        super();
        this.state={
            msg : 'Welcome to My Channel'
        }
    }

    subscribe(){
        this.setState( {
            msg:'Thanks For Subscribing our Channel'
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.subscribe()}>Subscribe</button>
            </>
        )
    }
    
}

export default Channel; 