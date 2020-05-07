import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/useractions';
import SignIn from './SignIn';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

class SignInContainer extends React.Component{

    state = {
        email: '',
        password: '',
    } 

    componentDidUpdate(){
        if(this.props.user.jwt && this.props.user.message){
            this.props.history.push('/')
        }
    }


    onChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
   

    onSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state)
        this.setState({
            name: '',
            date: '',
            description: ''
        })
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <Typography align="center" color="textPrimary">{this.props.message}</Typography>
                <SignIn onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state} />
            </React.Fragment>
            
        )        
    }
}

const mapStateToProps = (state) => ({
     user: state.user,
     message: state.messages
})

export default connect(mapStateToProps,{login})(SignInContainer)