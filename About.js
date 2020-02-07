import React, { Component } from 'react';
import Navcomp from './Navcomp';
import {Link} from 'react-router-dom'
 class About extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//          showMe:true
//     }
// }
// Buttondata=()=>{
// this.setState({
//   showMe:false
// })
// }
    render() {
      
        console.log('88888888888888888888888888888888888888888888')
        return (
            <div>
                It Is About Component 
                <br/>
                <button type="button" onClick={this.props.clichandler} class="btn bg-primary"><Link  to='/Button' class="text-white">Click Me</Link></button>
               {/* {
                 this.state.showMe?<Navcomp/>:null
               } */}
            </div>
        )
    }
}
export default About 