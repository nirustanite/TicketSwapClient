import request from 'superagent';
import {url} from '../constants';

 
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
     return{
         type: TICKET_CREATE_SUCCESS,
         ticket
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
             dispatch(listOfTickets(response.body))
         })
}

 
export const fetchticketdetail = (eventId,id) => (dispatch) => {
    request
          .get(`${url}/event/${eventId}/ticket/${id}`)
          .then(response => {
              dispatch(ticketdetail(response.body.ticket))
          })
}



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
            dispatch(ticketCreateSuccess(response.body))
        })
        .catch(error => {
            console.error(error);
        })
}

export const updateEvent = (eventId,id,data) => (dispatch,getState) => {
    const {jwt} = getState().user;
    request
         .put(`${url}/event/${eventId}/ticket/${id}`)
         .set('Authorization', `Bearer ${jwt}`)
         .send(data)
         .then(response => {
             dispatch(ticketUpdateSuccess(response.body.message))
         })
}




export const TICKETS_FETCHED = 'TICKETS_FETCHED';
export const CHANGE_EVENT_TICKET ='CHANGE_EVENT_TICKET';
export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS';
export const FORM_DISPLAY = 'FORM_DISPLAY';
export const TICKET_DETAIL = 'TICKET_DETAIL';
export const TICKET_UPDATE_SUCCESS = 'TICKET_UPDATE_SUCCESS'
