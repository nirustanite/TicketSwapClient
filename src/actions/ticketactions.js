import request from 'superagent';
import {url} from '../constants';
import {getMessage} from './useractions'
import upload from 'superagent'
 
const listOfTickets = (tickets) => {
    return{
        type:TICKETS_FETCHED,
        tickets
    }
}


export const changeEventTickets = (key, value) => {
    return {
         type: CHANGE_EVENT_TICKET,
         payload:{
             [key]: value
         }
     }
 }

 export const formdisplay = () => ({
    type: FORM_DISPLAY,
    payload: {
        display:true
    }
})

const ticketUpdateSuccess = data => ({
    type: TICKET_UPDATE_SUCCESS,
    data
})

export const updateformdisplay = () => ({
    type: FORM_DISPLAY,
    payload: {
        display:false
    }
})
 const ticketCreateSuccess = (ticket) => {
     console.log("ticket create success",ticket)
     return{
         type: TICKET_CREATE_SUCCESS,
         ticket
     }
 }

 export const submitEvent = () => {
    return {
        type: SUBMIT_EVENT
    }
}

export const ticketdetail = (data) => {
    return{
        type: TICKET_DETAIL,
        data
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

 
export const fetchticketdetail = (eventId,id) => (dispatch) => {
    console.log("inside fetchdetail")
    console.log(id,eventId)
    request
          .get(`${url}/event/${eventId}/ticket/${id}`)
          .then(response => {
              console.log(response.body.ticket)
              dispatch(ticketdetail(response.body.ticket))
          })
}

export const addData = (payload) => ({
    type: ADD_DATA,
    payload
})

export const createTicket = (eventid,data,file) => (dispatch,getState) => {
    const { jwt } = getState().user;
    request
        .post(`${url}/event/${eventid}/ticket`)
        .set('Authorization', `Bearer ${jwt}`)
        .attach("avatar",file,"image.png")
        .field("price",data.price)
        .field("description",data.description)
        .field("quantity",data.quantity)
        .then(response => {
            console.log(response.body)
            dispatch(ticketCreateSuccess(response.body))
        })
        .catch(error => {
            console.error(error);
        })
}

export const updateEvent = (eventId,id,data) => (dispatch,getState) => {
    console.log("inside update event")
    console.log("ticket id",id)
    const {jwt} = getState().user;
    request
         .put(`${url}/event/${eventId}/ticket/${id}`)
         .set('Authorization', `Bearer ${jwt}`)
         .send(data)
         .then(response => {
             console.log(response.body.message)
             dispatch(ticketUpdateSuccess(response.body.message))
         })
}

export const getRiskValue = (eventId,id) => (dispatch) => {
    request
          .get(`${url}/event/${eventId}/ticket/${id}/risk`)
          .then(response => {
              console.log(response.body.message)
          })
}



export const TICKETS_FETCHED = 'TICKETS_FETCHED';
export const CHANGE_EVENT_TICKET ='CHANGE_EVENT_TICKET';
export const SUBMIT_EVENT = 'SUBMIT_EVENT';
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS';
export const FORM_DISPLAY = 'FORM_DISPLAY';
export const TICKET_DETAIL = 'TICKET_DETAIL';
export const ADD_DATA = 'ADD_DATA';
export const TICKET_UPDATE_SUCCESS = 'TICKET_UPDATE_SUCCESS'
