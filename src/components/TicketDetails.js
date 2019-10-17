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
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Image from 'material-ui-image';
import {url} from '../constants'
import CreateTicketForm from './CreateTicketForm';


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

export default function TicketDetails(props) {
    
  const classes = useStyles();
  console.log(props.event)
  console.log(props.ticket)
  console.log(props.data)
  console.log(props.id)

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
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Ticket Details
            </Typography>
            {props.event && 
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
               Event Name : {props.event.eventname}
            </Typography>
            }
            {props.ticket && 
            <Grid container spacing={1} direction="column" alignItems="center">
                {/* {console.log(`${url}/images/event/${props.event.id}/ticket/${props.ticket.id}`)} */}
            { props.ticket && <img src={`${url}/images/event/${props.id}/ticket/${props.ticket.id}`}/> }
            {props.data && props.data.map(data => {
               if(data.id === props.ticket.id){
                 
                   return <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
                   We calculated that the risk of this ticket being a fraud is {data.risk * 100} % 
                   </Typography>
               }
            })}
            
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              {props.ticket.description}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              {props.ticket.price}
            </Typography>
            <Typography component="h3"  align="center" color="textPrimary" gutterBottom>
              {props.ticket.quantity}
            </Typography>
            
              </Grid>}
           
          </Container>
          {/* {user.jwt && 
             <Grid container spacing={1} direction="column" alignItems="center">
              <Button
                 align="center"
                 type="submit"
                 variant="contained"
                 color="primary"
                 onClick={props.onSubmit}
                >Add Comment</Button>  
        </Grid>} */}
        </div>
        
      </main>
    </React.Fragment>
  );
}
