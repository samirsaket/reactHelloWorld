import React , {Component} from 'react';


class LifeCycleDemo extends Component{

// 
 constructor(){
     super()
     this.state = {
        count : 0
    }
 }

 componentDidMount(){
     // your project requirement 
     console.log('componentDidMount is called after component has beedn added to DOM');
 }

 componentWillMount(){
     // your project reuirement
   console.log('componentWillMount is called before component is being added to DOM');
 }

componentDidUpdate(){
    // your project requirement
    console.log('componentDidUpdate is called when the component is being updated by change of state and props');
}

componentWillReceiveProps(){
    console.log('componentWillReceiveProps is called')
}

componentWillUnmount(){
    console.log('component is unmounted');
}

incremental(){

 this.setState({
   count : this.state.count + 1  
 },()=> {console.log('console log',this.state.count)})
 console.log(this.state.count)
 

}


 // renders
 render(){
    return(
    <div>
    
    {console.log('component loaded')}
    <div>Well a Life cycle method demo of class component</div>
    <div>count - {this.state.count}</div>
    <div>props is being passed as {this.props.name}</div>
<button onClick={()=>this.incremental()}>clickMe</button>
     </div>
    )
    }

}

export default  LifeCycleDemo;