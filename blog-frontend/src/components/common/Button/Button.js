import React from 'react';
import styles from './Button.scss'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

const cx = classNames.bind(styles)
const Div = ({children, ...rest}) =><div {...rest}>{children}</div>

const Button = ({children,to,onClick,disabled,theme='default'}) => {
    const Element = (to && !disabled) ? Link : Div
    console.log(disabled)
    return (
        <Element
            to={to}
            className = {cx('button',theme,{disabled})}
            onClick = {disabled ? ()=> null : onClick}
            >
            {children}

        </Element>
    );
}

export default Button;
