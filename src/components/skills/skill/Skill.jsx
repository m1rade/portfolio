import { FadeIn } from "common/components";
import React from "react";
import { IconContext } from "react-icons";
import s from "./Skill.module.scss";

export const Skill = props => {
    return (
        <FadeIn x={props.x} y={props.y} className={s.container}>
            <div className={s.inner}>
                <IconContext.Provider value={{ className: s.icon }}>{props.children}</IconContext.Provider>
            </div>
            <h3>{props.title}</h3>
        </FadeIn>
    );
};
