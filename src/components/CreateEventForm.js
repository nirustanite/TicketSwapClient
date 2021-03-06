import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
           Add Event
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="eventname"
                label="Event Name"
                name="eventname"
                autoComplete="eventname"
                values={props.values.eventname}
                onChange={props.onValueChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="description"
                values={props.values.description}
                onChange={props.onValueChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="startDate"
                name="startDate"
                variant="outlined"
                required
                fullWidth
                type="date"
                id="startDate"
                label="startDate"
                values={props.values.startDate}
                onChange={props.onValueChange}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                autoComplete="endDate"
                name="endDate"
                variant="outlined"
                required
                fullWidth
                type="date"
                id="endDate"
                label="Date"
                values={props.values.startDate}
                onChange={props.onValueChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.onSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}