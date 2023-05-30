import React from "react";
import s from "./Button.module.scss";

export const Button = props => {
    const {className, wrapperClass, children, ...restProps} = props;

    const wrapperClassFinal = s.wrapper + " " + (wrapperClass ?? wrapperClass);
    const buttonClass = s.styled + " " + (className ?? className);

    return (
        <div className={wrapperClassFinal}>
            <button className={buttonClass} {...restProps}>
                <i className={s.icon}>{restProps.icon && restProps.icon}</i>
                {children}
            </button>
        </div>
    );
};
