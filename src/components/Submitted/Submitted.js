import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
                <Button variant="contained" onClick={this.restart}>Submit a new response</Button>
            </div>
        )
    }
}

// This is unneccesary. However, I'm against a deadline and sleep is better.
const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
  export default connect(putReduxStateOnProps)(Submitted);