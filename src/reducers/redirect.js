import {REDIRECT} from '../actions/useractions'
import {FORM_DISPLAY} from '../actions/ticketactions'

const initialState = {
    redirect: false
}

const reducer = (state=initialState, action={}) =>{
    switch(action.type){
        case REDIRECT:
            return {...action.payload}
        case FORM_DISPLAY:
            console.log(action.payload)
            return {...action.payload}
        default:
            return state
    }
}

export default reducer;