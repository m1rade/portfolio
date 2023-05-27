import React from "react";
import s from "./Project.module.scss";

export const Project = props => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectImage} style={props.style}>
                <a href={props.link} target="_blank" rel="noreferrer"></a>
            </div>
            <h2 className={s.projectTitle}>
                <a href={props.link} target="_blank" rel="noreferrer">
                    {props.title}
                </a>
            </h2>
        </div>
    );
};
