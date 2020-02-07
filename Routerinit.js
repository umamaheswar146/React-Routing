import React, { Component } from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Navcomp from './Navcomp';
import Home from './Home';
import About  from './About';
import Data from './Data'
 class Routerinit extends Component {
    constructor(props) {
        super(props)
        this.state = {
             showMe:true
        }
    }
    Buttondata=()=>{
    this.setState({
      showMe:false
    })
    }
     
    render() {
        return (
            <div>
     <Router>
        
               {
                 this.state.showMe?<Navcomp/>:null
               }
          <Route exact strict path="/About"><About clichandler={this.Buttondata}/></Route>
          <Route exact strict path="/Home" component={Home}/>
          <Route exact strict path="/Button" component={Data}/>
              
      </Router>
            </div>
        )
    }
}
export default Routerinit