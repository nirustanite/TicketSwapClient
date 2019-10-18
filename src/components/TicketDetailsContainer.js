import React from 'react'
import { connect } from 'react-redux';
import {fetchticketdetail,getRiskValue,addData,updateEvent,formdisplay} from '../actions/ticketactions'
import TicketDetails from './TicketDetails'
import {url} from '../constants'
import {eventDetails} from '../actions/eventactions'
import {getComments} from '../actions/commentactions'

class TicketDetailsContainer extends React.Component{
    source = new EventSource(`${url}/stream`);


    componentDidMount(){
        console.log(Number(this.props.match.params.eventId), Number(this.props.match.params.id))
        this.props.fetchticketdetail(Number(this.props.match.params.eventId), Number(this.props.match.params.id))
        this.props.getComments(Number(this.props.match.params.id))
        this.props.getRiskValue(Number(this.props.match.params.eventId), Number(this.props.match.params.id))
        this.source.onmessage = event => {
            const data = JSON.parse(event.data);
            console.log("data is:",data) 
            this.props.addData(data)
        }
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
                    data={this.props.streamdata}
                    id={Number(this.props.match.params.eventId)}
                    onSubmit={this.onSubmit}
                    displayForm={this.props.redirectToggle.display}
                    comments={this.props.comments}
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
        redirectToggle: state.redirect,
        comments: state.comments
    }
}

export default connect(mapStateToProps,{fetchticketdetail,getRiskValue,addData,eventDetails,updateEvent,getComments,formdisplay})(TicketDetailsContainer)