import {TICKET_DETAIL} from '../actions/ticketactions'

const reducer = (state = null, action = {}) => {
    switch(action.type){
        case TICKET_DETAIL:
            return action.data
        default:
            return state
    }
}

export default reducer