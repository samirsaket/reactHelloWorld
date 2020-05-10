import React, { Component } from 'react'

/*
1. class component should extends Component class of React
2. It should implement the render() method and the return type of 
should be either NULL / some HTML(JSX) 
3. Now this is no where connected to the any part of the flow,
   So in order to do so  , We need to follow steps:

   A. export the compenent from here 
   B. Import in the JS where we need to use this compenent.

*/

class Welcome  extends Component {
render(){
    return <h1>This is demo of simple class component {this.props.name}</h1>
  }
}

export default Welcome;