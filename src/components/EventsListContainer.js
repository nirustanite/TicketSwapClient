import React from 'react';
import {loadEvents} from '../actions/eventactions';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import ReactPaginate from 'react-paginate';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from '@material-ui/core/Grid';
import {formdisplay} from '../actions/ticketactions';


class EventListContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
        };
      }

    componentWillMount(){
        this.props.loadEvents({limit: 9, offset: this.state.offset })
        if(this.props.eventsList.events){
            this.setState({
                pageCount : Math.ceil(this.props.eventsList.total/ 9)
            })
        }
    }


    onSubmit = (e) => {
        e.preventDefault()
        this.props.formdisplay()
        
    }

    handlePageClick = data => {
        const selected = data.selected
        let offset = Math.ceil(selected * 9);
        this.setState({offset : offset}, () => {
            this.props.loadEvents({limit: 9, offset: this.state.offset,data})
        })
      }

    render(){
        return(
            <React.Fragment>
                {this.props.eventsList && <EventsList events={this.props.eventsList.events}
                   onSubmit={this.onSubmit}
                   displayForm={this.props.redirectToggle.display}/>}
                <br></br>
                <Grid container spacing={1} direction="column" alignItems="center" >
                <ReactPaginate
                    hideDisabled
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
               </Grid>
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        eventsList:state.events,
        redirectToggle: state.redirect
    }
}

export default connect(mapStateToProps,{loadEvents,formdisplay})(EventListContainer)



