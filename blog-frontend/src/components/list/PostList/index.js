
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import moment from 'moment'
import removeMK from 'remove-markdown'

const cx = classNames.bind(styles);

const PostItem = ({title,body,publishedDate, tags,id}) => {
  const TagList = tags.map(
    tag => <Link key ={tag} to ={`/tag/${tag}`}>#{tag}</Link>
  )
  return(
    <div className={cx('post-item')}>
      <h2><Link to={`/post/${id}`}>{title}</Link></h2>
      <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
      <p>{removeMK(body)}</p>
      <div className={cx('tags')}>
        {TagList}
      </div>
    </div>
  )
}
const PostList=({posts})=>{
  const postList = posts.map(
    (post)=>{
      const {title,_id,body,publishedDate,tags} = post.toJS();
      return(
        <PostItem 
          id = {_id}
          body = {body}
          publishedDate={publishedDate}
          tags = {tags}
          title= {title}
        />
      )
    }
  )
  return(
  <div className= {cx('post-list')}>
    {postList }
  </div>

  )
}


export default PostList
