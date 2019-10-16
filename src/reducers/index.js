import { combineReducers } from 'redux'
import createUser from './createUser'
import login from './userLogin'
import messages from './messages'
import redirect from './redirect'
import user from './user'
import events from './events'

export default combineReducers({
   createUser,
   login,
   messages,
   redirect,
   user,
   events
})
