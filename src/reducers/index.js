import { combineReducers } from 'redux'
import category from './category'
import comments from './comments'
import commentsCache from './commentsCache'
import posts from './posts'

export default combineReducers({ posts, comments, commentsCache, category })
