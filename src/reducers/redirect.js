import {REDIRECT} from '../actions/useractions'

const initialState = {
    redirect: false
}

const reducer = (state=initialState, action={}) =>{
    switch(action.type){
        case REDIRECT:
            return {...action.payload}
        default:
            return state
    }
}

export default reducer;