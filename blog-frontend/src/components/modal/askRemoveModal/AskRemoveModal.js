import React, { Component } from 'react';
import styles from './style.scss'
import classnames from 'classnames'
import ModalWrapper from '../ModalWrapper/ModalWrapper'
import Button from '../../common/Button'
const cx = classnames.bind(styles)

const AskRemoveModal=({visible, onConfirm, onCancel})=>(
    <ModalWrapper visible={visible}>
        <div className={cx('question')}>
            <div className={cx('title')}>포스트 삭제</div>
            <div className={cx('description')}>이 포스트를 정말로 삭제하시겠습니까?</div>
        </div>
        <div className={cx('options')}>
            <Button theme='gray' onClick={onCancel}>취소</Button>
            <Button onClick={onConfirm}>삭제</Button>
        </div>
    </ModalWrapper>
)

export default AskRemoveModal;