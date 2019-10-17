import {TICKETS_FETCHED,TICKET_CREATE_SUCCESS,} from '../actions/ticketactions'

const reducer = (state=[], action={}) =>{
    console.log("inside reducer",action.tickets)
    switch(action.type){
        case TICKETS_FETCHED:
            return action.tickets
        case TICKET_CREATE_SUCCESS:
            console.log({...action.ticket})
            return [...state,action.ticket.ticket]
        
        default:
            return state
    }
}

export default reducer;