import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

class Admin extends Component {
    
    state = {
        // Here goes all of the reviews from the database
    }

    // Here goes the axios for GET, PUT, & DELETE

    render(){
        return(
            
                <div>
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Flagged</th> {/* Here goes a PUT Req */}
                            <th>Date</th>
                            <th>Delete</th> {/* Here goes a DELETE Req */}
                            
                        </tr>
                        
                    </table>
                </div>
            
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const AdminWithRouter = withRouter(Admin);
export default connect(putReduxStateOnProps)(AdminWithRouter);