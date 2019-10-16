import React from 'react'
import {connect} from 'react-redux'
import {changeEvent} from '../actions/useractions'
import {submitEvent} from '../actions/useractions'
import {login} from '../actions/useractions'
import SignIn from './SignIn'

class SignInContainer extends React.Component{


    componentDidUpdate(){
        console.log(this.props.user)
        if(this.props.user.jwt && this.props.user.message){
            this.props.history.push('/')
        }
    }

    onChange = (event) => {
        this.props.changeEvent(event.target.name, event.target.value)
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
                <SignIn onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.props.values} />
            </React.Fragment>
            
        )        
    }
}

const mapStateToProps = (state) => ({
     values:state.login,
     user: state.user
})

export default connect(mapStateToProps,{changeEvent,login})(SignInContainer)