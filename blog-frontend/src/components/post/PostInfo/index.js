
import React from 'react'
import classNames from 'classnames'
import styles from './styles.scss'

const cx = classNames.bind(styles)

const PostInfo = ({ }) => (
  <div className={cx('post-info')}>
    <div className={cx('info')}>
      <h1>타이틀</h1>
      <div className ={cx('tags')}>
        <a>#태그</a>
        <a>#태그</a>
        <a>#태그</a>
        <a>#태그</a>
      </div>
      <div className={cx('date')}>jul 18, 2019</div>
    </div>
  </div>
);

export default PostInfo
