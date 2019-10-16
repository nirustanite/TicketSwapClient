import React from 'react'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {logout} from '../actions/useractions'
import { connect } from 'react-redux';

class Logout extends React.Component{

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.logout();
        this.props.history.push('/');
    }

    render(){
        return(
            <React.Fragment>
                <Typography>Want to Logout????</Typography>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmit}
                >
                    Logout
                </Button>
            </React.Fragment>
        )
    }
}

export default connect(null,{logout})(Logout)