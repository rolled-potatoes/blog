
import React from 'react'
import classNames from 'classnames'
import Button from '../../common/Button'
import styles from './styles.scss'

const cx = classNames.bind(styles)

const Pagination = ({ }) => (
  <div className = {cx('pagination')}>
    <Button disabled>이전 페이지</Button>
    <div className ={cx('number')}>페이지 1</div>
    <Button>다음 페이지</Button>
  </div>
);

export default Pagination
