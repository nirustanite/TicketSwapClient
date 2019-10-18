import {COMMENTS_FETCHED} from '../actions/commentactions'

const reducer = (state = null, action = {}) => {
    switch(action.type){
        case COMMENTS_FETCHED:
            return action.data
        default:
            return state
    }
}

export default reducer