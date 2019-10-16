import {EVENT_DETAIL_FETCH} from '../actions/eventactions'

const reducer = (state = null, action = {}) => {
    switch(action.type){
        case EVENT_DETAIL_FETCH:
            return action.event
        default:
            return state
    }
}

export default reducer