import React,{Component} from 'react'
import {Button} from 'bootstrap';



class Welcome extends Component {

  constructor(){
      super()
  }

  buttonclickHandler = () => {
   console.log('button is clicked')
  }

  render(){
       console.log('at render method')
      return (
          
          <div>
           {console.log('i am at this lie')}
           This is my firts react class component.
           <Button/>
           <button type="button" className="btn btn-secondary"  onClick={this.buttonclickHandler} > dsdsd</button>

          </div>
      )
  }

}

export default Welcome;




