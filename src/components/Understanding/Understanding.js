import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';

class Understanding extends Component {
    state = {
        inputText: ''
    }

    updateStore = () => {
        this.props.dispatch({type: 'UNDERSTANDING_UPDATE', payload: this.state.inputText});
        this.props.history.push('/support')
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
            <div>
                <label htmlFor='Understanding'>Understanding</label>
                <input type='text' onChange={(event) => this.handleChange(event, 'inputText')}></input>
                
                        
                
                {this.state.inputText.length > 0 ?
                    <button onClick={this.updateStore}>Next</button>
                :
                    <button disabled>Next</button>
                }
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const UnderstandingWithRouter = withRouter(Understanding);
export default connect(putReduxStateOnProps)(UnderstandingWithRouter);