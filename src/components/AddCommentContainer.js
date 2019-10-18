import React from 'react'
import AddComment from './AddComment'
import {changeComment,createComment} from '../actions/commentactions'
import {connect} from 'react-redux'
import {updateformdisplay} from '../actions/ticketactions'

class AddCommentContainer extends React.Component{

      onChange = (event) =>{
        this.props.changeComment(event.target.name, event.target.value)
      }

      onSubmit = (event) => {
        event.preventDefault()
        this.props.createComment(this.props.ticketinfo.id,this.props.values)
        this.props.updateformdisplay()

     }


    render(){
        
        return(
            <React.Fragment>
                    <AddComment
                    onValueChange={this.onChange}
                    values={this.props.values}
                    onSubmit={this.onSubmit}/>
                
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        values: state.changecommnets,
        ticketinfo: state.ticketinfo,
    }
}

export default connect(mapStateToProps,{changeComment,createComment,updateformdisplay})(AddCommentContainer)
