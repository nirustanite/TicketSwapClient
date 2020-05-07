import {MESSAGE} from '../actions/useractions'

const reducer = (state='', action={}) =>{
    switch(action.type){
        case MESSAGE:
            return action.payload
        default:
            return state
    }
}

export default reducer;