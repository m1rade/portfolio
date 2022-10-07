import React from "react";
import s from "./Project.module.css";
import sCard from "../../../common/styles/Card.module.css";

const Project = (props) => {
    return (
        <div className={sCard.container}>
            <div className={s.pictureContainer}>
                <button>See</button>
            </div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

export default Project;
