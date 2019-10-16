import React from 'react';
import {loadEvents} from '../actions/eventactions';
import { connect } from 'react-redux';
import EventsList from './EventsList';
import Pagination from "react-js-pagination";
import ReactPaginate from 'react-paginate';
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from '@material-ui/core/Grid';

window.React = React;

class EventListContainer extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          offset: 0
        };
      }

    componentDidMount(){
        this.props.loadEvents({limit: 9, offset: this.state.offset })
        if(this.props.eventsList.events){
            this.setState({
                pageCount : Math.ceil(this.props.eventsList.total/ 9)
            })
        }
    }

    componentDidUpdate(){
        //this.props.eventsList.events.map((_,event) => console.log(event))
        // this.setState({
        //     data:this.props.eventsList.events
        // })
    }

    handlePageClick = data => {
        const selected = data.selected
        let offset = Math.ceil(selected * 9);
        this.setState({offset : offset}, () => {
            this.props.loadEvents({limit: 9, offset: this.state.offset})
        })
      }

    render(){
        console.log(this.props.eventsList.events);
        return(
            <React.Fragment>
               
                {/* {this.props.eventsList.events.map(event => console.log(event))} */}
                <EventsList  events={this.props.eventsList.events}/>
                <Grid container spacing={1} direction="column" alignItems="center">
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
    //console.log(state.eventsList)
    return{
        eventsList:state.events
    }
}

export default connect(mapStateToProps,{loadEvents})(EventListContainer)