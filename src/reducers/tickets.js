import {TICKETS_FETCHED,TICKET_CREATE_SUCCESS} from '../actions/ticketactions'

const reducer = (state=[], action={}) =>{
    switch(action.type){
        case TICKETS_FETCHED:
            return action.tickets
        case TICKET_CREATE_SUCCESS:
            return [...state,action.ticket.ticket]
        default:
            return state
    }
}

export default reducer;