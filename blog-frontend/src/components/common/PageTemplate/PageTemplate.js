import React from 'react';
import styles from './PageTemplate.scss'
import classNames from 'classnames'
import HeaderContainer from '../../../containers/common/HeaderContainer'
import FooterContainer from '../../../containers/common/footerContainer'
const cx = classNames.bind(styles)

const PageTemplate = ({children}) => {
    return (
        <div className = {cx('page-template')}>
            <HeaderContainer/>
            <main>
                {children}
            </main>
            <FooterContainer/>
        </div>
    );
}

export default PageTemplate;
