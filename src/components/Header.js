import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {logout} from '../actions/useractions';


const useStyles = theme => ({
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
  });


class Header extends React.Component{

    // logout functionality
    handleLogout = () => {
        this.props.logout();
        
    }

    render(){
        const user = this.props.user
        const { classes } = this.props;
        return(
            <React.Fragment>
                <CssBaseline />
                <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Link to="/" variant="inherit" color="primary"  className={classes.toolbarTitle}>
                            Logo
                        </Link>
                        {!user.jwt &&
                        <Link to="/login" variant="body2">
                            Login
                        </Link>}
                       
                        {user.jwt && <nav>
                            <Typography variant="inherit" color="primary"  className={classes.link}> 
                                {user.firstname}
                            </Typography>
                            <Typography variant="inherit" color="primary" onClick={this.handleLogout} className={classes.link}> 
                                Logout >
                            </Typography>
                        </nav>}
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }    
}


const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {logout})(withStyles(useStyles)(Header))