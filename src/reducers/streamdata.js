import {ADD_DATA} from "../actions/ticketactions"

export default function messages (state=[], action={}){
    console.log("reducers", action.type, "payload", action.payload)
    switch(action.type){
        case ADD_DATA:
            return action.payload

        default:
            return state
    }

}