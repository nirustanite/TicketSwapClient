import React from 'react'
import {connect} from 'react-redux'
import {eventDetails} from '../actions/eventactions'
import TicketList from './TicketList'
import {fetchTickets} from '../actions/ticketactions'
import {formdisplay} from '../actions/ticketactions' 

class TicketListContainer extends React.Component{
    componentDidMount(){
        this.props.eventDetails(Number(this.props.match.params.id))
        this.props.fetchTickets(Number(this.props.match.params.id))
    }


    onSubmit = (e) => {
        e.preventDefault()
        this.props.formdisplay()
        
    }

    render(){
        return(
            <React.Fragment>
                <TicketList details={this.props.eventinfo} 
                    tickets={this.props.listOftickets}
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
        listOftickets: state.tickets,
        redirectToggle: state.redirect
    }
}

export default connect(mapStateToProps,{eventDetails,fetchTickets,formdisplay})(TicketListContainer)