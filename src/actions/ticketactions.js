import request from 'superagent';
import {url} from '../constants';


const listOfTickets = (tickets) => {
    return{
        type:TICKETS_FETCHED,
        tickets
    }
}


export const fetchTickets = (id) => (dispatch) => {
    request
         .get(`${url}/event/${id}/ticket`)
         .then(response => {
             console.log(response.body)
             dispatch(listOfTickets(response.body))
         })
}


export const TICKETS_FETCHED = 'TICKETS_FETCHED'