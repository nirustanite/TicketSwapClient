import {TICKETS_FETCHED} from '../actions/ticketactions'

const reducer = (state=[], action={}) =>{
    console.log("inside reducer",action.tickets)
    switch(action.type){
        case TICKETS_FETCHED:
            return action.tickets
        default:
            return state
    }
}

export default reducer;