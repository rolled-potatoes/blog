
import React from 'react'
import styles  from './styles.scss'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)

const Footer = ({onLoginClick,logged}) => (
  <footer className = {cx('footer')}>
    <Link to ='/' className= {cx('brand')}>React Blog </Link>
    <div className = {cx('admin-login')} onClick={onLoginClick}>
      {logged? '로그아웃': '관리자 로그인'}
    </div>
  </footer>
);

export default Footer
