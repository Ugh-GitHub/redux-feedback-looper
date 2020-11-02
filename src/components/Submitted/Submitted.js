import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';

class Submitted extends Component {
    restart = () => {
        this.props.dispatch({type: 'NEW_REVIEW'})
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                Thanks for submitting a review!
                <br/>
                <br/>
                <button onClick={this.restart}>Submit a new response</button>
            </div>
        )
    }
}

// This is unneccesary. However, I'm against a deadline and sleep is better.
const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
  export default connect(putReduxStateOnProps)(Submitted);