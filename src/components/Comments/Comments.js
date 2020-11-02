import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';

class Comments extends Component {
    state = {
        inputText: ''
    }

    updateStore = () => {
        this.props.dispatch({type: 'COMMENTS_UPDATE', payload: this.state.inputText});
        this.props.history.push('/review')
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
                <label htmlFor='Comments'>Comments</label>
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
  
const CommentsWithRouter = withRouter(Comments);
export default connect(putReduxStateOnProps)(CommentsWithRouter);