import React from "react";
import s from "./Skill.module.scss";
import { IconContext } from "react-icons";

export const Skill = props => {
    return (
        <div className={s.container}>
            <div className={s.inner}>
                <IconContext.Provider value={{ className: s.skillIcon }}>
                    {props.children}
                </IconContext.Provider>
            </div>
            <h3>{props.title}</h3>
        </div>
    );
};
