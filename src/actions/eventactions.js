import request from 'superagent';
import {url} from '../constants';


const listOfEvents = (data) => {
   return{
       type:EVENTS_FETCHED,
       data
   }
}

const eventDetailFetch = event => ({
    type: EVENT_DETAIL_FETCH,
    event
})


const eventCreateSuccess = (data) => {
    return{
        type: EVENT_CREATE_SUCCESS,
        data
    }
}

export const changeEvents = (key, value) => {
    return {
         type: CHANGE_EVENTS,
         payload:{
             [key]: value
         }
     }
 }

export const loadEvents = (data) => (dispatch) => {
    request
        .get(`${url}/event`)
        .query(data)
        .then(response => {
            dispatch(listOfEvents(response.body))
        })
        .catch(err => console.error(err))
}

export const eventDetails = (id) => (dispatch) =>{
    request
        .get(`${url}/event/${id}`)
        .then(response => {
            dispatch(eventDetailFetch(response.body))
        })
}


export const createEvent = (data,file) => (dispatch,getState) => {
    const { jwt } = getState().user;
    request
        .post(`${url}/event`)
        .set('Authorization', `Bearer ${jwt}`)
        .attach("avatar",file,"logo.png")
        .field("eventname",data.eventname)
        .field("description",data.description)
        .field("startDate",data.startDate)
        .field("endDate",data.endDate)
        .then(response => {
            dispatch(eventCreateSuccess(response.body))
        })
        .catch(error => {
            console.error(error);
        })
}


export const EVENTS_FETCHED = 'EVENTS_FETCHED';
export const EVENT_DETAIL_FETCH = 'EVENT_DETAIL_FETCH'
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
export const CHANGE_EVENTS = 'CHANGE_EVENTS'