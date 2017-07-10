/**
 * Created by pankratov on 7/9/17.
 */
import React, { Component } from 'react';

class Comment extends Component {
    render(){
        return(
            <div>
                <p style={{fontSize: 20, fontWeight: 400}} >
                   {this.props.comment.body}
                </p>

                <span style={{fontWeight: 200}}> {this.props.comment.username} </span>
                <span style={{fontWeight: 200, marginLeft: 12, marginRight: 12}}>|</span>
                <span style={{fontWeight: 200}}> {this.props.comment.timestamp} </span>
                <hr />
            </div>
        )
    }
}

export default Comment;


{/*<span><div>{this.props.comment.username}</div> | <div>{this.props.comment.timestamp}</div> </span>*/}
{/*<div>&nbsp;&nbsp;{this.props.comment.body}</div>*/}