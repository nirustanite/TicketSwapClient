import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import {EventsListContainer, SignInContainer, SignUpContainer,TicketListContainer, TicketDetailsContainer, Header } from './components/index';

function App(){
    return(
      <React.Fragment>
        <Header />
        <Route path="/" exact component={EventsListContainer} />
        <Route path="/login" component={SignInContainer} />
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/ticketlist/:id" component={TicketListContainer} />
        <Route path="/event/:eventId/ticketdetails/:id" component={TicketDetailsContainer} />
      </React.Fragment>
    )
}



export default App;
