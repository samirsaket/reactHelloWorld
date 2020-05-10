import React, { Component } from 'react'

/*This component has been created to demonstarte the state object of an Component.
A state is an private object which a given component maintains to come out 
the demrits of props object which is immutatable.

Sate can be changed within the component .

setState set the new state object in the component .

*/


class Message  extends Component {

constructor(){
    super()
    this.state = {
        message : 'Welcome Visitor'
    }
}

chnageMessage(){
    this.setState({
        message : 'Thanks for Subscribing'

    })
}


render(){
    return (
     <div> 
    <h1>{this.state.message}</h1>
    <button onClick = {() => this.chnageMessage()}>subscriber</button>
    </div>
    )
  }
}

export default Message;