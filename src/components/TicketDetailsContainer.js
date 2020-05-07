import React from 'react';
import { connect } from 'react-redux';
import {fetchticketdetail,formdisplay} from '../actions/ticketactions';
import TicketDetails from './TicketDetails';
import {eventDetails} from '../actions/eventactions';

class TicketDetailsContainer extends React.Component{
   

    componentDidMount(){
        this.props.fetchticketdetail(Number(this.props.match.params.eventId), Number(this.props.match.params.id))
        this.props.eventDetails(Number(this.props.match.params.eventId))
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.formdisplay()
    }

    render(){
        return(
            <React.Fragment>
                <TicketDetails event={this.props.eventinfo} 
                    ticket={this.props.ticketinfo}
                    id={Number(this.props.match.params.eventId)}
                    onSubmit={this.onSubmit}
                    displayForm={this.props.redirectToggle.display}
                />
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        eventinfo: state.eventDetail,
        ticketinfo: state.ticketinfo,
        redirectToggle: state.redirect,
    }
}

export default connect(mapStateToProps,{fetchticketdetail,eventDetails,formdisplay})(TicketDetailsContainer)