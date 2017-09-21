import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePost, fetchComments } from '../utils/api'
import { removePost, fetchComments as fetchCommentsAction } from '../actions'
import CommentList from './commentList'
import CreateComment from './createComment'
import Voting from './voting'
import { formatTimestamp } from '../utils/helpers'

class Post extends Component {
  state = {
    isDeleted: false
  }

  delete = () => {
    const { id } = this.props.post

    deletePost(id)
    .then(res => {
      this.setState({ isDeleted: true })
      this.props.deletePost({ id })
    })
  }

  fetchComments(id) {
    if (!this.props.comments) {
      fetchComments(id)
      .then(comments => {
        this.props.fetchComments({
          parentId: id,
          comments
        })
      })
    }
  }

  componentDidMount() {
    this.fetchComments(this.props.post.id)
  }

  render() {
    const { id, title, author, timestamp, body, voteScore, deleted, category } = this.props.post
    const { comments } = this.props
    const timeString = formatTimestamp(timestamp)

    return (
      <div>
        {deleted !== true && (
          <div>
            {this.state.isDeleted !== true && (
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
                      <Voting type='post' id={id} />
                      <h5>vote score: <span>{voteScore}</span></h5>
                    </div>
                    <div>
                      {body}
                    </div>
                  </div>
                  <br/><br/>
                  <div>
                    <div>
                      <Link to={`/${category}/${id}/edit`}>Edit</Link>
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
                    <CreateComment postId={id} />
                  </div>
                  <div className='comment-list'>
                    {comments &&
                      <CommentList
                        comments={comments.filter(comment => comment.deleted === false)} />}
                  </div>
                </div>
              </div>
            )}
            {this.state.isDeleted && (
              <div>
                <div>Successfully deleted</div>
                <Link to='/'>Go back</Link>
              </div>
            )}
          </div>
        )}
        {deleted === true && (
          <div>
            no such post <br/><br/>
            <div>
              <Link to='/'>Go to main</Link>
            </div>
          </div>
        )}
      </div>


    )
  }
}

function mapStateToProp(state, props) {
  if (state.posts) {
    const postId = props.match.params.post_id
    const posts =  state.posts.filter(post => post.id === postId)

    if (posts.length > 0) {
      let post = posts[0]
      let isCommentsCached = state.commentsCache.filter(c => c === post.id).length > 0 ? true : false

      if (isCommentsCached) {
        var comments = state.comments.filter(comment => comment.parentId === post.id)
      }

      return isCommentsCached ? { post, comments } : { post }
    }
  }

  return { post: {} }
}

function mapDispatchToProps(dispatch) {
  return {
    deletePost: (id) => dispatch(removePost(id)),
    fetchComments: (data) => dispatch(fetchCommentsAction(data))
  }
}
export default connect(mapStateToProp, mapDispatchToProps)(Post)
