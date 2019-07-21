
import React from 'react'
import classNames from 'classnames'
import Button from '../../common/Button'
import styles from './styles.scss'

const cx = classNames.bind(styles)

const Pagination = ({page,lastPage,tag }) => {
  const createPagePath = (page)=>{
    return tag? `/tag/${tag}/${page}` : `/page/${page}`;
  }
  return (
    <div className = {cx('pagination')}>
      <Button disabled={page===1} to ={createPagePath(page-1)}>
        이전 페이지
      </Button>

      <div className ={cx('number')}>
        페이지 {page}
      </div>

      <Button disabled ={page ===lastPage} to={createPagePath(page+1)}>
        다음 페이지
      </Button>
    </div>
  )
}


export default Pagination
