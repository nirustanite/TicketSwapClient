import React from 'react'
import { connect } from 'react-redux';
import {fetchticketdetail,getRiskValue,addData,updateEvent} from '../actions/ticketactions'
import TicketDetails from './TicketDetails'
import {url} from '../constants'
import {eventDetails} from '../actions/eventactions'

class TicketDetailsContainer extends React.Component{
    source = new EventSource(`${url}/stream`);


    componentDidMount(){
        console.log(Number(this.props.match.params.eventId), Number(this.props.match.params.id))
        this.props.fetchticketdetail(Number(this.props.match.params.eventId), Number(this.props.match.params.id))
        this.props.getRiskValue(Number(this.props.match.params.eventId), Number(this.props.match.params.id))
        this.source.onmessage = event => {
            //console.log('got an event?', event.data)
            const data = JSON.parse(event.data);
            console.log("data is:",data) 
            this.props.addData(data)
        }
        this.props.eventDetails(Number(this.props.match.params.eventId))
    }

    // onSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.formdisplay()
    // }

    render(){
        return(
            <React.Fragment>
                <TicketDetails event={this.props.eventinfo} 
                    ticket={this.props.ticketinfo}
                    data={this.props.streamdata}
                    id={Number(this.props.match.params.eventId)}
                />
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state',state)
    return{
        eventinfo: state.eventDetail,
        ticketinfo: state.ticketinfo,
        streamdata: state.streamdata,
    }
}

export default connect(mapStateToProps,{fetchticketdetail,getRiskValue,addData,eventDetails,updateEvent})(TicketDetailsContainer)