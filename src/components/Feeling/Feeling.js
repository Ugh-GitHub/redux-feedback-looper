import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link } from 'react-router-dom';
import Button from '../Button/Button';

class Feeling extends Component {
    state = {
        inputText: ''
        //inputFilled: 0,  // inputFilled.length, used to capture that the input has at least SOMETHING in it. 
                        // Could increase the # in the conditional to increase the minimum character requirement
        // updateStore  // A function for dispatching the output to the index.js file
        //nextRoute: ''   // nextRoute is a string, used to indicate where to go next in the review submission process
    }

    updateStore = () => {
        this.props.dispatch({type: 'COMMENTS_UPDATE', payload: this.state.inputText});
    }

    handleChange = (event, typeOfKey) => {
        this.setState({
                ...this.state.inputText,
          [typeOfKey]: event.target.value
        });
        console.log(this.state.inputText);
      }

    render(){
        return(
            <>
                <input type='text' onChange={(event) => this.handleChange(event, 'inputText')}></input>
                {this.state.inputText.length > 0 ?
                    <button onClick={this.updateStore}><Link to='/understanding'>Next</Link></button>
                :
                    <button disabled>Next</button>
                }
                {/* <Button inputFilled={this.state.inputText} updateStore={this.updateStore} nextRoute={this.state.nextRoute} /> */}
            </>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
  export default connect(putReduxStateOnProps)(Feeling);