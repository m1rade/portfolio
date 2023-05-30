import React from "react";
import s from "./Button.module.scss";

export const Button = ({className, wrapperClass, children, ...restProps}) => {
    const wrapperClassFinal = s.wrapper + " " + (wrapperClass ?? wrapperClass);
    const buttonClass = s.styled + " " + (className ?? className)

    return (
        <div className={wrapperClassFinal}>
            {restProps.icon && restProps.icon}
            <button className={buttonClass} {...restProps}>
                {children}
            </button>
        </div>
    );
};
