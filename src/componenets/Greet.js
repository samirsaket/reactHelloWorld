import React from 'react'

/*
This is an example to define the Function Compenent

General Rule to define a function  compenent : 

1. A given function componenet should be in the Js file .
2. Import the react component in your Js File 
3. Declare Function Component which shall return a HTML (Which is a JSX)
4. Export your component so that it can used anywhere in the application. 
5. Here we are using the default keyword when we import the Greet compenent 
   Which allow to rename it while we import this component in any other component.
   
   

*/



//function Greet(){
//    return <h1>Welcome samir to react JS world</h1>
//}

// We can also define the JS function as per ES6 convensions. If you do not know 
// the ES6 arrow expression to write the go have an look .

//const Greet = () => <h1>Welcome samir to react JS world</h1> 
   
// Example of props property being passed as a part of input parameter of the compoenent function.
// At a High Level props is an object which bundles the different attribute which are
// passed from the component and its immputable (u cannot change state of the prop object)
const Greet = (props) => {
 
 return (
<div>
<h1>Hi {props.name}  a.k.a. {props.heroName}</h1> 
{props.children}
</div>
 )
}

export default Greet