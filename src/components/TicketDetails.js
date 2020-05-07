import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {url} from '../constants';


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  details: {
    marginTop: 10,
  }
}));

export default function TicketDetails(props) {
    
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Ticket Details
            </Typography>
            {props.event && 
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
               Event Name : {props.event.eventname}
            </Typography>
            }
            
            {props.ticket && 
            <Grid container spacing={1} direction="column" alignItems="center" >
               { props.ticket && <img src={`${url}/images/event/${props.id}/ticket/${props.ticket.id}`} alt="TicketImage"/> }
              <Typography component="h3"  align="center" color="textPrimary" paragraph>
                 Description: {props.ticket.description}
              </Typography>
              <Typography component="h3"  align="center" color="textPrimary" paragraph>
                Price: {props.ticket.price}
              </Typography>
              <Typography component="h3"  align="center" color="textPrimary" paragraph>
                Quantity Available: {props.ticket.quantity}
              </Typography>
            </Grid>}
             
          </Container>
        </div>
        
      </main>
    </React.Fragment>
  );
}
