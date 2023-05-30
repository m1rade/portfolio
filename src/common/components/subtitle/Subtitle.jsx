import React from "react";
import s from "./Subtitle.module.scss";

export const Subtitle = props => {
    return (
        <div className={s.box}>
            <h4>
                <i className={s.icon}>{props.icon}</i>
                {props.subtitle}
            </h4>
        </div>
    );
};
