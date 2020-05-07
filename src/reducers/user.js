import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actions/useractions'


const reducer = (state = {}, action={}) => {
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return {...state, ...action.event}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}


export default reducer;