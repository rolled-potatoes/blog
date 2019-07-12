
import React from 'react'
import classNames from 'classnames'
import styles from './styles.scss'

const cx = classNames.bind(styles)

const PostBody = ({ }) => (
  <div className ={cx('post-body')}>
    <div className={cx('paper')}>
      내용
    </div>
  </div>
);

export default PostBody
