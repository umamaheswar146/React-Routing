import React, { Component } from 'react';
import Navcomp from './Navcomp';
import {Link} from 'react-router-dom'
 class About extends Component {

    render() {
      
        console.log('HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII')
        return (
            <div>
                It Is About Component 
                <br/>
                <button type="button" onClick={this.props.clichandler} class="btn bg-primary"><Link  to='/Button' class="text-white">Click Me</Link></button>
            
            </div>
        )
    }
}
export default About 