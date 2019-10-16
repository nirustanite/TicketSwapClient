import { combineReducers } from 'redux'
import createUser from './createUser'
import login from './userLogin'
import messages from './messages'
import redirect from './redirect'
import user from './user'
import events from './events'
import eventDetail from './eventDetail'
import tickets from './tickets'

export default combineReducers({
   createUser,
   login,
   messages,
   redirect,
   user,
   events,
   eventDetail,
   tickets
})
