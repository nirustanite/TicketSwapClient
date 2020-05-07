import {CHANGE_EVENT_TICKET,TICKET_UPDATE_SUCCESS} from '../actions/ticketactions'

const initialState =  {
    price: '',
    quantity: '',
    description: ''
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case CHANGE_EVENT_TICKET:
            return {
                ...state,
                ...action.payload
            }
        case TICKET_UPDATE_SUCCESS:
            return initialState
        default:
            return state
    }
}
export default reducer