import {CHANGE_EVENT} from '../actions/useractions'

const initialState = {
    email: '',
    password: ''
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case CHANGE_EVENT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default reducer