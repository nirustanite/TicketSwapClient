import {CHANGE_EVENTS} from '../actions/eventactions'

const initialState =  {
    eventname: '',
    decription: '',
    startDate: '',
    endDate:''
}

const reducer = (state = initialState, action={}) => {
    switch(action.type){
        case CHANGE_EVENTS:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default reducer