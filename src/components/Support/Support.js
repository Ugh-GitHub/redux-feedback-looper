import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

class Support extends Component {
    state = {
        inputText: ''
    }
    componentDidMount = () => {
        this.setState({
            inputText: this.props.reduxState.reviewReducer.support
        })
    }

    updateStore = () => {
        this.props.dispatch({type: 'SUPPORT_UPDATE', payload: this.state.inputText});
        this.props.history.push('/comments');
    }

    handleChange = (event, typeOfKey) => {
        this.setState({
                ...this.state.inputText,
          [typeOfKey]: event.target.value
        });
        console.log(this.state.inputText);
      }

    goBack = () => {
        this.props.history.push('/understanding');
    }

    render(){
        return(
            <div>
                <label htmlFor='Support'>Support</label>
                {/* <input type='number' onChange={(event) => this.handleChange(event, 'inputText')}></input> */}
                <Select defaultValue={this.props.reduxState.reviewReducer.support} onChange={(event) => this.handleChange(event, 'inputText')}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Select>
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
  
const SupportWithRouter = withRouter(Support);
export default connect(putReduxStateOnProps)(SupportWithRouter);