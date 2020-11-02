import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';

class Support extends Component {
    state = {
        inputFilled: 0,  // inputFilled.length, used to capture that the input has at least SOMETHING in it. 
                        // Could increase the # in the conditional to increase the minimum character requirement
        // updateStore  // A function for dispatching the output to the index.js file
        nextRoute: ''   // nextRoute is a string, used to indicate where to go next in the review submission process
    }

    render(){
        return(
            <>
                
                
            </>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
  export default connect(putReduxStateOnProps)(Support);