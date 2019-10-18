import {CHANGE_EVENTS_COMMENTS} from '../actions/commentactions'

const initialState =  {
   comment:''
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case CHANGE_EVENTS_COMMENTS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export default reducer