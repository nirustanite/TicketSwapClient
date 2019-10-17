import {CHANGE_EVENT_LOGIN} from '../actions/useractions'

const initialState = {
    email: '',
    password: ''
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case CHANGE_EVENT_LOGIN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default reducer