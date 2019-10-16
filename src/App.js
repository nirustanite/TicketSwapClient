import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'
import SignInContainer from './components/SignInContainer'
import SignUpContainer from './components/SignUpContainer'
import TicketListContainer from './components/TicketListContainer'
import TicketDetails from './components/TicketDetails'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
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
                        <Link href="/" variant="h6" color="primary" noWrap className={classes.toolbarTitle}>
                              Buy and Sell Ticket App
                        </Link>
                        {!user.jwt &&
                        <Link href="/login" variant="body2">
                              Login
                        </Link>}
                        {user.jwt && 
                         <Link href="/logout">{user.firstname}</Link>}
                      </Toolbar>
                </AppBar>
          <Route path="/" exact component={EventsListContainer} />
          <Route path="/login" component={SignInContainer} />
          <Route path="/signup" component={SignUpContainer} />
          <Route path="/ticketlist/:id" component={TicketListContainer} />
          <Route path="/ticketdetails" component={TicketDetails} />
          <Route path="/logout" component={Logout} />
        </React.Fragment>
      )
}



export default App;
