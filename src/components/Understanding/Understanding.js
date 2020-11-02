import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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

    goBack = () => {
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <label htmlFor='Understanding'>Understanding</label>
                {/* <input type='number' onChange={(event) => this.handleChange(event, 'inputText')}></input> */}
                <select defaultValue={this.props.reduxState.reviewReducer.understanding} onChange={(event) => this.handleChange(event, 'inputText')}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br/>     
                <br/>
                <Button variant="contained" onClick={this.goBack}>Edit Previous</Button>
                <span>       </span>
                {this.state.inputText.length > 0 ?
                    <Button variant="contained" onClick={this.updateStore}>Next</Button>
                :
                    <Button variant="contained" disabled>Next</Button>
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