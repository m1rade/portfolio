import React from "react";
import s from "./Subtitle.module.scss";

export const Subtitle = props => {
    return (
        <div className={s.subtitleBox}>
            <h4>{props.subtitle}</h4>
        </div>
    );
};
