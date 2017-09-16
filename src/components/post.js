import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

const TIME_FORMAT = 'DD-MM-YYYY HH:mm:ss'

class Post extends Component {
  render() {
    const { id, title, author, timestamp, body, voteScore } = this.props.post
    const timeString = moment(timestamp).format(TIME_FORMAT)

    return (
      <div>
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
        <div>
          <div>
            <Link to={'/edit/' + id}>Edit</Link>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProp(state, props) {
  const postId = props.match.params.id
  const posts =  state.posts.filter(post => post.id === postId)

  return posts.length > 0 ? { post: posts[0] } : { post: {} }
}

export default connect(mapStateToProp)(Post)
