import request from 'superagent';
import {url} from '../constants';


const userLoginSuccess = event => {
    console.log(event)
   return{
    type: USER_LOGIN_SUCCESS,
    event
   }
}

export const redirect = () => ({
    type: REDIRECT,
    payload: {
        redirect:true
    }
})


export const getMessage = (message) =>  {
    return {
        type: MESSAGE,
        payload: message
    }
}


export const logout = () => {
    return {
        type: USER_LOGOUT,
    }
}

export const signup = (data) => (dispatch) => {
    console.log(url)
    request
          .post(`${url}/user`)
          .send(data)
          .then(response => {
            console.log('res message?', response.body.message)  
            dispatch(getMessage(response.body.message))
        })
          .catch(error => {
              console.error(error);
              console.log('Response message:', error.response.body.message)
              dispatch(getMessage(error.response.body.message))
          })
}

export const login = (data) => (dispatch) => {
    console.log("login data",data)
    request
          .post(`${url}/login`)
          .send(data)
          .then(response =>{
            console.log('what is response.body?', response.body)
            dispatch(userLoginSuccess(response.body))
          })
          .catch(error => {
            console.error(error);
            console.log('Response message:', error.response.body.message)
            dispatch(getMessage(error.response.body.message))
        })
}


export const CHANGE_EVENT = 'CHANGE_EVENT';
export const CHANGE_EVENT_LOGIN = 'CHANGE_EVENT_LOGIN';
export const REDIRECT = 'REDIRECT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const MESSAGE = 'MESSAGE';
export const USER_LOGOUT='USER_LOGOUT';