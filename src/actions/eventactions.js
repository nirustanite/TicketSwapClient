import request from 'superagent';
import {url} from '../constants';


const listOfEvents = (data) => {
    console.log("events",data)
   return{
       type:EVENTS_FETCHED,
       data
   }
}

export const loadEvents = (data) => (dispatch) => {
    console.log("inside loadevents")
    request
        .get(`${url}/event`)
        .query(data)
        .then(response => {
            console.log(response.body);
            dispatch(listOfEvents(response.body))
        })
        .catch(err => console.error(err))
}

export const EVENTS_FETCHED = 'EVENTS_FETCHED'