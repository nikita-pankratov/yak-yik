/**
 * Created by pankratov on 7/9/17.
 */
import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import styles from './styles';
import superagent from 'superagent';

class Comments extends Component {
    constructor(){
        super();

        this.state = {
            newComment: {
                username: '',
                body: '',
                timestamp: ''
            },
            list: []
        }
    }

    componentDidMount(){
        superagent
            .get('/api/comment')
            .query(null)
            .set('Accept', 'application/json')
            .end((err, response) => {
                if (err) {
                    alert('ERROR:'+err);
                    return;
                }

                let results = response.body.results;
                this.setState({list: results});
            })
    }

    updateTimestamp(event){
        console.log('updateTimestamp: '+ event.target.value);

        // DO NOT UPDATE THE STATE BUT RATHER RE-ASSIGN
        let updatedTimestamp = Object.assign({}, this.state.newComment);
        updatedTimestamp['timestamp'] = event.target.value;
        this.setState({newComment: updatedTimestamp});
    }

    updateBody(event){
        console.log('updateBody: '+ event.target.value);

        // DO NOT UPDATE THE STATE BUT RATHER RE-ASSIGN
        let updatedComment = Object.assign({}, this.state.newComment);
        updatedComment['body'] = event.target.value;
        this.setState({newComment: updatedComment});
    }

    updateUsername(event){
        console.log('updateUsername: ' + event.target.value);

        // DO NOT UPDATE THE STATE BUT RATHER RE-ASSIGN
        let updatedComment = Object.assign({}, this.state.newComment);
        updatedComment['username'] = event.target.value;
        this.setState({newComment: updatedComment});
    }

    submitComment(){
        console.log('submitComment' + JSON.stringify(this.state.newComment));

        let updatedList = Object.assign([], this.state.list);
        updatedList.push(this.state.newComment);
        this.setState({list: updatedList});
    }


    render(){
        const listItems = this.state.list.map((comment, i) => {
            return ( <li key={i}> <Comment comment={comment} /> </li> )
        });

        return(
            <div>
                <h2>Comments: Zone 1 </h2>
                <div style={styles.comment.commentsBox}>
                    <ul style={styles.comment.commentsList}>
                        {listItems}
                    </ul>

                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /> <br/>
                    <input onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder="Comment" /> <br/>
                    <input onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder="Time Stamp" /> <br/>
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

                </div>
            </div>
        )
    }
}

export default Comments;