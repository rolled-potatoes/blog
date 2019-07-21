
import React from 'react'
import classNames from 'classnames'
import styles from './styles.scss'
import MarkdownRender from '../../../components/common/MarkdownRender/MarkdownRender'
const cx = classNames.bind(styles)

const PostBody = ({body}) => (
  <div className ={cx('post-body')}>
    <div className={cx('paper')}>
      <MarkdownRender markdown = {body}/>
    </div>
  </div>
);

export default PostBody
