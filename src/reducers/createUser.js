import {CHANGE_EVENT} from '../actions/useractions'

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
}

const reducer = (state = initialState, action={}) => {
    // console.log('reducer state: ', state)
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