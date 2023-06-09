import { FadeIn } from "common/components";
import React from "react";
import s from "./Project.module.scss";

export const Project = props => {
    return (
        <div className={s.item}>
            <FadeIn x={props.x} y={props.y} className={s.image} style={props.style}>
                <a href={props.link} target="_blank" rel="noreferrer">
                    {" "}
                </a>
                <ul className={s.techList}>
                    {props.tech.map((t, i) => {
                        return (
                            <li key={i} className={s.tech}>
                                {t}
                            </li>
                        );
                    })}
                </ul>
            </FadeIn>
            <FadeIn x={props.x} y={props.y}>
                <h2 className={s.title}>
                    <a className={s.titleLink} href={props.link} target="_blank" rel="noreferrer">
                        {props.title}
                    </a>
                </h2>
            </FadeIn>
        </div>
    );
};
