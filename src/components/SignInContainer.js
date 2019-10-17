import React from 'react'
import {connect} from 'react-redux'
import {changeEventLogin} from '../actions/useractions'
import {submitEvent} from '../actions/useractions'
import {login} from '../actions/useractions'
import SignIn from './SignIn'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

class SignInContainer extends React.Component{


    componentDidUpdate(){
        console.log(this.props.user)
        if(this.props.user.jwt && this.props.user.message){
            this.props.history.push('/')
        }
    }

    onChange = (event) => {
        this.props.changeEventLogin(event.target.name, event.target.value)
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.props.values)
        // if(this.props.user.message === "User logged In successfully"){
        //     this.props.history.push('/home')
        // }
        //this.props.submitEvent()
        //this.props.history.push('/home')
    }

    render(){
        return (
            <React.Fragment>
                 <CssBaseline />
               <Typography align="center" color="textPrimary">{this.props.message}</Typography>
                <SignIn onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.props.values} />
            </React.Fragment>
            
        )        
    }
}

const mapStateToProps = (state) => ({
     values:state.login,
     user: state.user,
     message: state.messages
})

export default connect(mapStateToProps,{changeEventLogin,login})(SignInContainer)