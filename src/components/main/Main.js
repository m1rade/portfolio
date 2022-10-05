import React from "react";
import s from "./Main.module.css";
import sContainer from "../../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={s.block}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Hi There!</span>
                    <h1>I'm Golysheva Laura</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;
