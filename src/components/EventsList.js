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
import {url} from '../constants';
import Image from 'material-ui-image';
import CreateEventFormContainer from './CreateEventFormContainer';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));


export default function EventsList(props) {
  const classes = useStyles();
  const user = useSelector(state => state.user); 
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
                Buy and Sell Tickets
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {props.events && props.events.map((event,i) => (
               <Grid item key={i} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <Image src={`${url}/images/event/${event.id}`}/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Event Name:{event.eventname}
                    </Typography>
                    <Typography>
                      Event Description: {event.description}
                    </Typography>
                    <Typography>
                      Start Date: {event.startDate}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link to={`/ticketlist/${event.id}`} variant="body2">
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
                >AddEvent</Button>}
            {user.jwt && props.displayForm && <CreateEventFormContainer />}
        </Grid>
      </main>
    </React.Fragment>
  );
}


