import React from "react";
import s from "./Tooltip.module.scss";

export const Tooltip = props => {
    return <span className={props.className ? `${s.tooltip} ${props.className}` : s.tooltip}>{props.content}</span>;
};
