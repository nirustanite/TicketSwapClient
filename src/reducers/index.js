import { combineReducers } from 'redux'
import createUser from './createUser'
import login from './userLogin'
import messages from './messages'
import redirect from './redirect'
import user from './user'
import events from './events'
import eventDetail from './eventDetail'
import tickets from './tickets'
import ticketDetail from './ticketDetail'
import eventform from './eventform'
import ticketinfo from './ticketdetailfetch'
import streamdata from './streamdata'

export default combineReducers({
   createUser,
   login,
   messages,
   redirect,
   user,
   events,
   eventDetail,
   tickets,
   ticketDetail,
   eventform,
   ticketinfo,
   streamdata
})
