import React from "react";
import s from "./Title.module.scss";

export const Title = props => {
    return (
        <div className={s.title}>
            <h2>
                {props.title} <span>{props.title2}</span>
            </h2>
        </div>
    );
};
