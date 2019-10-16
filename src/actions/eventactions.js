import request from 'superagent';
import {url} from '../constants';


const listOfEvents = (data) => {
    console.log("events",data)
   return{
       type:EVENTS_FETCHED,
       data
   }
}

const eventDetailFetch = event => ({
    type: EVENT_DETAIL_FETCH,
    event
})


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

export const eventDetails = (id) => (dispatch) =>{
    request
        .get(`${url}/event/${id}`)
        .then(response => {
            console.log(response.body);
            dispatch(eventDetailFetch(response.body))
        })
}

export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENT_DETAIL_FETCH = 'EVENT_DETAIL_FETCH'