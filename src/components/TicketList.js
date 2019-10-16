import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import Image from 'material-ui-image'
import {url} from '../constants';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1,2,3,4,5,6,7,8,9]
export default function TicketList(props) {
  const classes = useStyles();
  console.log(props.details)
  console.log(props.tickets)
  const user = useSelector(state => state.user);
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Ticket app
            </Typography>
            {props.details && 
            <Grid container spacing={1} direction="column" alignItems="center">
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              {props.details.eventname}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              {props.details.description}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              {props.details.startDate}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              {props.details.endDate}
            </Typography>
              </Grid>}
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Tickets for the corresponding events are displayed
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
           {props.details && props.tickets &&
            props.tickets.map((ticket)=> (
              <Grid item key={ticket.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  /> */}
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
                  <Link href="/ticketdetails" variant="body2">
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
                >AddTicket</Button>}
        </Grid>
      </main>
    </React.Fragment>
  );
}