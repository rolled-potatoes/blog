
import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import Button from '../../common/Button'
const cx = classNames.bind(styles)

const EditorHeader = ({onGoBack,onSubmit,idEdit }) => {
  
  return(
    <div className={cx('editor-header')}>
      <div className ={cx('back')}>
        <Button onClick= {onGoBack} theme ="outline">
          뒤로가기
        </Button>
      </div>
      <div className={cx('submit')} >
        <Button onClick={onSubmit} theme ='outline'>
          {idEdit?'수정':'작성'}하기
        </Button>

      </div>
    </div>
  )
}
export default EditorHeader
