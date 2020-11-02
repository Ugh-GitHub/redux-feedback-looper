import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Review extends Component {
    submitReview = () => {
        // submit the data to the database and then clear the store
        console.log('clicked submitReview');
        axios.post('/reviews', this.props.reduxState.reviewReducer).then((response) => {
            
        }).catch((error) => {
            console.log(error);
        });
        // After submitting to the database, kick over to the submitted page
        this.props.history.push('/submitted');
    }

    goBack = () => {
        this.props.history.push('/comments');
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
                <br/>
                <br/>
                <Button variant="contained" onClick={this.goBack}>Edit Previous</Button>
                <span>       </span>
                <Button variant="contained" onClick={this.submitReview}>Submit</Button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const ReviewWithRouter = withRouter(Review);
export default connect(putReduxStateOnProps)(ReviewWithRouter);