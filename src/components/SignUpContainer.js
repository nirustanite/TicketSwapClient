import React from 'react'
import {connect} from 'react-redux'
import SignUp from './SignUp'
import {redirect,signup,changeEvent} from '../actions/useractions'
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

class SignUpContainer extends React.Component{
   onChange = (event) => {
       this.props.changeEvent(event.target.name, event.target.value)
   }

   componentDidUpdate(){
       console.log("this.props.message",this.props.message)
       console.log(this.props.redirectToggle.redirect)
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
       console.log(this.props.values)
       this.props.signup(this.props.values)
       this.props.redirect()

   }
   render(){
       console.log('render signup comp state message', this.props.values)
       return(
           <React.Fragment>
               <CssBaseline />
               <Typography align="center" color="textPrimary">{this.props.message}</Typography>
           <SignUp
           onSubmit={this.onSubmit}
           onChange={this.onChange}
           values={this.props.values} />
           </React.Fragment>
       )
   }
}
const mapStateToProps = (state) => {
   console.log('state in mapstate to props', state)
   return{
       values: state.createUser,
       message: state.messages,
       redirectToggle:state.redirect
   }
}


export default connect(mapStateToProps,{changeEvent,signup,redirect})(SignUpContainer)