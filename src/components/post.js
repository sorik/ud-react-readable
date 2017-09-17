import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost, fetchComments } from '../utils/api'
import { deletePost as deletePostAction, fetchComments as fetchCommentsAction } from '../actions'
import CommentList from './commentList'
import CreateComment from './createComment'
import { formatTimestamp } from '../utils/helpers'

class Post extends Component {
  state = {
  }

  delete = () => {
    deletePost(this.state.id)
    .then(res => {
      this.setState({ isSucceed: true })
      this.props.deletePost({ id: this.state.id })
    })
  }

  commentDeleted = (id) => {
    this.setState(state => {
      return { comments: state.comments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            deleted: true
          }
        } else {
          return comment
        }
      })}
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
    if (!this.state.comments) {
      fetchComments(id)
      .then(comments => {
        console.log('fetchComments')
        console.log(comments)
        this.props.fetchComments({
          postId: id,
          comments
        })
      })
    }
  }

  componentDidMount() {
    this.setPostState()
    this.fetchComments(this.props.post.id)
  }

  render() {
    const { id, title, author, timestamp, body, voteScore } = this.state
    const { comments } = this.props
    const timeString = formatTimestamp(timestamp)

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
                <CreateComment postId={this.state.id} />
              </div>
              <div className='comment-list'>
                {comments &&
                  <CommentList
                    comments={comments}
                    onDelete={this.commentDeleted}/>}
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

    if (posts.length > 0) {
      let post = posts[0]
      let comments = state.comments[post.id]
      return comments ? { post, comments } : { post }
    }
  } else {
    return { post: {} }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (id) => dispatch(deletePostAction(id)),
    fetchComments: (data) => dispatch(fetchCommentsAction(data))
  }
}
export default connect(mapStateToProp, mapDispatchToProps)(Post)
