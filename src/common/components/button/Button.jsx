import React from "react";
import s from "./Button.module.scss";

export const Button = props => {
    const { className, children, ...restProps } = props;

    const buttonClass = s.styled + " " + (className ?? className);

    return (
        <button className={buttonClass} {...restProps}>
            <i className={s.icon}>{restProps.icon && restProps.icon}</i>
            {children}
        </button>
    );
};
