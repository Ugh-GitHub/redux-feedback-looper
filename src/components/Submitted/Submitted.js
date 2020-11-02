import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';

class Submitted extends Component {
    
    render(){
        return(
            <div>
                Thanks for submitting a review!
                
            </div>
        )
    }
}

// This is unneccesary. However, I'm against a deadline and sleep is better.
const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
  export default connect(putReduxStateOnProps)(Submitted);