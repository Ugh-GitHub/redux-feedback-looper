import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Comments extends Component {
    state = {
        inputText: ''
    }
    componentDidMount = () => {
        this.setState({
            inputText: this.props.reduxState.reviewReducer.comments
        })
    }

    updateStore = () => {
        this.props.dispatch({type: 'COMMENTS_UPDATE', payload: this.state.inputText});
        this.props.history.push('/review');
    }

    handleChange = (event, typeOfKey) => {
        this.setState({
                ...this.state.inputText,
          [typeOfKey]: event.target.value
        });
        console.log(this.state.inputText);
      }
    
    goBack = () => {
        this.props.history.push('/support');
    }

    render(){
        return(
            <div>
                <label htmlFor='Comments'>Comments</label>
                <Input type='text' defaultValue={this.props.reduxState.reviewReducer.comments} onChange={(event) => this.handleChange(event, 'inputText')}></Input>
                <br/>
                <br/>
                <Button variant="contained" onClick={this.goBack}>Edit Previous</Button>
                <span>       </span>
                <Button variant="contained" onClick={this.updateStore}>Next</Button>
                
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const CommentsWithRouter = withRouter(Comments);
export default connect(putReduxStateOnProps)(CommentsWithRouter);