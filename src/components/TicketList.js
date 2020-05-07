import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from 'material-ui-image'
import {url} from '../constants';
import CreateTicketFormContainer from './CreateTicketFormContainer';


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function TicketList(props) {
  const classes = useStyles();
  const user = useSelector(state => state.user);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Ticket app
            </Typography>
            {props.details && 
            <Grid container spacing={1} direction="column" alignItems="center">
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              Event Name : {props.details.eventname}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              Event Description: {props.details.description}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              Start Date: {props.details.startDate}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              End Date: {props.details.endDate}
            </Typography>
              </Grid>}
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Tickets
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
           {props.details && props.tickets &&
            props.tickets.map((ticket,i)=> (
              <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <Image src={`${url}/images/event/${props.details.id}/ticket/${ticket.id}`}/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Price : {ticket.price}
                    </Typography>
                    <Typography>
                      Description : {ticket.description}
                    </Typography>
                    <Typography>
                      Quantity : {ticket.quantity}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link to={`/event/${props.details.id}/ticketdetails/${ticket.id}`} variant="body2">
                     View
                  </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Grid container spacing={1} direction="column" alignItems="center">
        {user.jwt && 
                <Button
                 align="center"
                 type="submit"
                 variant="contained"
                 color="primary"
                 onClick={props.onSubmit}
                >AddTicket</Button>   
          }
         {user.jwt && props.displayForm && <CreateTicketFormContainer />}
        </Grid>
      </main>
    </React.Fragment>
  );
}