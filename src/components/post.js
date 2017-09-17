import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { deletePost, fetchComments } from '../utils/api'
import { deletePost as deletePostAction} from '../actions'
import CommentList from './commentList'

const TIME_FORMAT = 'DD-MM-YYYY HH:mm:ss'

class Post extends Component {
  state = {
    comments: []
  }

  delete = () => {
    deletePost(this.state.id)
    .then(res => {
      this.setState({ isSucceed: true })
      this.props.deletePost({ id: this.state.id })
    })
  }

  setPostState() {
    const { id, title, author, timestamp, body, voteScore } = this.props.post

    this.setState({
      id,
      title,
      author,
      timestamp,
      body,
      voteScore
    })
  }

  fetchComments(id) {
    fetchComments(id)
    .then(comments => {
      this.setState({ comments })
    })
  }

  componentDidMount() {
    this.setPostState()
    this.fetchComments(this.props.post.id)
  }

  render() {
    const { id, title, author, timestamp, body, voteScore } = this.state
    const timeString = moment(timestamp).format(TIME_FORMAT)

    return (
      <div>
        {this.state.isSucceed !== true && (
          <div>
             <div className='post-detail'>
              <div>
                <div>
                  <h2>{title}</h2>
                </div>
                <div>
                  <h4>Author: <span>{author}</span></h4>
                </div>
                <div>
                  <h5>wrote at: <span>{timeString}</span></h5>
                </div>
                <div>
                  <h5>vote score: <span>{voteScore}</span></h5>
                </div>
                <div>
                  {body}
                </div>
              </div>
              <br/><br/>
              <div>
                <div>
                  <Link to={'/edit/' + id}>Edit</Link>
                </div>
              </div>
              <div>
                <div>
                  <button onClick={this.delete}>Delete</button>
                </div>
              </div>
              <div>
                <div>
                  <Link to='/'>Go to main</Link>
                </div>
              </div>
            </div>
            <br/><br/>
            <div className='post-comments'>
              <div className='create-comment'>
              </div>
              <div className='comment-list'>
                <CommentList comments={this.state.comments}/>
              </div>
            </div>
          </div>
        )}
        {this.state.isSucceed && (
          <div>
            <div>Successfully deleted</div>
            <Link to='/'>Go back</Link>
          </div>
        )}


      </div>
    )
  }
}

function mapStateToProp(state, props) {
  if (state.posts) {
    const postId = props.match.params.id
    const posts =  state.posts.filter(post => post.id === postId)

    return posts.length > 0 ? { post: posts[0] } : { post: {} }
  } else {
    return { post: {} }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (id) => dispatch(deletePostAction(id))
  }
}
export default connect(mapStateToProp, mapDispatchToProps)(Post)
