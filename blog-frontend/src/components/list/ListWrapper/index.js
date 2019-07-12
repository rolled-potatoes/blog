
import React from 'react'
import classNames from 'classnames'
import styles from './styles.scss'
const cx= classNames.bind(styles)

const ListWrapper = ({children}) => (
  <div className={cx('list-wrapper')}>
    {children}
  </div>
);

export default ListWrapper
