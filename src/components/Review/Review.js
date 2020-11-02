import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class Review extends Component {
    submitReview = () => {
        // submit the data to the database and then clear the store
        console.log('clicked submitReview');
        axios.post('/reviews', this.props.reduxState.reviewReducer).then((response) => {
            this.props.dispatch({type: 'NEW_REVIEW', payload: response.data})
        }).catch((error) => {
            console.log(error);
        });
        // After submitting to the database, kick over to the submitted page
        this.props.history.push('/submitted');
    }

    render(){
        return(
            <div>
                {/* display the data from the store */}
                Feeling: {this.props.reduxState.reviewReducer.feeling}
                <br/>
                Understanding: {this.props.reduxState.reviewReducer.understanding}
                <br/>
                Support: {this.props.reduxState.reviewReducer.support}
                <br/>
                Comments: {this.props.reduxState.reviewReducer.comments} 

                <button onClick={this.submitReview}>Submit</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const ReviewWithRouter = withRouter(Review);
export default connect(putReduxStateOnProps)(ReviewWithRouter);