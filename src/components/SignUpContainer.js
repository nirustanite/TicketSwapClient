import React from 'react';
import {connect} from 'react-redux';
import SignUp from './SignUp';
import {redirect,signup} from '../actions/useractions';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

class SignUpContainer extends React.Component{


    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
       
    } 

   onChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
   }

   componentDidUpdate(){
       if(this.props.redirectToggle.redirect){
           if(this.props.message === 'User Created Successfully! Please Login. You will be redirected to Login Page')
             {
               setTimeout(() => {
                  this.props.history.push('/login')
                 }, 2500);
             }
       }
   }

   onSubmit = (event) => {
       event.preventDefault()
       this.props.signup(this.state)
       this.props.redirect()

   }
   render(){
       return(
           <React.Fragment>
               <CssBaseline />
               <Typography align="center" color="textPrimary">{this.props.message}</Typography>
           <SignUp
           onSubmit={this.onSubmit}
           onChange={this.onChange}
           values={this.state} />
           </React.Fragment>
       )
   }
}
const mapStateToProps = (state) => {
   return{
       message: state.messages,
       redirectToggle:state.redirect
   }
}


export default connect(mapStateToProps,{signup,redirect})(SignUpContainer)