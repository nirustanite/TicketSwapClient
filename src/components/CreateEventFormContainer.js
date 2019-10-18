import React from 'react'
import CreateEventForm from './CreateEventForm'
import {updateformdisplay} from '../actions/ticketactions'
import{changeEvents,createEvent} from '../actions/eventactions'
import {connect} from 'react-redux'


class CreateEventFormContainer extends React.Component{

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }

      onChange = (event) =>{
        this.props.changeEvents(event.target.name, event.target.value)
      }

      onSubmit = (event) => {
        event.preventDefault()
        //console.log(this.props.eventinfo.id,this.props.values,this.state.selectedFile)
        this.props.createEvent(this.props.values,this.state.selectedFile)
        this.props.updateformdisplay()

     }

      onChangeHandler=event=>{
        console.log("onChange")
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    render(){
        
        return(
            <React.Fragment>
                    {this.props.user.jwt && <input type="file" name="file" onChange={this.onChangeHandler}/>}
                    <CreateEventForm
                    onValueChange={this.onChange}
                    values={this.props.values}
                    onSubmit={this.onSubmit}/>
                
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        values: state.eventform,
        user:state.user,
    }
}

export default connect(mapStateToProps,{changeEvents,createEvent,updateformdisplay})(CreateEventFormContainer)
