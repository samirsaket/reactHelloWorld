import React , {Component} from 'react'


/*
Always make use of setState and never moficy the state direclty

Whenever any code needs to be executed on the state of the Object place that code on the callback function which is second 
argument of setState .


*/

class Counter extends Component{

    constructor(props){
       super(props)
       this.state = {
           count : 0
       }
    }

    incremental(){

        this.state.

     this.setState({
       count : this.state.count + 1  
     },()=> {console.log('console log',this.state.count)})
     console.log(this.state.count)
    }




render(){
return(
<div>
<div>count - {this.state.count}</div>
<button onClick={()=>this.incremental()}>clickMe</button>
 </div>
)
}
}


export default Counter