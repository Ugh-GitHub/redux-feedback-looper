import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';

class Feeling extends Component {
    state = {
        inputText: ''
    }

    // dispatch the input to the store, and then kick over to the next page
    updateStore = () => {
        this.props.dispatch({type: 'FEELING_UPDATE', payload: this.state.inputText});
        this.props.history.push('/understanding');
    }

    // handleChange is there to capture all the input keys and hold them in state until the user submits
    handleChange = (event, typeOfKey) => {
        this.setState({
                ...this.state.inputText,
          [typeOfKey]: event.target.value
        });
        console.log(this.state.inputText);
      }

    render(){
        return(
            <div>
                <label htmlFor='Feeling'>Feeling</label>
                {/* <input type='number' onChange={(event) => this.handleChange(event, 'inputText')}></input> */}
                {/* Dropdown from 1-5 */}
                {/* Tried a value property for the select input going to the redux store, 
                but caused two problems: 1. Would have needed a whole conditional to  
                not go to the redux store for the first input to avoid a visual bug
                2. Was bringing it up visually when the user went back a page, but disabled
                the button conditional. If I had more time I would test/play around more*/}
                <select onChange={(event) => this.handleChange(event, 'inputText')}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br/>        
                <br/>
                {this.state.inputText.length > 0 ?
                    <button onClick={this.updateStore}>Next</button>
                :
                    <button disabled>Next</button>
                }
            </div>
        )
    }
}

// Could not get the dang links to work for the life of me. Idk why (tried asking someone else)
// Tom suggested withRouter, did the trick

// putReduxStateOnProps is the way to get stuff from the redux store. It isn't needed, but sleep
// connect()(FeelingWithRouter) is needed however in order to submit to the store
// Also note that I'm adding these comments at the end, so the same things apply to the other
// "copy pages" (Understanding, Support, & Comments)
const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const FeelingWithRouter = withRouter(Feeling);
export default connect(putReduxStateOnProps)(FeelingWithRouter);