import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

class Admin extends Component {
    

    render(){
        return(
            
                <div>
                    
                </div>
            
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState: reduxState
  });
  
const AdminWithRouter = withRouter(Admin);
export default connect(putReduxStateOnProps)(AdminWithRouter);