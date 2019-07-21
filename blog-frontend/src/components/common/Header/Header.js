import React from 'react'
import styles from './Header.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Button from '../Button'

const cx = classNames.bind(styles)

const Header = ({ postId, onRemove, logged }) => {
  return (
    <header className={cx('header')}>
      <div className={cx('haeder-content')}>
        <div className={cx('brand')}>
          <Link to="/">React Blog</Link>
        </div>
        {logged && <div className={cx('right')}>
          {
            postId && [
              <Button key="edit" theme='outline' to={`/editor?id=${postId}`}>수정</Button>,
              <Button key='remove' theme='outline' onClick={onRemove}>삭제</Button>
            ]
          }
          <Button theme='outline' to='/editor'>새 포스트</Button>
        </div>
        }
      </div>
    </header>
  )
}

export default Header