import {EVENTS_FETCHED, EVENT_CREATE_SUCCESS} from '../actions/eventactions'

const reducer = (state=[], action={}) =>{
    switch(action.type){
        case EVENTS_FETCHED:
            return action.data
        case EVENT_CREATE_SUCCESS:
            return [...state, action.data.event]
        default:
            return state
    }
}

export default reducer;