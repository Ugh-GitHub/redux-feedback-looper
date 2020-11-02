import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';

class Understanding extends Component {
    state = {
        inputText: ''
    }

    updateStore = () => {
        this.props.dispatch({type: 'UNDERSTANDING_UPDATE', payload: this.state.inputText});
        this.props.history.push('/support');
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
                {/* <input type='number' onChange={(event) => this.handleChange(event, 'inputText')}></input> */}
                <select id="inputText" name="inputText" onChange={(event) => this.handleChange(event, 'inputText')}>
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

const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const UnderstandingWithRouter = withRouter(Understanding);
export default connect(putReduxStateOnProps)(UnderstandingWithRouter);