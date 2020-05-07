import { combineReducers } from 'redux'
import messages from './messages'
import redirect from './redirect'
import user from './user'
import events from './events'
import eventDetail from './eventDetail'
import tickets from './tickets'
import ticketDetail from './ticketDetail'
import eventform from './eventform'
import ticketinfo from './ticketdetailfetch'

export default combineReducers({
   messages,
   redirect,
   user,
   events,
   eventDetail,
   tickets,
   ticketDetail,
   eventform,
   ticketinfo,
})
