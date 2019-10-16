import React from 'react'
import {connect} from 'react-redux'
import {eventDetails} from '../actions/eventactions'
import TicketList from './TicketList'
import {fetchTickets} from '../actions/ticketactions'

class TicketListContainer extends React.Component{
    componentDidMount(){
        this.props.eventDetails(Number(this.props.match.params.id))
        this.props.fetchTickets(Number(this.props.match.params.id))
    }

    render(){
        return(
            <TicketList details={this.props.eventinfo} 
                tickets={this.props.listOftickets}/>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        eventinfo: state.eventDetail,
        listOftickets: state.tickets
    }
}

export default connect(mapStateToProps,{eventDetails,fetchTickets})(TicketListContainer)