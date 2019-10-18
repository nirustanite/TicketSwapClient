import request from 'superagent';
import {url} from '../constants';
import {getMessage} from '../actions/useractions'

export const changeComment = (key, value) => {
    return {
         type: CHANGE_EVENTS_COMMENTS,
         payload:{
             [key]: value
         }
     }
 }


const fetchcomments = (data) => {
    return{
        type:COMMENTS_FETCHED,
        data
    }
}

export const createComment = (ticketId,data) => (dispatch,getState) =>{
     const {jwt} = getState().user
    request
         .post(`${url}/ticket/${ticketId}/comment`)
         .set("Authorization",`Bearer ${jwt}`)
         .send(data)
         .then(response => {
             dispatch(getMessage(response.body.message))
         })
         .catch(console.error)
}

export const getComments = (id) => (dispatch) => {
    request
          .get(`${url}/ticket/${id}/comment`)
          .then(response => {
              dispatch(fetchcomments(response.body))
          })
          .catch(console.error)
}

export const CHANGE_EVENTS_COMMENTS = 'CHANGE_EVENTS_COMMENTS';
export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
