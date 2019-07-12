
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import MarkdownRender from '../../common/MarkdownRender/MarkdownRender'
const cx = classNames.bind(styles)

const PreviewPane = ({markdown,title}) => (
  <div className={cx('preview-pane')}>
    <h1 className={cx('title')}>{title}</h1>
    <div><MarkdownRender markdown={markdown}/></div>
  </div>
);

export default PreviewPane
