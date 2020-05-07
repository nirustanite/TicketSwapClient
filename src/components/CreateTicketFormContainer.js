import React from 'react';
import CreateTicketForm from './CreateTicketForm';
import {changeEventTickets,createTicket,updateformdisplay} from '../actions/ticketactions';
import {connect} from 'react-redux';

class CreateTicketFormContainer extends React.Component{

    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null
          }
       
      }

      onChange = (event) =>{
        this.props.changeEventTickets(event.target.name, event.target.value)
      }

      onSubmit = (event) => {
        event.preventDefault()
        console.log(this.props.eventinfo.id,this.props.values,this.state.selectedFile)
        this.props.createTicket(this.props.eventinfo.id,this.props.values,this.state.selectedFile)
       
        this.props.updateformdisplay()

     }

      onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
          })
    }

    render(){
        
        return(
            <React.Fragment>
                    <br />
                    {this.props.user.jwt && <input type="file" name="file" onChange={this.onChangeHandler}/>}
                    <CreateTicketForm
                    onValueChange={this.onChange}
                    values={this.props.values}
                    onSubmit={this.onSubmit}/>
                
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        values: state.ticketDetail,
        user:state.user,
        eventinfo: state.eventDetail,
    }
}

export default connect(mapStateToProps,{changeEventTickets,createTicket,updateformdisplay})(CreateTicketFormContainer)
