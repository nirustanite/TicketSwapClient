import React from 'react';
import './App.css';
import { Route,Link } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import SignInContainer from './components/SignInContainer'
import SignUpContainer from './components/SignUpContainer'
import TicketListContainer from './components/TicketListContainer'
import TicketDetailsContainer from './components/TicketDetailsContainer'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Logout from './components/Logout'

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function App(){
  const classes = useStyles();
  const user = useSelector(state => state.user);
  console.log("user state after login",user)
      return(
        <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
                   <Toolbar className={classes.toolbar}>
                        <Link to="/" variant="h6" color="primary" noWrap className={classes.toolbarTitle}>
                              Buy and Sell Ticket App
                        </Link>
                        {!user.jwt &&
                        <Link to="/login" variant="body2">
                              Login
                        </Link>}
                        {user.jwt && 
                         <Link to="/logout">{user.firstname}</Link>}
                      </Toolbar>
                </AppBar>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/login" component={SignInContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/ticketlist/:id" component={TicketListContainer} />
          <Route path="/event/:eventId/ticketdetails/:id" component={TicketDetailsContainer} />
          <Route path="/logout" component={Logout} />
        </React.Fragment>
      )
}



export default App;
