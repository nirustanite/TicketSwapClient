import {EVENTS_FETCHED} from '../actions/eventactions'

const reducer = (state={}, action={}) =>{
    console.log("inside reducer",action.data)
    switch(action.type){
        case EVENTS_FETCHED:
            return {...action.data}
        default:
            return state
    }
}

export default reducer;