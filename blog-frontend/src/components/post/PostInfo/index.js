
import React from 'react'
import classNames from 'classnames'
import styles from './styles.scss'
import moment from 'moment'
import {Link} from 'react-router-dom'
const cx = classNames.bind(styles)

const PostInfo = ({publishedDate,title,tags}) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>{title}</h1>
      <div className ={cx('tags')}>
        {
          tags && tags.map(
            tag => <Link key ={tag} to={`/tag/${tag}`}>#{tag}</Link>
          )
        }
      </div>
      <div className={cx('date')}>{moment(publishedDate).format('ll')}</div>
    </div>
  </div>
);

export default PostInfo
